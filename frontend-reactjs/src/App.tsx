import "./App.css";
import { Navbar } from "./layouts/utils/navbar";
import { Footer } from "./layouts/utils/footer";
import { LoginWidget } from "./layouts/login/login";

export const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex-grow">
        <LoginWidget></LoginWidget>
      </div>
      <Footer></Footer>
    </div>
  );
};
