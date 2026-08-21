import Image from "next/image";
import Link from "next/link";

import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import mealIcon from "@/assets/icons/meal.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          因為<span className={classes.highlight}>熱愛美食</span> 我們相聚於此！
        </h1>
        <p>加入跨界好食社群，分享你的私房食譜、探索世界各地的美味料理，與熱愛烹飪的人一起交流靈感。</p>
      </header>
      <main className={classes.main}>
        <h2>社群特色</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <h3>分享與探索食譜</h3>
            <p>發布你的拿手料理，收藏喜歡的食譜，探索來自世界各地創作者分享的美味靈感。</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <h3>認識志同道合的美食夥伴</h3>
            <p>與同樣熱愛料理的人交流心得、分享烹飪技巧，建立屬於你的美食社群。</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="A crowd of people at a cooking event" />
            <h3>參與專屬活動</h3>
            <p>參與料理挑戰、主題徵集與社群精選活動，讓你的作品有機會被更多人看見。</p>
          </li>
        </ul>

        <section className={classes.cta}>
          <h2>今天就開始分享你的第一道料理</h2>
          <p>每一道料理都有屬於自己的故事，現在就加入跨界好食，與更多美食愛好者一起分享靈感、交流創意，讓你的美味被世界看見。</p>
          <div>
            <Link href="">加入我們的官方社群</Link>
          </div>
        </section>
      </main>
    </>
  );
}
