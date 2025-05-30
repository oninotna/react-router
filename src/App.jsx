import { BrowserRouter, Routes, Route } from "react-router-dom";

// Fixed Layout
import BaseLayout from "./layouts/BaseLayout.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
