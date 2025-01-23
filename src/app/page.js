'use client'
import axios from "axios";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate posts for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    return (
      <section className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">Error</h1>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          Retry
        </button>
      </section>
    );
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#0FABCA]">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentPosts.map(({ id, title, body }) => (
          <div
            key={id}
            className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg transition hover:bg-gray-100"
          >
            <div className="p-4 flex-grow flex flex-col">
              <h5 className="mb-2 text-[#0FABCA] text-xl font-semibold">
                {title}
              </h5>
              <p className="text-slate-700 leading-normal font-light flex-grow">
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
      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </PaginationPrevious>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
              page === currentPage ? (
                <PaginationItem key={page} active>
                  <PaginationLink>{page}</PaginationLink>
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink onClick={() => handlePageChange(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
          </PaginationContent>
          <PaginationNext
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </PaginationNext>
        </Pagination>
      </div>
    </section>
  );
};

export default Home;
