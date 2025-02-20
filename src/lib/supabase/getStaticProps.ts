import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getStaticProps(slug: string) {
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("metadata->>link", slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return { props: { article: null, error: "Article not found" } };
  }

  return { props: { article } };
}

export async function getTuStaticProps(slug: string) {
  const { data: article, error } = await supabase
    .from("tutorials")
    .select("*")
    .eq("metadata->>link", slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return { props: { article: null, error: "Article not found" } };
  }

  return { props: { article } };
}

export async function getStaticParams() {
  const { data: link } = await supabase
    .from("articles")
    .select("metadata->link");

  const allslug = link ? link.map((item) => ({ slug: item.link })) : [];

  return allslug;
}

export async function getTuStaticParams() {
  const { data: link } = await supabase
    .from("tutorials")
    .select("metadata->link");

  const allslug = link ? link.map((item) => ({ slug: item.link })) : [];

  return allslug;
}

export async function gerRelated() {
  const { data: relatedData } = await supabase
    .from("articles")
    .select("relatedTags,relatedTags");
  return relatedData;
}

export async function getAllArticles(num?: number) {
  const { data: articles, error } = await supabase.from("articles").select("*");
  if (articles) {
    articles.sort((a, b) => {
      if (new Date(a.created_at) > new Date(b.created_at)) {
        return -1;
      }
      return 1;
    });
    if (num) {
      return articles.slice(0, num);
    }
  } else {
    console.log(error);
  }
  return articles || []; // 確保返回值是陣列
}

export async function getAllGames() {
  const { data: games, error } = await supabase.from("games").select("*");
  if (!games) {
    console.log(error);
  }
  return games || []; // 確保返回值是陣列
}

export async function getGameByID(id: number) {
  const { data: games, error } = await supabase
    .from("games")
    .select("*")
    .eq("id", id);
  if (!games) {
    console.log(error);
  }
  return games || []; // 確保返回值是陣列
}

export async function getAllTutorials(num?: number) {
  const { data: tutorials, error } = await supabase
    .from("articles")
    .select("*")
    .eq("type", "tutorial"); // Check if related_tag contains "tutorial"
  if (tutorials) {
    tutorials.sort((a, b) => {
      if (new Date(a.created_at) > new Date(b.created_at)) {
        return -1;
      }
      return 1;
    });
    if (num) {
      return tutorials.slice(0, num);
    }
  } else {
    console.log(error);
  }
  return tutorials || []; // 確保返回值是陣列
}
