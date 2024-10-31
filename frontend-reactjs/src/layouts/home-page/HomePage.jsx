import HCM from "../../imgs/HCM-city.jpg";
import accurate_news from "../../imgs/accurate_news.jpg";
import friendly_ui from "../../imgs/friendly_ui.jpg";
import up2date_news from "../../imgs/up2date_news.jpg";

import React from "react";

export const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Banner */}
      <div
        className="w-full h-80 bg-cover bg-center rounded-lg mb-8 shadow-lg"
        style={{ backgroundImage: `url(${HCM})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold mb-4">Journal App</h1>
          <p className="text-white text-lg">
            Ghi lại khoảnh khắc và suy nghĩ của bạn, bất cứ lúc nào, bất cứ nơi
            đâu.
          </p>
        </div>
      </div>

      <section className="py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Tính Năng Nổi Bật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tính năng 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={up2date_news}
              alt="Quản lý nhật ký"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Cập Nhật 24/7</h3>
            <p className="text-gray-600">Tin tức luôn cập nhật nhanh chóng</p>
          </div>

          {/* Tính năng 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={accurate_news}
              alt="Nguồn tin tức chính xác"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Nguồn Tin Tức Chính Xác</h3>
            <p className="text-gray-600">Nguồn tin đáng tin cậy và chính chủ</p>
          </div>

          {/* Tính năng 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={friendly_ui}
              alt="Giao diện trực quan"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Giao Diện Trực Quan</h3>
            <p className="text-gray-600">
              Thiết kế đơn giản, dễ sử dụng cho mọi đối tượng.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
