import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getGameByName(game: string) {
  const decodedGame = decodeURIComponent(game); // 確保 `%20` 轉換為空格
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .ilike("title", decodedGame) // 用 ilike 忽略大小寫
    .single(); // 避免 0 筆資料時報錯

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}
