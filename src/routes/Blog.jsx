import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const BlogData = [
  {
    id: 3,
    title:
      "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
    category: "Health",
    author: "Darrell Etherington",
    authorPic: "author1.jpg",
    published_date: "October 4, 2023",
    reading_time: "8 minutes",
    content:
      "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
    tags: ["Biotech", "Health"],
  },
  {
    id: 4,
    title:
      "Rainforest raises $8.5M to help software companies embed financial services, payments",
    image:
      "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
    category: "Fintech",
    author: "Mary Ann Azevedo",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, “Every company will be a fintech company.” Specifically, Strange projected that — in the not-too-d...",
    tags: ["Fintech", "Writing"],
  },
  {
    id: 5,
    title:
      "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Christine Hall",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Pow.bio intends to bring down the costs associated with biomanufacturing by reimagining of fermentation facility operations.",
    tags: ["Startups", "Writing"],
  },
  {
    id: 6,
    title:
      "Recapitalization, $60M Series D support growth of e-commerce financier Clearco",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
    category: "Fintech",
    author: "Christine Hall",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Today is news marks a turnaround for a company that is had its share of ups and downs over the past year.",
    tags: ["Blogging", "Writing"],
  },
  {
    id: 7,
    title: "Rabbit is building an AI model that understands how software works",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1325174870.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "What if you could interact with any piece of software using natural language? Imagine typing in a prompt and having AI translate the instructions into machine-comprehendable commands, executing tas...",
    tags: ["AI", "Writing"],
  },
  {
    id: 8,
    title:
      "Okta plans to weave AI across its entire identity platform using multiple models",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1350618660.jpg?w=430&h=230&crop=1",
    category: "Security",
    author: "Ron Miller",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "One thing is clear this year: generative AI is having a tremendous impact on the software industry, and a week doesn’t pass without software companies announcing their plans to incorporate the seem...",
    tags: ["Security", "Writing"],
  },
  {
    id: 9,
    title:
      "Yubico can now ship pre-registered security keys to its enterprise users",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/yubikey.jpg?w=430&h=230&crop=1",
    category: "Enterprise",
    author: "Frederic Lardinois",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Physical security keys remain one of the best ways to secure user accounts, but the fact that new users have to register them before they can use them often adds quite a bit of friction. Yubico, th...",
    tags: ["Blogging", "Writing"],
  },
  {
    id: 10,
    title:
      "Resy and Eater co-founder raises $24M for Blackbird, a restaurant loyalty platform",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1238043769.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "8 minutes",
    content:
      "Blackbird Labs, a hospitality tech company whose platform helps restaurants stay in touch with guests and incentivize them to dine out more frequently, today announced that it raised $24 million in...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 11,
    title:
      "TC Startup Battlefield master class with Flourish Ventures: Defining early-stage product-market fit",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/battlefield-biotics-ai.jpg?w=430&h=230&crop=1",
    category: "Growth",
    author: "Neesha A. Tambe",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["Growth", "Writing"],
  },
  {
    id: 12,
    title:
      "Yahoo spins out Vespa, its search tech, into an independent company",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-1242149379.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Yahoo, otherwise known as the company that pays my salary (full disclosure: Yahoo owns TC), today announced that it’s spinning off Vespa, the big data serving engine, into an independent vent...",
    tags: ["AI", "Writing"],
  },
  {
    id: 13,
    title:
      "Okta acquires a16z-backed password manager Uno to develop a personal tier",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/03/Uno.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Ivan Mehta",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Okta, the U.S.-based identity mangement giant, announced today that it has acquired a password mangement app, Uno. The company said that Uno’s team will help speed up the public launch of the...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 14,
    title:
      "CoPilot, a training app that matches users with remote fitness coaches, raises $6.5M",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/copilot-screenshots.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Aisha Malik",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "CoPilot, a digital training app that matches users with one-on-one remote fitness coaches, has raised $6.5M in Series A-1 funding led by Jackson Square Ventures. The app, which has seen more than 1...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 15,
    title: "Opsera, a DevOps platform geared toward enterprises, raises $12M",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1439425791-1.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Opsera, a DevOps platform geared toward enterprise clients, today announced that it raised $12 million in a funding round — a tranche smaller than Opsera’s previous — led by Taiwa...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 16,
    title:
      "EU lawmakers take aim at ‘arbitrary’ decisions by Big Tech in Media Freedom Act vote",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1459166551.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Natasha Lomas",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Mainstream social media platforms could face limits on their ability to take down independent journalism that violates their terms and conditions under a proposal agreed by European Union lawmakers...",
    tags: ["Apps", "Writing"],
  },

  {
    id: 36,
    title: "FBI most-wanted Russian hacker reveals why he burned his passport",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/mikhail-matveev-ransomware-most-wanted.png?w=430&h=230&crop=1",
    category: "Security",
    author: "Tim De Chant",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 37,
    title: "Motel One says ransomware gang stole customer credit card data",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/MO-Hotel-Hamburg-am-Michel-Outdoor-3.jpg?w=430&h=230&crop=1",
    category: "Tech",
    author: "Carly Page",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
    tags: ["Startups", "Writing"],
  },
];

const Blog = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="px-4 py-32 bg-black opacity-75 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
            Welcome to Our Blog
          </h1>
          <p className="text-gray-100 lg:w-3/5 mx-auto font-primary">
            We offer everything you need to get started from helpful tips and
            tutorials
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {BlogData.map((blog, index) => (
          <Link key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog.image} className="w-full" alt="" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor pointer">
              {blog.title}
            </h3>
            <p className="mb-2 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Published:{blog.published_date}
            </p>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
