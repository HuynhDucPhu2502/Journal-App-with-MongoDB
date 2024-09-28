import ic_username from "../../icons/ic-username.png";
import ic_password from "../../icons/ic-password.png";
import ic_password_visible from "../../icons/ic-password-visible.png";
import ic_password_hidden from "../../icons/ic-password-hidden.png";
import { useState } from "react";

export const LoginWidget = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-row justify-center items-center h-full">
      <div className="flex flex-col items-center border-2 border-gray-500 h-2/3 w-1/3 p-5 rounded-lg bg-gradient-to-br from-primary to-secondary">
        <h2 className="text-md text-white font-bold text-3xl">ĐĂNG NHẬP</h2>
        <div className="flex flex-col justify-center items-center space-y-4 mt-12 w-full">
          <div className="flex flex-row items-center rounded-3xl bg-white w-4/5">
            <img
              src={ic_username}
              alt=""
              className="bg-white p-2 rounded-3xl "
            />
            <input
              type="text"
              className="p-3 rounded-3xl text-md flex-grow focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-row items-center rounded-3xl bg-white w-4/5">
            <img
              src={ic_password}
              alt=""
              className="bg-white p-2 rounded-3xl"
              id="usernameField"
            />
            <input
              type={isPasswordVisible ? "text" : "password"}
              className="p-3 text-md flex-grow focus:outline-none"
              placeholder="Password"
              id="passwordField"
            />
            <img
              src={isPasswordVisible ? ic_password_hidden : ic_password_visible}
              alt=""
              className="bg-white p-5 rounded-3xl cursor-pointer hover:bg-gray-300"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <button className="bg-white rounded-lg py-2 px-5 mt-6 w-4/5 hover:-translate-y-0.5 hover:shadow-lg">
          Đăng Nhập
        </button>
      </div>
    </div>
  );
};
