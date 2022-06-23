// import UserAccess from "./MyApp/loginAccess/accessCheck";

import Main from "./MyApp/Pages/Home/index";
import HtmlPage from "./MyApp/Pages/Tutorial/Html/HtmlPage";
import CSSPage from "./MyApp/Pages/Tutorial/CSS/CSSPage";
import JavaScriptPage from "./MyApp/Pages/Tutorial/JavaScript/JavaScript";
import ReactPage from "./MyApp/Pages/Tutorial/React/ReactPage";
import MyDic from "./MyApp/Pages/Record/My Dico/MyDic";
import Mynote from "./MyApp/Pages/Record/My Note/Mynote";
import Games from "./MyApp/Pages/Games/Games";
import Blog from "./MyApp/Pages/Blog/Blog";
import About from "./MyApp/Pages/About/About";
import Contact from "./MyApp/Pages/Contact/Contact";
import ErrorPage from "./MyApp/Pages/Error page/ErrorPage";
import HeaderComponent from "./MyApp/Pages/Home/header/header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tutorial/html" element={<HtmlPage />} />
        <Route path="/tutorial/CSS" element={<CSSPage />} />
        <Route path="/tutorial/JavaScript" element={<JavaScriptPage />} />
        <Route path="/tutorial/react" element={<ReactPage />} />
        {/* Record Nav  */}
        <Route path="/dictionary" element={<MyDic />} />
        <Route path="/My-notes" element={<Mynote />} />
        {/* rest of the route */}
        <Route path="/game" element={<Games />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
