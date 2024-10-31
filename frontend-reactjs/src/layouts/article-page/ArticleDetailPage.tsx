import React, { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

interface Article {
  articleId: string;
  title: string;
  content: string;
}

interface Comment {
  content: string;
  commentDate: string;
  userName: string;
}

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Lỗi khi tải bài báo:", error);
      }
    };

    fetchArticle();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/comments/byArticle/${id}`
        );
        setComments(response.data);
        response.data.forEach((comment: Comment) => {
          console.log("Comment:", comment);
        });
      } catch (error) {
        console.error("Lỗi khi tải comment:", error);
      }
    };

    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    const data = {
      content: newComment,
      articleId: article?.articleId,
      userId: authState?.userId,
    };

    try {
      await axios.post("http://localhost:8080/api/comments/create", data, {
        headers: { "Content-Type": "application/json" },
      });

      setNewComment("");
      const response = await axios.get(
        `http://localhost:8080/api/comments/byArticle/${article?.articleId}`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  if (!article) return <p>Đang tải bài báo...</p>;

  return (
    <div>
      <div className="flex flex-col items-center w-3/4 mx-auto border-2 border-black my-12 rounded-lg shadow-2xl p-10">
        <img
          src={`http://localhost:8080/files/${article.articleId}`}
          alt={article.title}
          className="w-1/3 object-cover mb-6"
        />
        <h1 className="text-5xl font-bold mb-8 text-center">{article.title}</h1>
        <p className="text-lg">{article.content}</p>
      </div>
      <div className="flex flex-col mx-12 my-6">
        <div className="w-full mt-12">
          <h2 className="text-3xl font-semibold mb-4">Bình luận</h2>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-2 text-lg"
              >
                <p className="font-semibold">{comment.userName}</p>
                <p>{comment.content}</p>
                <span className="text-sm text-gray-500">
                  {new Date(comment.commentDate).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">
              Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
            </p>
          )}
        </div>
        {authState ? (
          <form onSubmit={handleCommentSubmit} className="w-full mt-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Viết bình luận của bạn..."
              required
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Gửi Bình Luận
            </button>
          </form>
        ) : (
          <p className="mt-6 text-red-500">
            Bạn cần{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              đăng nhập
            </span>{" "}
            để bình luận.
          </p>
        )}
      </div>
    </div>
  );
};
