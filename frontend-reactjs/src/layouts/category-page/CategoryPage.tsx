import { useEffect, useState } from "react";
import { Category } from "../../models/response-models/Category";

export const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = "http://localhost:8080/api/categories";
      const response = await fetch(url);

      if (!response.ok) throw new Error();

      const responseJson = await response.json();
      const responseData = responseJson._embedded.categories;

      const tempList = [];

      for (const data of responseData) {
        tempList.push(
          new Category(data.categoryId, data.name, data.description)
        );
      }

      setCategories(tempList);
    };

    fetchCategories().catch(console.error);
  }, []);

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Danh Sách Thể Loại
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.categoryId}
            className="p-4 border-4 border-blue-400 bg-blue-300 rounded shadow-md hover:shadow-lg transition-shadow  text-black"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-sm text-justify">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
