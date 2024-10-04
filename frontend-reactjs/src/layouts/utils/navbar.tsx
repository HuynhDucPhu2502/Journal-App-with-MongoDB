import ic_eye_open from "../../icons/ic-eye-open.png";
import ic_eye_close from "../../icons/ic-eye-close.png";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState, updateAuthState, logout } = useAuth();

  return (
    <nav className="bg-primary border-b-2 border-gray-300">
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0 text-white">
        <div className="flex flex-row justify-center items-center space-x-4 h-max pt-2 lg:pt-0">
          {/* logo */}
          <div className="bg-white h-max p-3 relative group">
            <img
              src={ic_eye_open}
              alt="Eye Open"
              className="group-hover:opacity-0 transition-opacity duration-300"
            />
            <img
              src={ic_eye_close}
              alt="Eye Close"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          {/* title, slogan */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Journal App</h1>
            <p className="text-lg italic font-normal">Tin nóng hổi TPHCM</p>
          </div>
        </div>
        {/* menu */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:flex-grow lg:space-x-4 lg:space-y-0 lg:pl-8 pb-2 lg:py-0">
          <div
            onClick={(e) => navigate("/home")}
            className="flex flex-row justify-center items-center  bg-secondary px-3 py-2 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            Tin tức
          </div>

          <div
            onClick={(e) => navigate("/author")}
            className="flex flex-row justify-center items-center  bg-secondary px-3 py-2 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            Tác giả
          </div>

          {authState ? (
            <div
              onClick={(e) => navigate("/account")}
              className="flex flex-row justify-center items-center  bg-secondary px-3 py-2 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              Tài khoản
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-row justify-center items-center lg:justify-end flex-grow lg:pr-8 ">
            {authState ? (
              <h3 className="text-white italic lg:block hidden mr-12">
                Xin chào {authState.username}
              </h3>
            ) : (
              ""
            )}
            {authState ? (
              <button
                onClick={(e) => logout()}
                className="w-full lg:w-fit bg-red-500 font-bold text-white px-3 py-2 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Đăng Xuất
              </button>
            ) : (
              <button
                onClick={(e) => navigate("/login")}
                className="w-full lg:w-fit bg-blue-800 font-bold text-white px-3 py-2 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Đăng Nhập
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
