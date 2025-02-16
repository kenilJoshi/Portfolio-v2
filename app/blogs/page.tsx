"use client";
import { Blogs as BlogsData, BlogsType } from "../data/blog";
import FloatingNavbar from "../components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { TbLogs } from "react-icons/tb";

export default function Blogs() {
  const router = useRouter();

  const handleBlogClick = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="flex flex-col items-center gap-3 p-10 pb-20">
      <div className="w-full max-w-[35rem] text-left">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Blogs</h1>
      </div>
      <div className="w-full max-w-[35rem] space-y-6">
        {BlogsData.length > 0 ? (
          BlogsData.map((blog: BlogsType) => (
            <div
              key={blog.id}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="flex items-center gap-2 cursor-pointer hover:underline"
                onClick={() => handleBlogClick(blog.id)}
              >
                <FaArrowRightLong />
                <h2 className="text-2xl font-semibold text-gray-100">
                  {blog.title}
                </h2>
              </div>
              <p className="text-gray-400 text-sm">
                Published on: {new Date(blog.publishedAt!).toLocaleDateString()}
              </p>
              <p className="text-gray-400 mb-4">{blog.content}</p>
              <div className="text-gray-500 text-sm">By {blog.author}</div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-2">
            <TbLogs className="text-6xl text-gray-400" />
            <p className="text-gray-400 text-lg">No Blogs Yet</p>
          </div>
        )}
      </div>
      <FloatingNavbar />
    </div>
  );
}
