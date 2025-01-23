import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`}>
              <a className="text-blue-500 hover:underline">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
