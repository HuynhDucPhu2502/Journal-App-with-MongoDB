import "./App.css";
import { Navbar } from "./layouts/utils/Navbar";
import { Footer } from "./layouts/utils/Footer";
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
import { AccountPage } from "./layouts/account-page/AccountPage";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-grow relative">
            <Routes>
              <Route path="/login" element={<LoginWidget />} />
              <Route path="/home" element={<JournalPage />}></Route>
              <Route path="/author" element={<AuthorPage />}></Route>
              <Route path="/account" element={<AccountPage />}></Route>
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
