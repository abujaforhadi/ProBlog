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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ id, title, body }) => (
            <article
              key={id}
              className="w-full sm:w-[90%] lg:w-[70%] bg-[#f2f8f9] p-6 rounded-md relative group overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#00838d] rounded-bl-[35px] group-hover:scale-150 transform transition-transform duration-300"></div>

              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 ">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 ">
                {body.slice(0, 100)}...
              </p>
              <a
                href={`/blog/${id}`}
                className="relative inline-flex items-center px-6 py-2.5 border-2 border-primary rounded-full group overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-primary text-white flex items-center justify-center w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  <ArrowBigRight size={24} />
                </span>
                <span className="relative text-primary transition-colors duration-300">
                  View Details
                </span>
              </a>
            </article>
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
