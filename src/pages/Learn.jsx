import React from "react";
import { useGetArticlesQuery } from "../app/api/articleSlice";
import ArticleCard from "../component/ArticleCard";
import LoadingSpinner from "../component/LoadingSpinner";

const Learn = () => {
  const { data, isLoading, isError } = useGetArticlesQuery();
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div className="text-red-600 mt-6">Error loading articles, try again.</div>;
  return (
    <div>
      <div className="text-2xl text-center font-bold font tracking-widest">LEARN</div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3">
        {data.map((article) => (
          <ArticleCard key={article.id} arg={article} />
        ))}
      </div>
    </div>
  );
};

export default Learn;
