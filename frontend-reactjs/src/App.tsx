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
import { HomePage } from "./layouts/home-page/HomePage";
import { CreateArticlePage } from "./layouts/article-page/CreateArticlePage";
import { CategoryPage } from "./layouts/category-page/CategoryPage";
import { ArticleListPage } from "./layouts/article-page/ArticleListPage";
import { ArticleDetailPage } from "./layouts/article-page/ArticleDetailPage";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-grow relative">
            <Routes>
              <Route path="/login" element={<LoginWidget />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/author" element={<AuthorPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route
                path="/create-article-page"
                element={<CreateArticlePage />}
              />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/articles" element={<ArticleListPage />} />
              <Route path="/article/:id" element={<ArticleDetailPage />} />
              <Route path="*" element={<Navigate to="/articles" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
