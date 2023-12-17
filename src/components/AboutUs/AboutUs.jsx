/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Navbar from "../Navbar";
import "../AboutUs/AboutUs.css";
import img1 from "../../assets/images/7.jpeg";
import img3 from "../../assets/images/3.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img4 from "../../assets/images/4.jpeg";
import img5 from "../../assets/images/5.jpeg";
import img6 from "../../assets/images/6.jpeg";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="container_">
      <Navbar />
      <div className="content_x">
        <div className="first_grid">
          <p
            style={{
              paddingRight: "30px",
              color: "white",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "relative",
                fontSize: "3rem",
                fontWeight: "bolder",
              }}
            >
              ABOUT US
            </span>
            <br />
            <br />
            <span style={{ wordBreak: "break-word" }}>
              Welcome to InspiroEducators! We specialize in equipping <br />
              college students with a unique fusion of technical prowess and
              essential soft skills. Our tailored courses and engaging sessions
              ensure a well-rounded preparation for the competitive job market.
              Committed to your success, we go the extra mile by offering
              placement services to kickstart your career journey on <br />
              the right path.
            </span>
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              className="image"
              src={img1}
              alt="image is not found"
              height="250"
            />
            <img
              className="image"
              src={img2}
              alt="image is not found"
              height="250"
            />
            <img
              className="image"
              src={img4}
              alt="image is not found"
              height="250"
            />
          </div>
        </div>
        <div
          className="second_grid"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
            position: "relative",
            marginRight: "50px",
          }}
        >
          <img
            src={img3}
            alt="image is not found"
            style={{ height: "250px", width: "500px" }}
          />
          <img
            className="image"
            src={img5}
            alt="image is not found"
            style={{ height: "250px", width: "auto" }}
          />
          <img
            className="image"
            src={img6}
            alt="image is not found"
            style={{ height: "250px", width: "auto" }}
          />
          {/* <img
            className="image"
            src={img}
            alt="image is not found"
            style={{ height: "250px", width: "auto" }}
          /> */}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
