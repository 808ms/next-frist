import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Content from "../components/content";
import { ListItem } from "../components/list-item";
import Script from "next/script";

import {
  SiMysql,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiReact,
  SiStyledcomponents as SiStyledComponents,
  SiTailwindcss,
  SiTypescript,
  SiGithub,
  SiCsharp,
  SiDiscord,
  SiPython,
  // linked in
  SiLinkedin,
} from "react-icons/si";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MdContactPage } from "react-icons/md";
import React from "react";
import { Tooltip, Typography } from "@mui/material";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Home | 808ms</title>
        <link rel="icon" href="/public/icon.png" />
      </Head>
      <Content>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-black bg-opacity-80 p-10 rounded-xl">
            <div className="w-full inline-flex gap-5">
              <Tooltip title="Github">
                <a
                  href="https://github.com/808ms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub style={{ color: "white" }} className="h-6 w-6" />
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/casey-choi-7b47b1248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin style={{ color: "white" }} className="h-6 w-6" />
                </a>
              </Tooltip>
              <Tooltip title="Contact">
                <Link href="/contact">
                  <a>
                    <MdContactPage
                      style={{
                        color: "white",
                        position: "relative",
                        top: "-2",
                      }}
                      className="h-7 w-7"
                    />
                  </a>
                </Link>
              </Tooltip>
            </div>
            <br />
            <p>Hello, I&apos;m</p>
            <Typography variant="h1" className="text-4xl tracking-wide">
              Casey Choi
            </Typography>
            <p className="pt-3">
              Hello, I am a current high school senior in Honolulu, Hawaii.
              I&apos;m currently self-learning coding starting with CSS, JS,
              typescript, Tailwind, and Python. This is my first website made
              with react.js I&apos;m learning this to gain experience in web
              development.
            </p>

            <br />

            <h1 className="text-3xl">Learning</h1>
            <br />

            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ListItem icon={SiReact} text="React.js" />
              <ListItem icon={SiPython} text="Python" />
              <ListItem icon={SiTypescript} text="TypeScript" />
              <ListItem icon={SiCsharp} text="Css" />
              <ListItem icon={SiNextDotJs} text="Next.js" />
              <ListItem icon={SiTailwindcss} text="TailwindCSS" />
            </ul>
          </div>
        </div>
      </Content>
      <footer />
    </>
  );
}

export default Home;
