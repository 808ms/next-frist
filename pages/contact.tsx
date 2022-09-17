import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Content from "../components/content";
import styles from "../styles/contact.module.css";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Content>
        You can contact me at{" "}
        <a href="mailto:hunter96816@gmail.com" className={styles.link}>
          hunter96816@gmail
        </a>
        <br />
        <div className="flex justify-center">
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
            variant="contained"
          >
            Go home
          </Button>
        </div>
      </Content>

      <Footer />
    </>
  );
}
