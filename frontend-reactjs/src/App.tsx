import "./App.css";
import { Navbar } from "./layouts/utils/navbar";
import { Footer } from "./layouts/utils/footer";
import { LoginWidget } from "./layouts/auth-page/LoginWidget";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { JournalPage } from "./layouts/journal-page/JournalPage";
import { AuthProvider } from "./context/AuthContext";
import { AuthorPage } from "./layouts/author-page/AuthorPage";

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
              <Route path="/author" element={<AuthorPage />}></Route>
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
