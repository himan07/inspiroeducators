import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import "../assets/css/footer.css";
import meeting from "../assets/images/meetins.jpg";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/instagram.png";
import LinkedIn from "../assets/images/linkedin.png";

const Footer = () => {

  return (
    <div
    className="footer"
      id="footer"
      style={{
        padding: "20px 0px 20px 0px",
      }}
    >
      <Container maxWidth="lg" style={{ margin: "15px 100px 10px 0px" }}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: "10px" }}
            >
              <img src={meeting} height="400" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <h1
              style={{
                textAlign: "left",
                letterSpacing: "2.5px",
                fontSize: "2.5rem",
                fontFamily: "inherit",
              }}
            >
              Let's Start a<br /> Conversation
            </h1>
            <div className="details_of_footer">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ textAlign: "left", lineHeight: "1.5" }}>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "",
                      color: "#ff9933",
                    }}
                  >
                    Phone
                  </span>
                  <br />
                  +91 8853488333
                </p>
                <p style={{ textAlign: "left", lineHeight: "1.5" }}>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "",
                      color: "#ff9933",
                      position: "relative",
                      left: "3.5rem",
                    }}
                  >
                    Email
                  </span>
                  <br />
                  <span style={{ position: "relative", left: "3.5rem" }}>
                    info@inspiroeducators.com
                  </span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <p style={{ textAlign: "left", lineHeight: "1.5" }}>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "",
                      color: "#ff9933",
                      position: "relative",
                    }}
                  >
                    Address
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "15px",
                      position: "relative",
                    }}
                  >
                    <span style={{ fontWeight: "bolder", fontSize: "17px" }}>
                      Lucknow Office-
                    </span>
                    &nbsp; Plot No 7 Purvanchal
                    <br /> Enclave Semra, Lucknow - 227105
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
                    &nbsp; JN2/b6 Ashirvad Apartment
                    <br /> Vashi,Thane Navi Mumbai - 400703
                  </span>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    lineHeight: "1.5",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "",
                      color: "#ff9933",
                    }}
                  >
                    Social Media
                  </span>
                  <br />
                  <div
                    style={{ display: "flex", gap: "20px", marginTop: "5px" }}
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=100089201815108&mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebook} height="30" />
                    </a>
                    <a
                      href="https://instagram.com/inspiroeducators?igshid=NzZlODBkYWE4Ng=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={insta} height="30" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/inspiroeducators/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkedIn} height="30" />
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
