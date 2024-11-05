import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageComponent } from "../utils/ImageComponent";

// Định nghĩa kiểu cho bài báo
interface Article {
  articleId: string;
  title: string;
  totalComment: number;
  totalLike: number;
}

export const ArticleListPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/articles");
        if (!response.ok) throw new Error("Lỗi khi tải danh sách bài báo");

        const responseJson = await response.json();
        const responseData = responseJson._embedded.articles;
        setArticles(responseData);
      } catch (error) {
        console.error();
      }
    };

    fetchArticles(); // Gọi hàm lấy danh sách bài báo
  }, []);

  const handleArticleClick = (articleId: string) => {
    navigate(`/article/${articleId}`); // Điều hướng đến trang chi tiết bài báo
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Danh Sách Bài Báo</h1>
      <div className="grid grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.articleId}
            className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => handleArticleClick(article.articleId)}
          >
            <div className="my-4 min-h-16">
              <h2 className="text-lg font-semibold text-center">
                {article.title}
              </h2>
            </div>
            <ImageComponent
              filename={article.articleId}
              className="w-full h-48 object-cover mt-4"
            />
            <div className="flex flex-row justify-between my-4 mx-3">
              <p>Bình luận: {article.totalComment}</p>
              <p>Thích: {article.totalLike}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
