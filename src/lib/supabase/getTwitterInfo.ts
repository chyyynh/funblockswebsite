import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getTwitterInfoByID(id: number) {
  const { data, error } = await supabase
    .from("games_twitter_info")
    .select("*")
    .eq("id", id)
    .single();

  // console.log("Game data:", data);

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export async function getTwitterFollowerByID(id: number) {
  const { data, error } = await supabase
    .from("games_twitter_info")
    .select("*")
    .eq("id", id)
    .single();

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
