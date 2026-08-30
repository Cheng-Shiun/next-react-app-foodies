import sql from "better-sqlite3";
import { translate } from "google-translate-api-x";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "ap-southeast-1",
});
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("載入食譜數據發生錯誤...");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // return db.prepare("SELECT * FROM meals WHERE slug = " + slug); // 易受 XSS 攻擊
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function setMeal(meal) {
  // 翻譯 title
  try {
    const translation = await translate(meal.title, { to: "en" });
    const enTitle = translation.text;

    // const slug = slugify(meal.title, { lower: true });
    meal.slug = slugify(enTitle, { lower: true, strict: true });
  } catch (error) {
    meal.slug = `meal-${Date.now()}`; // 用時間戳代替
  }

  // const instructions = xss(meal.instructions);
  meal.instructions = xss(meal.instructions);

  // 取得 image 副檔名、檔名
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // 創建 stream 檔案流(寫入路徑用)
  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("儲存圖片失敗...");
  //   }
  // });

  // meal.image = `/images/${fileName}`;
  s3.putObject({
    Bucket: "torson-next-app-foodies-images",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
      )
    `,
  ).run(meal);
}
