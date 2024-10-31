import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoMessage } from "../utils/InfoMessage";
import { Category } from "../../models/response-models/Category";
import { useAuth } from "../../context/AuthContext";
import { Role } from "../../models/enums/Role";

export const CreateArticlePage: React.FC = () => {
  const navigate = useNavigate();

  const { authState } = useAuth();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [infoColor, setInfoColor] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (authState?.role !== Role.AUTHOR) {
      navigate("/home");
    }
  }, [authState, navigate]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/categories"
        );
        setCategories(response.data._embedded.categories);
      } catch (error) {
        console.error("Lỗi khi tải thể loại:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleCancelImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("categoryId", categoryId);
      formData.append("authorId", authState?.authorId ?? "");
      if (selectedImage) formData.append("file", selectedImage);

      const response = await fetch(
        "http://localhost:8080/api/articles/create",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setInfoMessage("Bài viết đã được tạo thành công!");
        setInfoColor("bg-green-500");
        setTimeout(() => {
          navigate("/articles");
        }, 3000);
      } else {
        console.error("Lỗi khi tạo bài viết:", await response.text());
        setInfoMessage("Đã xảy ra lỗi khi tạo bài viết.");
        setInfoColor("bg-red-500");
      }
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setInfoMessage("Đã xảy ra lỗi khi tạo bài viết.");
      setInfoColor("bg-red-500");
    }
  };

  return (
    <div className="flex flex-col space-y-12 my-12 w-2/3 mx-auto">
      <div className="p-6 border-2 border-blue-300 rounded-lg shadow-2xl bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Tạo Bài Viết</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg mb-2">Tiêu Đề</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg mb-2">Nội Dung</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-48 p-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg mb-2">Thể Loại</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="" disabled>
                Chọn thể loại
              </option>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-lg mb-2">Tải Ảnh Lên</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            {imagePreview && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={imagePreview}
                  alt="Ảnh xem trước"
                  className="max-w-xs rounded"
                />
                <button
                  type="button"
                  onClick={handleCancelImage}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Hủy Ảnh
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          >
            Đăng Bài
          </button>
        </form>
      </div>

      {infoMessage && <InfoMessage message={infoMessage} color={infoColor} />}
    </div>
  );
};
