import sql from "better-sqlite3";

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
