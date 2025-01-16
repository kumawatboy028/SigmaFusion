import React from "react";

const BlogSection = () => {
    return(
        <>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Updates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of Web Development in 2025",
                  excerpt:
                    "Exploring upcoming trends in web development and how they'll shape the industry.",
                  category: "Industry News",
                  date: "Jan 5, 2025",
                },
                {
                  title: "Building Scalable React Applications",
                  excerpt:
                    "Best practices and patterns for creating maintainable React applications.",
                  category: "Tutorials",
                  date: "Jan 3, 2025",
                },
                {
                  title: "Why TypeScript Is Essential for Large Projects",
                  excerpt:
                    "How TypeScript improves code quality and team productivity in large codebases.",
                  category: "Tech Tips",
                  date: "Dec 28, 2024",
                },
              ].map((post, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        </>
    )
}

export default BlogSection