import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>跨界好食，為美食愛好者而生</h1>
            <h1>品嚐世界各地的美味，分享屬於你的料理故事。</h1>
          </div>
          <div className={classes.cta}>
            <Link href="/community">加入社群</Link>
            <Link href="/meals">探索美食</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>\ 運作方式 /</h2>
          <h3 className={classes.subtitle}>— 讓分享料理變得簡單，每個人都能成為美食創作者。</h3>
          <p>
            「跨界好食」提供一個輕鬆分享食譜的平台，讓每位熱愛料理的人都能上傳自己的拿手菜，並探索來自世界各地的美味創意。
            <br />
            無論是家常料理、異國美食，還是甜點與輕食，都能在這裡找到靈感。
          </p>
          <p>瀏覽喜歡的食譜、依照步驟親手製作，再把你的料理分享給更多美食愛好者，一起享受烹飪帶來的樂趣。</p>
        </section>

        <section className={classes.section}>
          <h2>\ 為什麼選擇跨界好食？ /</h2>
          <h3 className={classes.subtitle}>— 探索美味、分享創意，打造屬於你的料理世界。</h3>
          <p>
            在「跨界好食」，不只是收藏食譜，更能與同樣熱愛料理的人交流分享。
            <br />
            從簡單的日常料理到精緻的特色佳餚，每一道食譜都承載著創作者的巧思與故事。
          </p>
          <ul className={classes.list}>
            <li>探索多元料理，發掘更多美食靈感。</li>
            <li>分享你的私房食譜，讓更多人品嚐你的創意。</li>
            <li>透過清楚的步驟與圖片，讓每道料理都能輕鬆上手。</li>
            <li>與美食愛好者一起交流，享受料理帶來的成就感。</li>
          </ul>
          <p>讓每一次下廚，都成為值得分享的美味體驗！</p>
        </section>
      </main>
    </>
  );
}
