import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { ImageComponent } from "../utils/ImageComponent";

import ic_avatar from "../../icons/ic-avatar.png";

export const AccountPage = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Nam");
  const [hasAvatar, setHasAvatar] = useState(false);

  useEffect(() => {
    if (!authState) navigate("/login");
    else {
      const fetchUser = async () => {
        const url = `http://localhost:8080/api/users/${authState?.userId}`;
        const response = await fetch(url);

        if (!response.ok) throw Error();
        const responseData = await response.json();
        setFullName(responseData.fullName);
        setDob(responseData.dob);
        setEmail(responseData.email);
        setAddress(responseData.address);
        setGender(responseData.gender);
        setHasAvatar(responseData.hasAvatar);
      };

      fetchUser().catch();
    }
  }, [authState, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu ở đây
    console.log({
      fullName,
      dob,
      address,
      gender,
    });
  };

  return (
    <div className="flex flex-col space-y-12 my-12 w-2/3 mx-auto">
      <div className="w-full mx-auto p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">1. Ảnh đại diện</h2>
        {hasAvatar && authState ? (
          <ImageComponent
            filename={authState.userId}
            className="w-2/5 rounded-full rounded-full object-cover border-2 border-gray-300"
          />
        ) : (
          <img src={ic_avatar} className="w-2/3"></img>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-4 rounded shadow-lg"
      >
        <h2 className="text-lg font-bold mb-4">2. Thông Tin Cá Nhân</h2>

        <div className="mb-4">
          <label className="block mb-1">Họ và Tên</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Ngày Sinh</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Địa Chỉ</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Giới Tính</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Cập Nhật
        </button>
      </form>
    </div>
  );
};
