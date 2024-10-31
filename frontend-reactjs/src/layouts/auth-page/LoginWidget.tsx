import ic_username from "../../icons/ic-username.png";
import ic_password from "../../icons/ic-password.png";
import ic_password_visible from "../../icons/ic-password-visible.png";
import ic_password_hidden from "../../icons/ic-password-hidden.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const LoginWidget = () => {
  const { authState, updateAuthState } = useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    if (!username) {
      setErrorMessage("Tài khoản không được để trống");
      return;
    }

    if (!password) {
      setErrorMessage("Mật khẩu không được để trống");
      return;
    }

    try {
      const loginUrl = `http://localhost:8080/api/accounts/login`;
      const loginResponse = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!loginResponse.ok) {
        setErrorMessage("Tài khoản hoặc mật khẩu không hợp lệ");
        return;
      }

      const accountInfoUrl = `http://localhost:8080/api/accounts/getAccountInfo?userName=${username}`;
      const accountResponse = await fetch(accountInfoUrl);

      if (accountResponse.ok) {
        const accountData = await accountResponse.json();

        // Nếu role là AUTHOR, lấy authorId, nếu không gán null
        let authorId = null;
        if (accountData.role === "AUTHOR") {
          const authorUrl = `http://localhost:8080/api/authors/search/findByUserId?userId=${accountData.userId}`;
          const authorResponse = await fetch(authorUrl);

          if (authorResponse.ok) {
            const authorData = await authorResponse.json();
            authorId = authorData.authorId;
          } else {
            console.warn(
              "Không tìm thấy tác giả với userId:",
              accountData.userId
            );
          }
        }

        console.log("Author ID:", authorId);

        updateAuthState({
          username: accountData.userName,
          accountId: accountData.accountId,
          userId: accountData.userId,
          role: accountData.role,
          authorId: authorId, // Gán authorId nếu tồn tại, nếu không thì là null
        });

        navigate("/home");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      setErrorMessage("Không tải được dữ liệu máy chủ");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (authState) {
      navigate("/home");
    }
  }, [authState, navigate]);

  return (
    <div className="flex flex-row justify-center items-center h-full">
      <div className="flex flex-col items-center border-2 border-gray-500 lg:h-2/3 h-5/6 lg:w-1/3 w-5/6 p-5 rounded-lg bg-gradient-to-br from-primary to-secondary">
        <h2 className="text-md text-white font-bold text-3xl">ĐĂNG NHẬP</h2>
        <p
          className={`min-h-[1.5em] text-red-500 italic mt-3 ${
            errorMessage ? "bg-white" : ""
          } rounded-lg px-3`}
        >
          {errorMessage}
        </p>

        <div className="flex flex-col justify-center items-center space-y-4 mt-6 w-full">
          <div className="flex flex-row items-center rounded-3xl bg-white w-4/5">
            <img
              src={ic_username}
              alt=""
              className="bg-white p-2 rounded-3xl"
            />
            <input
              type="text"
              className="p-3 rounded-3xl text-md flex-grow focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-row items-center rounded-3xl bg-white w-4/5">
            <img
              src={ic_password}
              alt=""
              className="bg-white p-2 rounded-3xl"
            />
            <input
              type={isPasswordVisible ? "text" : "password"}
              className="p-3 text-md flex-grow focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={isPasswordVisible ? ic_password_hidden : ic_password_visible}
              alt=""
              className="bg-white p-2 rounded-3xl cursor-pointer hover:bg-gray-300"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <div className="flex flex-row justify-evenly items-center w-full mt-6">
          <button className="bg-yellow-300 rounded-lg py-2 px-8 hover:bg-primary hover:text-white transition-all delay-50 hover:shadow-lg">
            Đăng Ký
          </button>
          <button
            onClick={handleLogin}
            className={`${
              username && password
                ? "bg-green-500 hover:bg-green-600 hover:shadow-lg transition-all delay-50"
                : "bg-gray-400 cursor-not-allowed"
            } rounded-lg py-2 px-8 text-white`}
          >
            Đăng Nhập
          </button>
        </div>
      </div>
    </div>
  );
};
