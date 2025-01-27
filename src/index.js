import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./resources/css/styles.css";
import Header from "./common/Header";
import Readme from "./common/Readme";
import Q1 from "./questions/Question_01";
import Q2 from "./questions/Question_02";
import Q3 from "./questions/Question_03";
import Q4 from "./questions/Question_04";
// import Q5 from "./questions/Question_05";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <section className='content-wrap'>
        <Routes>
          <Route path="/" element={<Readme />} />
          <Route path="/q1" element={<Q1 />} />
          <Route path="/q2" element={<Q2 />} />
          <Route path="/q3" element={<Q3 />} />
          <Route path="/q4" element={<Q4 />} />
          
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </section>
    </BrowserRouter>
  </StrictMode>
);
