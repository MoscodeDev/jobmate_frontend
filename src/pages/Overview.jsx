import React, { useEffect, useState } from "react";
import FeatureCard from "../component/FeatureCard";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [quote, setQuote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const random =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(random);
  }, []);

  return (
    <div className="p-6 space-y-8 min-h-screen">
      {/* Quote Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-green-400 text-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Daily Motivation</h2>
        {quote ? (
          <blockquote className="italic">
            “{quote.content}”
            <br />
            <span className="block mt-2 text-right font-medium">
              — {quote.author}
            </span>
          </blockquote>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      {/* Feature Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Explore Jobs"
          description="Browse the latest job listings tailored for you."
          onClick={()=> navigate("/jobs")}
        />
        <FeatureCard
          title="Your Profile"
          description="Manage your details and job preferences."
          onClick={()=> navigate("/profile")}
        />
        <FeatureCard
          title="Learn & Grow"
          description="Access curated resources to upgrade your skills."
          onClick={()=> navigate('/learn')}
        />
        <FeatureCard
          title="Bookmarked Jobs"
          description="Review jobs you've saved for later."
          onClick={()=> navigate('/bookmark')}
        />
      </section>
    </div>
  );
};

const motivationalQuotes = [
  {
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    content: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    content: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    content: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  { content: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  {
    content: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
];

export default Overview;
