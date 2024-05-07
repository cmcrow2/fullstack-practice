import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Layout from "./pages/Layout";
import ChapterOne from "./pages/ChapterOne";
import ChapterTwo from "./pages/ChapterTwo";
import ChapterThree from "./pages/ChapterThree";
import ChapterFour from "./pages/ChapterFour";
import ChapterFive from "./pages/ChapterFive";
import ChapterSix from "./pages/ChapterSix";
import ChapterSeven from "./pages/ChapterSeven";
import ChapterEight from "./pages/ChapterEight";
import ChapterNine from "./pages/ChapterNine";
import ChapterTen from "./pages/ChapterTen";
import ChapterEleven from "./pages/ChapterEleven";
import ChapterTwelve from "./pages/ChapterTwelve";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="chapterone" element={<ChapterOne />} />
          <Route path="chaptertwo" element={<ChapterTwo />} />
          <Route path="chapterthree" element={<ChapterThree />} />
          <Route path="chapterfour" element={<ChapterFour />} />
          <Route path="chapterfive" element={<ChapterFive />} />
          <Route path="chaptersix" element={<ChapterSix />} />
          <Route path="chapterseven" element={<ChapterSeven />} />
          <Route path="chaptereight" element={<ChapterEight />} />
          <Route path="chapternine" element={<ChapterNine />} />
          <Route path="chapterten" element={<ChapterTen />} />
          <Route path="chaptereleven" element={<ChapterEleven />} />
          <Route path="chaptertwelve" element={<ChapterTwelve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
