"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setMeal } from "./meals";

function inputIsInvalid(input) {
  return !input || input.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // validation

  if (
    inputIsInvalid(meal.title) ||
    inputIsInvalid(meal.summary) ||
    inputIsInvalid(meal.instructions) ||
    inputIsInvalid(meal.creator) ||
    inputIsInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("無效的輸入");
    return { message: "無效的輸入，欄位不可為空" };
  }
  await setMeal(meal);
  revalidatePath("/meals"); // reset cache

  redirect("/meals");
}
