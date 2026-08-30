# 🍔 垮界好食 - Full-Stack Next.js Meal Sharing Platform

跨界好食 是一個基於 **Next.js 15 App Router** 架構開發的全端美食分享平台。使用者可以瀏覽社群分享的美味料理、查看詳細食譜，並透過整合 **AWS S3** 雲端儲存與 **SQLite** 資料庫上傳與分享自訂的料理內容。

---

## 🌟 Key Features (核心功能)

* ** App Router 視覺化架構**：採用 Next.js 新世代 App Router，搭配伺服器端元件（Server Components）優化 SEO 與首頁載入效能。
* ** 雲端圖片託管 (AWS S3 Integration)**：使用 `@aws-sdk/client-s3` 將使用者動態上傳的料理照片儲存至 AWS S3（Singapore Region），實現靜態與動態資產分離。
* ** 圖片自動化優化**：結合 Next.js `<Image/>` 元件，設置跨域 `remotePatterns` 與雲端圖床進行雙重效能與響應式圖片壓縮。
* ** 本地與雲端資料庫**：透過 `better-sqlite3` 操作輕量化關聯式資料庫，支援 XSS 安全防禦 (`xss`) 與 URL Friendly Slug 自動生成 (`slugify`)。
* ** 客戶端 UX 優化**：自訂 `loading.js` 與 Suspense 狀態，並整合動態元件呈現平滑的頁面載入與表單送出狀態（`useFormStatus`）。

---

## 🛠️ Tech Stack (技術棧)

* **Framework**: Next.js 15 (React 18)
* **Styling**: CSS Modules
* **Database**: SQLite (`better-sqlite3`)
* **Cloud Storage**: AWS S3 Bucket (`@aws-sdk/client-s3`)
* **Authentication & Access**: AWS IAM (Identity and Access Management)
* **Utilities**: `xss`, `slugify`
* **Deployment**: Render (Web Service) 免費方案

---

## 🚀 Getting Started (本地開發指南)

### 1. Prerequisites (環境要求)
* Node.js 18.x 或以上版本
* AWS 帳號（需建立 AWS S3 Bucket 與 IAM Access Key）

### 2. Installation (安裝)

複製專案至本地並安裝依賴套件：

```bash
git clone [https://github.com/your-username/next-foodies.git](https://github.com/your-username/next-foodies.git)
cd next-foodies
npm install
