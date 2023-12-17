/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/image_1.jpg";
import image2 from "../assets/images/image_2.jpg";
import image3 from "../assets/images/image_3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/Home.css";
import aptitude from "../assets/images/check-list.png";
import test from "../assets/images/test.png";
import Personality from "../assets/images/personal-development.png";
import meeting from "../assets/images/meeting.png";
import resume_ from "../assets/images/resume.png";
import interview_ from "../assets/images/interview.png";
import speaking from "../assets/images/talk.png";
import Team1 from "../assets/images/team (1).png";
import Review from "../assets/images/review.png";
import CoursesTable from "./Table";
import certifica from "../assets/images/crtificate.png";
import image1_ from "../assets/images/image_1.jpeg";
import image2_ from "../assets/images/image_2.jpeg";
import image3_ from "../assets/images/image_3.jpeg";
import mahindra from "../assets/images/Mahindra.jpeg";
import Honda from "../assets/images/honda.jpeg";
import Bj from "../assets/images/bj.jpeg";
import swan from "../assets/images/swa.jpeg";
import maruti from "../assets/images/maruti.jpeg";
import Footer from "./Footer";
import g1 from "../assets/images/galary/galary_1.jpg";
import g2 from "../assets/images/galary/galary_2.jpg";
import g3 from "../assets/images/galary/galary_3.jpg";
import g4 from "../assets/images/galary/galary_4.jpg";
import g5 from "../assets/images/galary/galary_5.jpg";
import g6 from "../assets/images/galary/galary_6.jpg";
import g7 from "../assets/images/galary/galary_7.jpg";
import g8 from "../assets/images/galary/galary_8.jpg";
import g9 from "../assets/images/galary/galary_9.jpg";
import g10 from "../assets/images/galary/galary_10.jpg";
import g11 from "../assets/images/galary/galary_11.jpg";
import g12 from "../assets/images/galary/galary_12.jpg";
import g13 from "../assets/images/galary/galary_13.jpg";
import g14 from "../assets/images/galary/galary_14.jpg";
import g15 from "../assets/images/galary/galary_15.jpg";
import g16 from "../assets/images/galary/galary_16.jpg";
import g17 from "../assets/images/galary/galary_17.jpg";
import g18 from "../assets/images/galary/galary_18.jpg";
import g19 from "../assets/images/galary/galary_19.jpg";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [english, setEnglish] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [gd, setGd] = useState(false);
  const [corporate, setCorporate] = useState(false);
  const [resume, setResume] = useState(false);
  const [mock, setMock] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const handleShow = (event) => {
    event.preventDefault();
    setClick(!click);
  };
  const handleShowEnglish = (event) => {
    event.preventDefault();
    setEnglish(!english);
  };

  const handlePersonal = (event) => {
    event.preventDefault();
    setPersonal(!personal);
  };

  const handleGd = (event) => {
    event.preventDefault();
    setGd(!gd);
  };

  const handleCorporate = (event) => {
    event.preventDefault();
    setCorporate(!corporate);
  };

  const handleResume = (event) => {
    event.preventDefault();
    setResume(!resume);
  };

  const handleMock = (event) => {
    event.preventDefault();
    setMock(!mock);
  };

  const handleFeedback = (event) => {
    event.preventDefault();
    setFeedback(!feedback);
  };

  return (
    <div className="container">
      <Navbar />
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={2000}
        className="carousel"
      >
        <div class="image-container">
          <img src={image2} alt="Image 2" style={{ height: "600px" }} />
          <p>
            <span style={{ fontSize: "2rem" }}>Where education, </span> <br />
            <span style={{ fontSize: "3rem" }}>meets inspiration</span>
          </p>
          <p></p>
        </div>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Carousel>
      <div className="container_items">
        <div className="about">
          <h1 className="about_heading">About InspiroEducators</h1>
          <p className="about_content background-animation ">
            InspiroEducators is dedicated to empowering students from various
            colleges with a unique blend of soft skills and technical expertise.
            <br /> We provide comprehensive courses and engaging sessions to
            help students develop essential professional and interpersonal
            <br /> skills. Alongside this, we offer a wide range of technical
            courses to ensure they are well-equipped for the competitive
            <br /> job market. Our commitment doesn't end there; we also extend
            our support by providing placement services,
            <br />
            helping students kickstart their careers on the right foot. we're
            all about preparing students for success
            <br /> in both their professional and personal lives."
          </p>
        </div>
        <div className="courses">
          <h1 className="our_c">Our Courses</h1>
          <div className="cards">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="multiple_cards">
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#f6cde3" }}
                  >
                    <div className="logo_text">
                      <img
                        src={aptitude}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Aptitude
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Quantitative aptitude is vital for precision in
                          solving complex math problems, crucial for data-driven
                          decisions in finance, engineering, and data analysis.
                          <br />
                          <br />
                          <a href="#" onClick={(event) => handleClick(event)}>
                            Click here for details
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#dadcf8" }}
                  >
                    <div className="logo_text">
                      <img
                        src={test}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Mock Test
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Mock tests aid in assessing your knowledge and
                          boosting confidence, while also highlighting areas for
                          improvement
                          {click
                            ? "ultimately enhancing your examperformance"
                            : "..."}
                          <br />
                          {click ? (
                            <ul className="_ul">
                              <li>Topic wise weekly Test</li>
                              <li>Previous year Question</li>
                              <li>Sample Paper</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a href="#" onClick={(event) => handleShow(event)}>
                            {click
                              ? "View less"
                              : " Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#f5f5d0" }}
                  >
                    <div className="logo_text">
                      <img
                        src={speaking}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        English Speaking Course
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          English speaking courses improve communication skills
                          and open doors to global opportunities through
                          language proficiency.
                          <br />
                          {english ? (
                            <ul className="_ul">
                              <li>Understanding and Knowledge</li>
                              <li>Confidence</li>
                              <li>Communication Skills</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a
                            href="#"
                            onClick={(event) => handleShowEnglish(event)}
                          >
                            {english
                              ? "View less"
                              : "Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="multiple_cards">
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#f5d3c3" }}
                  >
                    <div className="logo_text">
                      <img
                        src={Personality}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Personality Development
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Personality development fosters self-improvement and
                          growth, enhancing one's self-confidence, social
                          skills, and overall effectiveness in
                          {personal ? "personal and professional life." : "..."}
                          <br />
                          {personal ? (
                            <ul className="_ul">
                              <li>Understanding and Knowledge</li>
                              <li>Confidence</li>
                              <li>Communication Skills</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a
                            href="#"
                            onClick={(event) => handlePersonal(event)}
                          >
                            {personal
                              ? "View less"
                              : "Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#dbf6ed" }}
                  >
                    <div className="logo_text">
                      <img
                        src={meeting}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Group Discussion
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Group discussions are forums for individuals to
                          exchange ideas, collaborate, and enhance their
                          {gd
                            ? "communication and critical thinking skills, often used in academic, professional, or social settings."
                            : "..."}
                          <br />
                          {gd ? (
                            <ul className="_ul">
                              <li>Public Speaking</li>
                              <li>Team Work Qualities</li>
                              <li>Leadership</li>
                              <li>Analytical & Logical skills</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a href="#" onClick={(event) => handleGd(event)}>
                            {gd ? "View less" : "Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#e5cdd4" }}
                  >
                    <div className="logo_text">
                      <img
                        src={Team1}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Corporate Sessions
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Corporate sessions are organized for employee training
                          and development, aiming to enhance
                          skills,productivity, and team
                          {corporate
                            ? " cohesion, ultimately benefiting the company's success."
                            : "..."}
                          <br />
                          {corporate ? (
                            <ul className="_ul">
                              <li>Meetup with company higher authority</li>
                              <li>Job profile</li>
                              <li>Job Vacency</li>
                              <li>Skills required</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a
                            href="#"
                            onClick={(event) => handleCorporate(event)}
                          >
                            {corporate
                              ? "View less"
                              : "Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="multiple_cards">
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#fdf9e7" }}
                  >
                    <div className="logo_text">
                      <img
                        src={resume_}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Resume Building
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Resume building is the process of creating a concise,
                          well-structured document that highlights one's
                          qualifications, skills,
                          {resume
                            ? " and experiences to impress potential employers and secure job opportunities."
                            : "..."}
                          <br />
                          {resume ? (
                            <ul className="_ul">
                              <li>Ats Friendly</li>
                              <li>Sync with Job Description</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a href="#" onClick={(event) => handleResume(event)}>
                            {resume
                              ? "View less"
                              : "Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#d1eafa" }}
                  >
                    <div className="logo_text">
                      <img
                        src={interview_}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Mock Interviews
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Mock interviews are practice sessions that simulate
                          real job interviews, helping candidates improve their
                          interview skills,
                          {mock
                            ? "gain confidence, and receive constructive feedback for better performance."
                            : "..."}
                          <br />
                          {mock ? (
                            <ul className="_ul">
                              <li>Practice to face questions</li>
                              <li>Gain Confidence</li>
                              <li>Structured</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a href="#" onClick={(event) => handleMock(event)}>
                            {mock ? "View less" : "Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    style={{ padding: "5px 20px", backgroundColor: "#e6ffe6" }}
                  >
                    <div className="logo_text">
                      <img
                        src={Review}
                        alt="image is not found"
                        height="40"
                        width="40"
                        className="course_img"
                      />
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.4rem",
                        }}
                      >
                        Feedback
                      </h1>
                    </div>
                    <CardContent>
                      <div className="content">
                        <p className="_Paragraphs">
                          Feedback provides valuable insights and guidance for
                          improvement in various aspects of life, from work to
                          personal growth.
                          <br />
                          {feedback ? (
                            <ul className="_ul">
                              <li>Discuss performance</li>
                              <li>Guidence</li>
                              <li>Problem solving</li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <br />
                          <a
                            href="#"
                            onClick={(event) => handleFeedback(event)}
                          >
                            {feedback
                              ? "View less"
                              : " Click here for more details"}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <div className="dialog">
                <Dialog
                  open={open}
                  onClose={handleClick}
                  fullWidth
                  maxWidth="lg"
                  aria-labelledby="draggable-dialog-title"
                >
                  <DialogTitle>Topics</DialogTitle>
                  <Divider />
                  <DialogContent>
                    <CoursesTable />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      className="btn_close"
                      size="large"
                      onClick={handleClick}
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
          </div>
        </div>
        <div className="certificate">
          <h1>Certification</h1>
          <img
            src={certifica}
            alt="image is not found"
            height="600"
            width="1000"
          />
        </div>
        <div className="training_placement">
          <h1>Internship & Placement Assistance</h1>
          <p>
            With a demonstrated history of guiding individuals toward rewarding
            internships and securing successful placements, We are committed
            <br /> to offering comprehensive support tailored to your unique
            professional goals. Whether it's crafting standout resumes, <br />
            honing interview skills, or connecting you with valuable networking
            opportunities,I am here to ensure <br /> your internship and
            placement experiences align seamlessly with your career aspirations.
            Let's <br /> work togetherto pave the way for your success.
            <br />
            <ul>
              <li>Develop professional connection</li>
              <li>Boost your Resume</li>
              <li>Higher Salary Potential</li>
              <li>Technical Skills</li>
              <li>Campus Placements</li>
            </ul>
          </p>
        </div>
        <div className="guest_section">
          <h1>Guest Faculty</h1>
          <div className="images_container">
            <div className="images_details">
              <img
                src={image1_}
                alt="image is not found"
                height="200"
                className="guest_img"
              />
              <p style={{ fontSize: "1.7rem" }}>
                Basukinath Pandey
                <br />
                <span style={{ fontSize: "1rem" }}>
                  Prof. Mumbai University
                </span>
              </p>
            </div>
            <div className="images_details">
              <img
                src={image2_}
                alt="image is not found"
                height="210"
                className="guest_img"
              />
              <p style={{ fontSize: "1.7rem" }}>
                Ritu Singh
                <br />
                <span style={{ fontSize: "1rem" }}>
                  Assistance Prof. IIM, Lucknow
                </span>
                <br />
              </p>
            </div>
            <div className="images_details">
              <img
                src={image3_}
                alt="image is not found"
                height="200"
                className="guest_img"
              />
              <p style={{ fontSize: "1.7rem" }}>
                Diwakar Mishra
                <br />
                <span style={{ fontSize: "1rem" }}>
                  Africa Head of Audit in Triton Group
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="corporate_tieups">
          <h1>Corporate Tie-ups</h1>
        </div>
        <div className="logos">
          <div className="section1">
            <img src={mahindra} alt="image is not found" height="100" />
            <img src={Honda} alt="image is not found" height="100" />
            <img src={Bj} alt="image is not found" height="100" />
            <img src={maruti} alt="image is not found" height="100" />
            <img src={swan} alt="image is not found" height="100" />
          </div>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                margin: "0px 0px 40px 0px",
                fontWeight: "bold",
                color: "rgb(53, 76, 100)",
              }}
            >
              Perspective Gallery
            </Typography>
            <Carousel
              showArrows={false}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              interval={3000}
              className="carousel"
            >
              <div class="library_items">
                <img id="library" src={g1} alt="Image 2" />
                <img id="library" src={g2} alt="Image 2" />
                <img id="library" src={g3} alt="Image 2" />
                <img id="library" src={g4} alt="Image 2" />
                <img id="library" src={g5} alt="Image 2" />
              </div>
              <div class="library_items">
                <img id="library" src={g6} alt="Image 2" />
                <img id="library" src={g7} alt="Image 2" />
                <img id="library" src={g8} alt="Image 2" />
                <img id="library" src={g9} alt="Image 2" />
                <img id="library" src={g10} alt="Image 2" />
              </div>
              <div class="library_items">
                <img id="library" src={g11} alt="Image 2" />
                <img id="library" src={g12} alt="Image 2" />
                <img id="library" src={g13} alt="Image 2" />
                <img id="library" src={g14} alt="Image 2" />
                <img id="library" src={g15} alt="Image 2" />
              </div>
              <div class="library_items">
                <img id="library" src={g16} alt="Image 2" />
                <img id="library" src={g17} alt="Image 2" />
                <img id="library" src={g18} alt="Image 2" />
                <img id="library" src={g19} alt="Image 2" />
                <img id="library" src={g15} alt="Image 2" />
              </div>
            </Carousel>
          </Grid>
        </Grid>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
