import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = getAllNews();
  const Database = require("better-sqlite3");
  const db = new Database("your-database.db");

  const row = db
    .prepare(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='news'"
    )
    .get();

  if (row) {
    console.log("Table exists:", row.name);
  } else {
    console.log("Table does NOT exist.");
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </>
  );
}
