"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmission() {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{pending ? "提交中..." : "分享"}</button>;
}
