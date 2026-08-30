"use client";

import MealFormSubmission from "@/components/meals/form-submission";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/actions";
import { useActionState } from "react";
import classes from "./page.module.css";

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          分享你/妳 <span className={classes.highlight}>最愛的料理</span>
        </h1>
        <p>或者拿手的個人料理！</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">電子信箱</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">料理名稱</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">簡短介紹</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">料理方式</label>
            <textarea id="instructions" name="instructions" rows="10" required></textarea>
          </p>
          <ImagePicker label="料理圖" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            {/* <button type="submit">分享</button> */}
            <MealFormSubmission />
          </p>
        </form>
      </main>
    </>
  );
}
