import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("metadata->>link", slug)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export async function getAllArticleSlugs() {
  const { data: link } = await supabase
    .from("articles")
    .select("metadata->link");

  const allslug = link ? link.map((item) => ({ slug: item.link })) : [];

  return allslug;
}
