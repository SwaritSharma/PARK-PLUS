import React, { useEffect, useState } from "react";
import Home1 from "../assets/Home1.jpg";
import { CiMap } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { FaPlaneUp } from "react-icons/fa6";
import { GiAirBalloon } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import "./Hero.css";
import info1 from "../assets/info1.jpg";
import info2 from "../assets/info2.jpg";
import info3 from "../assets/info3.jpg";
import info4 from "../assets/info4.jpg";
import up from "../assets/up.jpg";
import punjab from "../assets/punjab.jpg";
import haryana from "../assets/haryana.jpg";
import himachal from "../assets/himachal.jpg";
import rajasthan from "../assets/rajasthan.jpg";
import mumbai from "../assets/mumbai.jpg";
import assam from "../assets/assam.jpg";
import kerela from "../assets/kerela.jpg";
import founder2 from "../assets/founder2.jpeg";
import founder1 from "../assets/founder1.jpeg";
import founder3 from "../assets/founder3.jpeg"
import founder4 from "../assets/founder4.jpeg"
function Home() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showJoinForm, setShowJoinForm] = useState(false);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && phoneNo && pincode) {
      fetchParkingLotsByPincode(pincode)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching parking lots:", error);
          alert("An error occurred while fetching parking lots.");
        });
    } else {
      alert("Please fill in all the required fields");
    }
  };

  const handlePhoneNoChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^\d+$/.test(value)) {
      setPhoneNo(value);
    }
  };

  const handleJoinNowClick = () => {
    setShowJoinForm(true);
  };

  return (
    <>
      <main>
        <section className="hero">
          <img src={Home1} alt="Hero Image" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="hero-title">Welcome to PARK+</h1>
            <p className="hero-subtitle">
              Revolutionizing urban mobility with innovative parking management
              solutions. Enjoy seamless parking experiences and enhanced
              convenience wherever you go.
            </p>
            <button className="hero-button">Learn More</button>
            <div className="overlay-container">
              <div className="overlay-container-section1">
                <CiMap style={{ height: "70", width: "70" }} />
                <h3>Search Spaces</h3>
                <p>
                  Discover available parking spaces near you, hassle-free and
                  convenient.
                </p>
              </div>
              <div className="overlay-container-section2">
                <BsSuitcaseLg style={{ height: "70", width: "70" }} />
                <h3>Book Spaces</h3>
                <p>
                  Find your perfect parking spot with ease and reserve in
                  seconds
                </p>
              </div>
              <div className="overlay-container-section3">
                <FaCarSide style={{ height: "70", width: "70" }} />
                <h3>Arrive & Park</h3>
                <p>
                  Arrive with confidence, park with ease—your spot is just a
                  click away.
                </p>
              </div>
            </div>
            {showJoinForm ? (
              <div className="hero-form">
                <h2>Join Park+</h2>
                <form onSubmit={handleFormSubmit}>
                  <label>
                    Name
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Phone No:
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={handlePhoneNoChange}
                      maxLength={10}
                      required
                      placeholder="Your Contact Number"
                    />
                  </label>
                  <br />
                  <label>
                    Pincode:
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength={6}
                      required
                      placeholder="Area Pincode"
                    />
                  </label>
                  <br />
                  <label>
                    Address:
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Parking Lot Address"
                      required
                    />
                  </label>
                  <br />
                  <label>
                    State:
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Your State"
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Email:
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                    />
                  </label>
                  <br />
                  <button type="submit">Join Now</button>
                </form>
              </div>
            ) : (
              <div className="hero-form">
                <h2>Find Parking Spaces Near You </h2>
                <form onSubmit={handleFormSubmit}>
                  <label>
                    Name
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Phone No:
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={handlePhoneNoChange}
                      maxLength={10}
                      required
                      placeholder="Your Contact Number"
                    />
                  </label>
                  <br />
                  <label>
                    Pincode:
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength={6}
                      required
                      placeholder="Area Pincode"
                    />
                  </label>
                  <br />
                  <button type="submit">Find Parking Lots</button>
                </form>
                {searchResults.length > 0 && (
                  <ul>
                    {searchResults.map((parkingLot) => (
                      <li key={parkingLot.id}>
                        {parkingLot.name} - {parkingLot.address}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </section>
        <section className="features">
          <div className="features-title">
            <h3>
              Elevate Your Parking Facility with Our
              <h3 style={{ color: "#387cca" }}></h3>Automated Parking Management
              System
            </h3>
            <p className="features-subtitle">
              Transform your parking facility into a state-of-the-art operation
              with our cutting-edge automated parking management system.
              Designed to streamline operations and enhance user experience, our
              system offers a host of benefits that set your facility apart.
            </p>
            <button className="cta-button" onClick={handleJoinNowClick}>
              Join Now
            </button>
          </div>

          <div className="features-container">
            <p className="features-title1">Available Parking Spaces</p>
            <h5 className="features-title2">Manage your Parking Space</h5>
            <div className="features-container-sections">
              <div className="features-container-section1">
                <div
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <FaPlaneUp
                    style={{ height: "50", width: "50", color: "#387cca" }}
                  ></FaPlaneUp>
                  <div style={{ marginLeft: "10px", marginTop: "6px" }}>
                    <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Airport Parking
                    </p>
                    <p style={{ color: "#387cca" }}>Safe & secure</p>
                  </div>
                </div>
                <p style={{ borderTop: "1px solid grey" }}>
                  Experience safe and secure airport parking with our advanced
                  parking management system.
                </p>
              </div>
              <div className="features-container-section2">
                <div
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <FaCarSide
                    style={{ height: "50", width: "50", color: "#387cca" }}
                  />
                  <div style={{ marginLeft: "10px", marginTop: "6px" }}>
                    <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Overnight Parking
                    </p>
                    <p style={{ color: "#387cca" }}>With more Freedom</p>
                  </div>
                </div>
                <p style={{ borderTop: "1px solid grey" }}>
                  Enjoy more freedom with hassle-free overnight parking options
                  tailored for your convenience.
                </p>
              </div>
              <div className="features-container-section3">
                <div
                  style={{
                    display: "flex",
                    fontSize: "10px",
                  }}
                >
                  <GiAirBalloon
                    style={{ height: "50", width: "50", color: "#387cca" }}
                  />
                  <div style={{ marginLeft: "10px", marginTop: "6px" }}>
                    <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Events Parking
                    </p>
                    <p style={{ color: "#387cca" }}>Close to the Venue</p>
                  </div>
                </div>
                <p style={{ borderTop: "1px solid grey" }}>
                  Park conveniently close to the venue with our dedicated events
                  parking service.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <div className="info-heading">
            <p>WHY CHOOSE US</p>
          </div>
          <div className="info-subheading">
            <h2>
              Take advantage of our special deals while getting{" "}
              <h2 style={{ color: "#387cca" }}>fast & quality service.</h2>
            </h2>
          </div>
          <div className="info-container">
            <div className="info-container1">
              <img src={info1} alt="info1" style={{ borderRadius: "10px" }} />
              <h2
                className="text-xl font-bold mb-2"
                style={{
                  color: "#387cca",
                  marginTop: "10px",
                  fontSize: "15px",
                  padding: "10px 10px",
                  textAlign: "center",
                }}
              >
                Increased Automated Efficiency
              </h2>
              <p
                className="text-gray-600"
                style={{
                  fontSize: "14px",
                  padding: "5px 5px",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Automates manual tasks, leading to faster operations and reduced
                labor costs.
              </p>
            </div>
            <div className="info-container2">
              <img src={info2} alt="" style={{ borderRadius: "10px" }} />
              <h2
                className="text-xl font-bold mb-2"
                style={{
                  color: "#387cca",
                  marginTop: "10px",
                  fontSize: "15px",
                  padding: "10px 10px",
                  textAlign: "center",
                }}
              >
                Enhanced User Experience
              </h2>
              <p
                className="text-gray-600"
                style={{
                  fontSize: "14px",
                  padding: "5px 5px",
                  textAlign: "center",
                }}
              >
                Provides convenience through features like online booking,
                mobile payments.
              </p>
            </div>
            <div className="info-container3">
              <img src={info3} alt="" style={{ borderRadius: "10px" }} />
              <h2
                className="text-xl font-bold mb-2"
                style={{
                  color: "#387cca",
                  marginTop: "10px",
                  fontSize: "15px",
                  padding: "10px 10px",
                  textAlign: "center",
                }}
              >
                Increased Revenue
              </h2>
              <p
                className="text-gray-600"
                style={{
                  fontSize: "14px",
                  padding: "5px 5px",
                  textAlign: "center",
                }}
              >
                Generates additional income through premium parking spots.
              </p>
            </div>
            <div className="info-container4">
              <img
                src={info4}
                alt=""
                style={{ borderRadius: "10px", height: "57%" }}
              />
              <h2
                className="text-xl font-bold mb-2"
                style={{
                  color: "#387cca",
                  marginTop: "10px",
                  fontSize: "15px",
                  padding: "10px 10px",
                  textAlign: "center",
                }}
              >
                Reduced Environmental Impact
              </h2>
              <p
                className="text-gray-600"
                style={{
                  fontSize: "14px",
                  padding: "5px 5px",
                  textAlign: "center",
                }}
              >
                Contributes to sustainable practices by reducing traffic
                congestion and emissions
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container-serve">
            <h1
              style={{
                fontSize: "16px",
                marginBottom: "20px",
                marginBottom: "15px",
              }}
            >
              OUR PRESENCE
            </h1>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
              Areas We Are Serving
            </h2>
            <div className="serve-buttons">
              <button className="serve-button1">All places</button>
              <button className="serve-button2">North India</button>
              <button className="serve-button3">South India</button>
            </div>
            <div className="serve-cards">
              <div className="serve-card1">
                <img src={up} alt="Uttar Pradesh" />
                <div className="serve-overlay">
                  <h3>Uttar Pradesh</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card2">
                <img src={punjab} alt="Punjab" />
                <div className="serve-overlay">
                  <h3>Punjab</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card3">
                <img src={haryana} alt="Haryana" />
                <div className="serve-overlay">
                  <h3>Haryana</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card4">
                <img src={himachal} alt="Himachal Pradesh" />
                <div className="serve-overlay">
                  <h3>Himachal Pradesh</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card5">
                <img src={rajasthan} alt="Rajasthan" />
                <div className="serve-overlay">
                  <h3>Rajasthan</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card6">
                <img src={mumbai} alt="Mumbai" />
                <div className="serve-overlay">
                  <h3>Mumbai</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card7">
                <img src={assam} alt="Assam" />
                <div className="serve-overlay">
                  <h3>Assam</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
              <div className="serve-card8">
                <img src={kerela} alt="Kerala" />
                <div className="serve-overlay">
                  <h3>Kerela</h3>
                  <MdArrowOutward style={{ color: "white" }}></MdArrowOutward>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="testimonials-container">
            <div className="testimonials-heading">
              <h1
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  marginBottom: "15px",
                }}
              >
                OUR FOUNDERS
              </h1>
              <h2 style={{ fontSize: "24px", fontWeight: "bold",marginBottom:"20px" }}>
              </h2>
              <p className="testimonial-text">The visionaries behind our journey, dedicated to excellence and driven by a passion to serve you better every day.</p>
            </div>
            <div className="testimonial-card-sec">
              <div className="founder-cards">
                <div className="founder-card1">
                  <img src={founder1} alt="" />
                  <div className="founder-overlay">
                    <h3>SWARIT SHARMA</h3>
                    <p>Frontend And Backend Developer</p>
                  </div>
                </div>
                <div className="founder-card2">
                  <img src={founder2} alt="" />
                  <div className="founder-overlay">
                    <h3>ANKUSH DHIMAN</h3>
                    <p>Backend Developer</p>
                  </div>
                </div>
                <div className="founder-card3">
                  <img src={founder3} alt="" />
                  <div className="founder-overlay">
                    <h3>SWASTIK CHAUHAN</h3>
                    <p>Frontend Developer</p>
                  </div>
                </div>
                <div className="founder-card4">
                  <img src={founder4} alt="" />
                <div className="founder-overlay">
                    <h3>SERENA BALYAN</h3>
                    <p>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
