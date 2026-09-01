import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("test_data")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return (
      <main>
        <h1>Supabase Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Supabase korsi</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}