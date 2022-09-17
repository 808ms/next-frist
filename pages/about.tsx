import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Content from "../components/content";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

function About() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Head>
        <title>About/ Projects | 808ms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <div className="flex justify-center h-full">
          <div className="text-center max-w-xl h-full ">
            <Typography variant="h4" component="h4">
              Projects
            </Typography>
            <p>
              Hello, this is more information about me :D I started learing
              computer sciance this summer. This will eventually have projects
              tha I&apos;ve worked on, which will vary from more website to
              simple games and starter projects.
            </p>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default About;
