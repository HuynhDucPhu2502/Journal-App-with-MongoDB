import "./App.css";
import { Navbar } from "./layouts/navbar";
import { Footer } from "./layouts/footer";

export const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex-grow"></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
