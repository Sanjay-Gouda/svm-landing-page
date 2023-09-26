import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./assets/css/tailwind.css";
import "./assets/css/icons.css";

import PropertyDetail from "./pages/property-detail";
import IndexTwo from "./pages/index-two";

import Aboutus from "./pages/aboutus";
import Features from "./pages/features";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ResetPassword from "./pages/auth/reset-password";
import Comingsoon from "./pages/comingsoon";
import Maintenance from "./pages/maintenance";
import Page404 from "./pages/404";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import Grid from "./pages/grid";

import Blogs from "./pages/blogs";

import ScrollToTop from "./component/Scroll-top";
import Feature from "./component/Feature";
import ProfileDetail from "./pages/profile-detail";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexTwo />} />
        <Route path="/our-services" element={<Features />} />

        {/*For  Projects detail page and listing page */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/grid/:name" element={<Grid />} />
        <Route path="/property-detail/:id" element={<PropertyDetail />} />
        {/*For  Projects detail page and listing page */}

        <Route path="/contact" element={<Contact />} />

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/knowmore-aboutus" element={<Privacy />} />

        <Route path="/404" element={<Page404 />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<Signup />} />
        <Route path="/auth-reset-password" element={<ResetPassword />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/profile-detail/:id" element={<ProfileDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
