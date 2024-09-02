import React, { useState } from "react";
import Navbar from "./components/Navbar";
import All from "./components/All";
import FullStackDevelopment from "./components/FullStackDevelopment";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  let data=[
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/04/feature.webp",
      content:"40 Java Interview Questions for Freshers with Clear & Concise Answers",
      date:"20 August 2024"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp",
      content:"10 Best HTML and CSS Project Ideas for Beginners",
      date:"20 August 2024"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1200x628.webp",
      content:"How Long Would It Take to Be a Full Stack Developer?",
      date:"20 August 2024"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code-1200x466.png",
      content:"10 Best React Project Ideas for Developers [with Source Code]",
      date:"20 August 2024"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      content:"7 Best Full-Stack Development Online Courses [2024]",
      date:"20 August 2024"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      content:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      date:"20 August 2024"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      date:"20 August 2024"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-945x495.png",
      content:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      date:"20 August 2024"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      content:"What Is Hacking? Types of Hacking & More",
      date:"20 August 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      content:"Top 5 IT Jobs for Economics Students",
      date:"20 August 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      content:"Automation Test Engineer Resume: 10 Important Things To Consider",
      date:"20 August 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      content:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
      date:"20 August 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      content:"9 Best Product-Based Companies for Project Management",
      date:"20 August 2024"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      date:"20 August 2024"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      content:"Best Data Science Books to Learn in 2024",
      date:"20 August 2024"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      content:"Best Data Science Books to Learn in 2024",
      date:"20 August 2024"
    },
    
  ]
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/all" element={<All data={data}/>}></Route>
          <Route
            path="/fullstackdevelopment"
            element={<FullStackDevelopment data={data}/>}
          ></Route>
          <Route path="/datascience" element={<DataScience data={data}/>}></Route>
          <Route path="/cybersecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
          <Route path="*" element={<Navigate to="/all" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;