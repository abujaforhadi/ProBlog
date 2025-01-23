import axios from "axios";

const Home = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data;

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
                <div className="card-actions justify-center mt-4">
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
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">Error</h1>
        <p className="text-gray-600">Unable to fetch blog posts. Please try again later.</p>
      </div>
    );
  }
};

export default Home;
