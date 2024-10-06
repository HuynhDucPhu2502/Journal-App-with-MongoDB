import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { ImageComponent } from "../utils/ImageComponent";

import ic_avatar from "../../icons/ic-avatar.png";
import { InfoMessage } from "../utils/InfoMessage";

export const AccountPage = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  const [fetchStatus, setFetchStatus] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Nam");
  const [hasAvatar, setHasAvatar] = useState(false);

  const [infoMessage, setInfoMessage] = useState("");
  const [infoColor, setInfoColor] = useState("green");

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
  }, [authState, navigate, fetchStatus]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleCancelImageChanging = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadAvatar = () => {
    const updateAvatar = async () => {
      if (!selectedImage || !authState) {
        return;
      }

      const formData = new FormData();
      formData.append("userId", authState.userId);
      formData.append("avatar", selectedImage);

      const response = await fetch(
        "http://localhost:8080/api/users/uploadAvatar",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setFetchStatus(!fetchStatus);
      setInfoMessage("Ảnh đại diện đã được thay đổi thành công");
      setInfoColor("bg-green-500");

      handleCancelImageChanging();
      setTimeout(() => {
        setInfoMessage("");
      }, 3000);
    };

    updateAvatar().catch();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateUser = async () => {
      if (authState) {
        const url = `http://localhost:8080/api/users/updateUser`;
        const requestOption = {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Thêm header để chỉ định loại nội dung
          },
          body: JSON.stringify({
            userId: authState.userId,
            fullName,
            dob,
            address,
            gender,
          }),
        };

        const response = await fetch(url, requestOption);
        if (!response.ok) throw Error();
        setFetchStatus(!fetchStatus);
        setInfoMessage("Cập nhật thành công");
        setInfoColor("bg-green-500");

        setTimeout(() => {
          setInfoMessage("");
        }, 3000);
      }
    };

    updateUser().catch();
  };

  return (
    <div>
      <div className="flex flex-col space-y-12 my-12 w-2/3 mx-auto">
        <div className="w-full mx-auto p-4 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">1. Ảnh đại diện</h2>
          {imagePreview ? (
            <div className="flex justify-center items-center">
              <img
                src={imagePreview}
                alt="Avatar Preview"
                className="size-96 rounded-full object-cover border-2 border-gray-300"
              />
            </div>
          ) : hasAvatar && authState ? (
            <ImageComponent
              filename={authState.userId}
              className="size-96 rounded-full object-cover border-2 border-gray-300"
            />
          ) : (
            <img src={ic_avatar} className="w-2/3" alt="Default Avatar" />
          )}

          <div className="my-12 flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-col justify-center items-center space-y-4">
              <label htmlFor="file-upload" className="text-3xl text-blue-500 ">
                Tải ảnh mới
              </label>
              <input
                className="w-fit mx-auto"
                type="file"
                accept="image/*"
                id="file-upload"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </div>
            <div
              className={`flex flex-row justify-between items-center w-full space-x-4 ${
                selectedImage ? "block" : "hidden"
              }`}
            >
              <button
                onClick={handleCancelImageChanging}
                className="flex-grow text-center text-white bg-red-500 py-3 rounded-lg hover:bg-red-600"
              >
                Hủy thay đổi
              </button>
              <button
                onClick={handleUploadAvatar}
                className="flex-grow text-center text-white bg-green-500 py-3 rounded-lg hover:bg-green-600"
              >
                Thay đổi
              </button>
            </div>
          </div>
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
      {infoMessage && <InfoMessage message={infoMessage} color={infoColor} />}
    </div>
  );
};
