import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

const posts = [
  {
    id: 1,
    title: "Future of Drone Technology",
    excerpt: "How drones are reshaping industries with AI and automation.",
    summary:
      "Drones are evolving into intelligent systems powered by AI, changing how industries operate globally.",
    content:
      "Drones are evolving into intelligent systems powered by AI, changing how industries operate globally. They are now used in mapping, surveillance, logistics, and disaster response.",
    videoId: "U5aGqJ_stQQ?si=0SJE_UPDpRH36n3G"
  },
  {
    id: 2,
    title: "Getting Started with Drone Flying",
    excerpt: "Beginner guide to safe drone operations.",
    summary:
      "Learn the fundamentals of flight control, safety rules, and beginner training steps.",
    content:
      "Learning to fly drones requires understanding controls, safety rules, and practice. Beginners should start with simulators before real flight.",
    videoId: "7s5TYFPP6Uw?si=SvbOo46k_9i0ArfG"
  },
  {
    id: 3,
    title: "UAV Applications in Real Life",
    excerpt: "Security, agriculture, and industrial use cases.",
    summary:
      "Explore how drones are used in mapping, surveillance, farming, and emergency response.",
    content:
      "Drones are widely used across agriculture, security, mapping, and emergency response due to their efficiency and accuracy.",
    videoId: "br6EI37kU8Q?si=wZLpJdwhzWSDhKN1"
  }
];

const BlogPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="bg-[#030712] text-white min-h-screen">

      {/* HERO */}
      <div className="px-6 pt-36 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[40px] p-10 md:p-16"
        >
          <h1 className="text-5xl md:text-6xl font-black">
            Knowledge Hub
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Insights, tutorials, and innovation stories from the drone industry.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-8">

        {/* BIG ARTICLE */}
        <motion.div
          onClick={() => handlePostClick(posts[0])}
          className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-8 cursor-pointer hover:border-blue-500 transition"
        >
          <h2 className="text-3xl font-bold">{posts[0].title}</h2>

          <p className="text-gray-400 mt-4">{posts[0].excerpt}</p>

          <div className="mt-6 text-blue-400 cursor-pointer">
            Read more →
          </div>
        </motion.div>

        {/* SIDE LIST */}
        <div className="space-y-6">
          {posts.slice(1).map((post) => (
            <motion.div
              key={post.id}
              onClick={() => handlePostClick(post)}
              whileHover={{ x: 6 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 cursor-pointer hover:border-blue-500 transition"
            >
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={selectedPost?.title}
        content={selectedPost?.content}
        videoId={selectedPost?.videoId}
      />

    </div>
  );
};

export default BlogPage;