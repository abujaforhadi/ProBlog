import axios from "axios";

const Home = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-center">
                <a href={`/blog/${post.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
