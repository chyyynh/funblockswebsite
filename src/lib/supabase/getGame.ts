import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getGameBySlug(slug: string) {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("slug", slug) // 用 ilike 忽略大小寫
    .single(); // 避免 0 筆資料時報錯

  // console.log("Game data:", data);

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export async function getAllGameSlugs() {
  const { data: slugs, error } = await supabase.from("games").select("slug");

  if (error) {
    console.error("Failed to fetch game slugs:", error);
    throw new Error("Unable to fetch game slugs");
  }

  return slugs.map((item) => ({ slug: item.slug })); // 回傳 [{ slug: "xxx" }]
}
