import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Isha Dave, and I reside in Indore, Madhya Pradesh, where I was also brought up. I completed my 10th grade in 2017 with an impressive 86% and my 12th grade in 2019 with 80%, both from the state board. I pursued my graduation in commerce and earned a B.Com degree from MLB College, Devi Ahilya Vishwavidyalaya University. Following my undergraduate studies, I completed my post-graduation with an MCA from Shri Vaishnav Vidyapeeth Vishwavidyalaya University in 2024, achieving an 8 CGPA.
        </p>

        <br />

        <p className="text-xl">
        As a software developer, I possess a diverse skill set that includes HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Java, React.js, and MySQL. Additionally, I am familiar with using tools like Figma and VS Code. While I am a fresher, I have gained substantial practical knowledge through various academic projects, which have prepared me well for real-world applications. My technical skills and academic background equip me to contribute effectively to any development team.
        </p>
      </div>
    </div>
  );
};

export default About;