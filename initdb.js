const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "多汁起司漢堡",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary: "令人垂涎欲滴的多汁牛肉漢堡，搭配融化的起司與鬆軟漢堡麵包。",
    instructions: `
      1. 準備漢堡排：
         將 200 克牛絞肉與鹽、胡椒混合均勻，捏製成漢堡排。

      2. 煎漢堡排：
         平底鍋加入少量油並加熱，將漢堡排每面煎約 2～3 分鐘，直到表面呈金黃色。

      3. 組合漢堡：
         將漢堡麵包剖面稍微烘烤。底層依序放上生菜與番茄，再放上煎好的漢堡排，最後蓋上一片起司。

      4. 上桌：
         蓋上漢堡麵包上層，即可趁熱享用。
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },

  {
    title: "香辣咖哩",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary: "濃郁香辣的咖哩，融合異國香料與香濃椰奶，風味十足。",
    instructions: `
      1. 切好蔬菜：
         將喜歡的蔬菜切成適口大小。

      2. 炒蔬菜：
         平底鍋加入少量油，放入蔬菜拌炒，直到蔬菜開始變軟。

      3. 加入咖哩醬：
         加入 2 大匙咖哩醬，拌炒約 1 分鐘，使香氣充分釋放。

      4. 加入椰奶燉煮：
         倒入 500 毫升椰奶並煮至微滾，持續燉煮約 15 分鐘。

      5. 上桌：
         搭配白飯或麵包一起享用這道香濃滑順的咖哩。
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },

  {
    title: "手工水餃",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary: "以鮮香肉餡與蔬菜製成的手工水餃，蒸至外皮柔嫩、內餡鮮美。",
    instructions: `
      1. 準備餡料：
         將絞肉、切絲蔬菜與各種香料混合均勻。

      2. 包水餃：
         在每張水餃皮中央放入一匙餡料，將餃皮邊緣沾濕後對摺並捏緊封口。

      3. 蒸水餃：
         將水餃整齊放入蒸籠中，蒸約 10 分鐘。

      4. 上桌：
         趁熱享用，可搭配自己喜歡的沾醬。
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },

  {
    title: "經典起司通心粉",
    slug: "classic-mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary: "濃郁滑順的起司通心粉，是令人感到溫暖滿足的經典美食。",
    instructions: `
      1. 煮通心粉：
         依照包裝上的說明將通心粉煮熟，煮至口感適中的程度。

      2. 製作起司醬：
         在鍋中融化奶油，加入麵粉，再慢慢倒入牛奶並持續攪拌，煮至醬汁濃稠。加入刨碎的起司，攪拌至完全融化。

      3. 混合：
         將起司醬與瀝乾的通心粉充分混合。

      4. 烘烤：
         將混合好的通心粉倒入烤盤，表面撒上麵包粉，放入烤箱烘烤至表面呈金黃色。

      5. 上桌：
         趁熱享用，也可以依個人喜好撒上巴西里作為點綴。
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },

  {
    title: "道地披薩",
    slug: "authentic-pizza",
    image: "/images/pizza.jpg",
    summary: "手工甩製的披薩，搭配酸香番茄醬、新鮮配料與融化起司，呈現經典美味。",
    instructions: `
      1. 準備麵團：
         將披薩麵團充分揉捏，靜置發酵至原本的兩倍大。

      2. 整形並加入配料：
         將麵團擀開，均勻塗上番茄醬，再放上喜歡的配料與起司。

      3. 烘烤披薩：
         將烤箱預熱至 220°C，烘烤約 15～20 分鐘。

      4. 上桌：
         將披薩趁熱切片，撒上新鮮羅勒葉即可享用。
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },

  {
    title: "維也納炸肉排",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary: "外皮酥脆、色澤金黃的經典奧地利炸小牛肉排。",
    instructions: `
      1. 準備小牛肉：
         將小牛肉排拍打至厚度均勻。

      2. 裹粉：
         依序將每片肉排裹上麵粉、沾蛋液，最後均勻裹上麵包粉。

      3. 油炸：
         在平底鍋中加熱食用油，將肉排放入油炸，直到兩面都呈現金黃色。

      4. 上桌：
         趁熱享用，搭配檸檬片以及馬鈴薯沙拉或新鮮蔬菜。
    `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },

  {
    title: "新鮮番茄沙拉",
    slug: "fresh-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary: "清爽開胃的番茄沙拉，搭配成熟番茄、新鮮羅勒與酸香油醋醬。",
    instructions: `
      1. 準備番茄：
         將新鮮番茄切片，整齊排列在盤中。

      2. 加入香草與調味：
         在番茄上撒上切碎的羅勒、鹽與胡椒。

      3. 淋上醬汁：
         淋上橄欖油與巴薩米克醋。

      4. 上桌：
         這道簡單又美味的沙拉，可以作為配菜或清爽的輕食享用。
    `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`,
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

// 執行初始化
initData();
