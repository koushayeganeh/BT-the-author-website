import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeHifiDesktop from "./pages/HomeHifiDesktop";
import AuthorHifiDesktop from "./pages/AuthorHifiDesktop";
import ContactHifiDesktop from "./pages/ContactHifiDesktop";
import SingleBlogPage from "./pages/SingleBlogPage";
import BlogsHifiDesktop from "./pages/BlogsHifiDesktop";
import SingleBookPage from "./pages/SingleBookPage";
import LibraryHifiDesktop from "./pages/LibraryHifiDesktop";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Barış Tayfün";
        metaDescription = "";
        break;
      case "/author":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/library":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeHifiDesktop />} />
      <Route path="/author" element={<AuthorHifiDesktop />} />
      <Route path="/contact" element={<ContactHifiDesktop />} />
      <Route path="/blogs/:blogID" element={<SingleBlogPage />} />
      <Route path="/blogs" element={<BlogsHifiDesktop />} />
      <Route path="/library/:bookID" element={<SingleBookPage />} />
      <Route path="/library" element={<LibraryHifiDesktop />} />
    </Routes>
  );
}
export default App;
