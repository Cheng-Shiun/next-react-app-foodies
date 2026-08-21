import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

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
