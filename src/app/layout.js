// src/app/layout.js
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: "swap",
});

export const metadata = {
  title: "Anup Kumar | MERN Stack & Full Stack Developer Portfolio",
  description:
    "Hi, I'm Anup kumar — a passionate MERN Stack and Full Stack Developer specializing in building modern, scalable, and responsive web applications using MongoDB, Express, React, and Node.js. Explore my projects, skills, and experience in full-stack development.",
  keywords: [
    "Anup kumar",
    "MERN Stack Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express",
    "Software Developer Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website"
  ],
  authors: [{ name: "Anup kumar" }],
  creator: "Anup Kumar",
  publisher: "Anup Kumar",
  openGraph: {
    title: "Anup Kumar | MERN Stack & Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Anup Kumar — a full stack software developer skilled in React, Node.js, Express, and MongoDB. Building clean, scalable, and high-performing web apps.",
    url: "https://www.builtbypawan.info", // replace with your actual domain
    siteName: "Anup Portfolio",
    images: [
      {
        url: "/favicon/anupkumar.png",
        width: 1200,
        height: 630,
        alt: "Anup Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Kumar | MERN Stack & Full Stack Developer",
    description:
      "Full Stack Developer skilled in MERN stack (MongoDB, Express, React, Node.js). Check out my portfolio and projects.",
    
    images: ["/favicon/anupkumar.png"],
  },
  icons: {
    icon: "/favicon/anupkumar.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* roboto.className will inject font into body */}
      <body className={roboto.className}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}