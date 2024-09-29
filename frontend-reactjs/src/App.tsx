import "./App.css";
import { Navbar } from "./layouts/utils/navbar";
import { Footer } from "./layouts/utils/footer";
import { LoginWidget } from "./layouts/authPage/LoginWidget";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { JournalPage } from "./layouts/journalPage/JournalPage";
import { AuthProvider } from "./context/AuthContext";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/login" element={<LoginWidget />} />
              <Route path="/home" element={<JournalPage />}></Route>
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
