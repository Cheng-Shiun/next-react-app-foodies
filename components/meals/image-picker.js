"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imgPickerInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickImg() {
    imgPickerInput.current.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]; // 取第一個圖片

    if (!file) {
      setPickedImage(null);
      return;
    }

    // 創建實例
    const fileReader = new FileReader();

    // 讀取監聽
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    // 讀取檔案並將其轉碼
    fileReader.readAsDataURL(file);
  }

  function handleCancelPickImg() {
    if (!pickedImage) {
      alert("您未上傳料理圖片");
    }
    setPickedImage(null);
    if (imgPickerInput.current) {
      imgPickerInput.current.value = ""; // 順便清空 input 的 value
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview} onClick={handlePickImg}>
          {!pickedImage && <p>尚未上傳圖片</p>}
          {pickedImage && <Image src={pickedImage} fill alt="使用者上傳的料理圖片" />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imgPickerInput}
          onChange={handleChangeImage}
        />
        <button type="button" className={classes.button} onClick={handlePickImg}>
          上傳料理圖片
        </button>
        <button type="button" className={`${classes.button} ${classes["cancel-button"]}`} onClick={handleCancelPickImg}>
          取消上傳
        </button>
      </div>
    </div>
  );
}
