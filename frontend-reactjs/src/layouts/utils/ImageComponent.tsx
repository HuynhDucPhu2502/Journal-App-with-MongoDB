import { useEffect, useState } from "react";
import axios from "axios";

// Định nghĩa kiểu cho props
interface ImageComponentProps {
  filename: string;
  className?: string; // Thêm className (có thể có hoặc không)
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  filename,
  className,
}) => {
  // Khai báo kiểu cho imageUrl là string hoặc null
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Gọi API lấy file từ server Spring Boot
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/files/${filename}`,
          {
            responseType: "blob",
          }
        );
        // Tạo URL từ blob và gán vào state
        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, [filename]);

  return (
    <div className="flex justify-center items-center">
      {imageUrl ? (
        <img src={imageUrl} alt={filename} className={className} /> // Thêm className vào img
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
