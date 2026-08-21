import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "跨界好食｜為美食愛好者打造的平台",
  description: "美味的食物就是需要透過社群的力量傳遞給更多人，分享食譜、客製化絕佳美食。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
