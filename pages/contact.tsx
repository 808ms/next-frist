import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Content from "../components/content";
import styles from "../styles/contact.module.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* <Navbar /> */}
      <Content>
        <div className="flex items-center min-h-screen ">
          <div className="bg-black bg-opacity-80 p-10 rounded-xl">
            <span className="text-white">You can contact me at </span>
            <a href="mailto:hunter96816@gmail.com" className={styles.link}>
              hunter96816@gmail.com
            </a>
            <br />
            <div className="flex justify-center bg-black">
              <Button
                onClick={() => {
                  window.location.href = "/";
                }}
                variant="contained"
              >
                Go home
              </Button>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </>
  );
};

export default Contact;
