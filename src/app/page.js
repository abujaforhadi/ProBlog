import axios from "axios";
import { ArrowBigRight } from "lucide-react";

const Home = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map(({ id, title, body }) => (
            <div
              key={id}
              className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg transition hover:bg-gray-100"
            >
              <div className="p-4 flex-grow flex flex-col">
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                  {title}
                </h5>
                <p className="text-slate-600 leading-normal font-light flex-grow">
                  {body}
                </p>
                <a href={`/blog/${id}`} className="mt-auto">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:bg-slate-700 focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Read more
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return (
      <section className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">Error</h1>
        <p className="text-gray-600">
          Unable to fetch blog posts. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          Retry
        </button>
      </section>
    );
  }
};

export default Home;
