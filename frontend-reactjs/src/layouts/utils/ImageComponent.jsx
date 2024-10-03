import { useEffect, useState } from "react";
import axios from "axios";

export const ImageComponent = ({ filename }) => {
  const [imageUrl, setImageUrl] = useState(null);

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
        const url = URL.createObjectURL(new Blob([response.data]));
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, [filename]);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt={filename} /> : <p>Loading...</p>}
    </div>
  );
};
