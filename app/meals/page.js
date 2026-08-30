import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

export const metadata = {
  title: "由世界各地的美食愛好者分享的料理食譜｜跨界好食",
  description: "瀏覽社群分享的美味餐點，每個料理皆有料理步驟可供查看，可以挑選你喜愛的學習如何料理！",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h3>
          美味料理，<span className={classes.highlight}>由你/妳</span>創造
          <p>選擇喜愛的食譜，親手料理出專屬美味。簡單又有趣！</p>
          <p className={classes.cta}>
            <Link href="/meals/share">分享你的私房食譜</Link>
          </p>
        </h3>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>菜單資料加載中...</p>}>
          <Meals />
        </Suspense>
      </main>
      ;
    </>
  );
}
