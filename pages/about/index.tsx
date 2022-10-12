import React from "react";
import Head from "next/head";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Back from "../../components/back";
import { Button } from "@mui/material";
// grab loading wheel from material-ui
import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Tooltip, Typography } from "@mui/material";
import Carousel from "../../components/Carousel";

function about() {
  return (
    <>
      <Head>
        <title>About me | 808ms</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Back>
        <div className= "flex justify-center items-center min-h-screen">
          <div className= "bg-black bg-opacity-80 p-10 rounded-xl">
        <div>
          <br />
          <Typography variant="h1" className="text-4xl tracking-wide">
            About me:
          </Typography>
          <p className="pt-3">
            Some hobbies I have are coding, playing games, and photography.
            I&apos;m also a huge{" "}
            <span className="text-blue-400 hover:underline">
              <a href="https://anilist.co/user/808Hunter/">weeb</a>
            </span>
          </p>
        </div>
        <Typography variant="h4" component="h4">
          Projects
        </Typography>
        <p>
          Hello, this is more information about me :D I started learing computer
          science this summer. This will eventually have projects that I&apos;ve
          worked on, which will vary from more website to simple games and
          starter projects. You can also check my github on the home page!
        </p>
          </div>
        </div>
      </Back>
      <Carousel/>
    </>
  );
}

export default about;
