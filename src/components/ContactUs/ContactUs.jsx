/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../ContactUs/ContactUs.css";
import Navbar from "../Navbar";
import { Button, Card, CardContent } from "@mui/material";
import phone from "../../assets/images/phone.png";
import gmail from "../../assets/images/gmail.png";
import House from "../../assets/images/house.png";
import Footer from "../Footer";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  const handleClick = () => {
    window.open("https://forms.gle/ZH7spLH2N2kTJDBR7", "_blank");
  };

  return (
    <div className="conact_us">
      <Navbar />
      <div className="card">
        <Card className="card_">
          <CardContent>
            <p className="inspiro_logo">InspiroEducators</p>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "3.5rem",
                fontWeight: "bolder",
                marginTop: "-10px",
              }}
            >
              Get in touch
            </h1>
            <p className="caption">
              Drop us a line, or give us heads up if you're intrested in
              visiting us!!
            </p>
            <div className="details">
              <div className="contact_details">
                <div className="icons_">
                  <img
                    src={phone}
                    className="internet"
                    height="40"
                    width="40"
                    style={{ color: "white" }}
                  />
                  <p className="anchor_tag">+91 8853488333</p>
                </div>
              </div>
              <div className="contact_details">
                <div className="icons_mail">
                  <EmailIcon id="mail_icon" />
                  <p className="anchor_tag">info@inspiroeducators.com</p>
                </div>
              </div>
              <div className="contact_details">
                <div className="icons_">
                  <img
                    src={House}
                    className="internet"
                    height="40"
                    width="40"
                    style={{ color: "white" }}
                  />
                  {/* <p className="anchor_tag">www.inspiroeducators.com</p> */}
                  <p
                    className="anchor_tag"
                    style={{ textAlign: "left", lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: "15px",
                        position: "relative",
                      }}
                    >
                      <span style={{ fontWeight: "bolder", fontSize: "17px" }}>
                        Lucknow Office-
                      </span>
                      &nbsp;{" "}
                      <span style={{ color: "#000000" }}>
                        Plot No 7 Purvanchal Enclave Semra, Lucknow - 227105
                      </span>
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "15px",
                        position: "relative",
                      }}
                    >
                      <span style={{ fontSize: "17px", fontWeight: "bolder" }}>
                        Head Office-
                      </span>
                      &nbsp;{" "}
                      <span style={{ color: "#000000" }}>
                        JN2/b6 Ashirvad Apartment Vashi,Thane Navi Mumbai -
                        400703
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              size="lg"
              className="btn_en"
              onClick={handleClick}
            >
              Enquire now
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
