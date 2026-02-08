"use client";

import { useState, useCallback } from "react";
import { useNavigation } from "@/context/NavigationContext";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactSection() {
  const { animatingSection, registerSectionRef } = useNavigation();
  const isAnimating = animatingSection === "CONTACT";
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formInfo);
    alert("form has been submitted successfully")
  }

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      registerSectionRef("CONTACT", el);
    },
    [registerSectionRef]
  );

  return (
    <section
      className={`buttonSection contact${isAnimating ? " start-anim" : ""}`}
      data-text="CONTACT"
      ref={setRef}
    >
      <div className="container contacts">
        <SectionTitle
          prefix="Contact"
          highlight=" Me"
          subtitlePrefix=""
          subtitleHighlight=""
        />
        <div className="sectionSubtitle" style={{ textAlign: "center", paddingTop: 0, marginTop: -20 }}>
          <span className="color"> Get</span> In Touch.
        </div>
        <div className="contactContent">
          {/* Contact form */}
          <div className="contactForm">
            <div className="formHeader">Message Me</div>
            <form id="myForm" onSubmit={handleSubmit}>
              <div className="inputLine">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  id="name"
                  className="inputName"
                  onChange={(e) => handleOnchange(e)}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  id="email"
                  className="inputName"
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                id="subject"
                className="inputSubject"
                onChange={(e) => handleOnchange(e)}
              />
              <textarea
                name="message"
                required
                className="inputTextarea"
                placeholder="Message"
                id="body"
                onChange={(e) => handleOnchange(e)}
              />
              <button className="colorBg colors" type="submit" id="submit">
                Submit
              </button>
            </form>
          </div>
          {/* Contact information */}
          <div className="contactInfo">
            <div className="contactInfo-header">Contact Info</div>
            <div className="contactInfo-content">
              <div className="contactInfoContentLine">
                <img src="/images/icon-name.png" className="icon" alt="name-icon" />
                <div className="contactInfoIconText">
                  <h6>Name</h6>
                  <p>Nirmal.P</p>
                </div>
              </div>
              <div className="contactInfoContentLine">
                <img src="/images/icon-location.png" className="icon" alt="location-icon" />
                <div className="contactInfoIconText">
                  <h6>Location</h6>
                  <p>Chennai, TamilNadu</p>
                </div>
              </div>
              <div className="contactInfoContentLine">
                <img src="/images/icon-phone.png" className="icon" alt="phone-icon" />
                <div className="contactInfoIconText">
                  <h6>Call</h6>
                  <a href="tel:9677003728">+91 9677003728</a>
                </div>
              </div>
              <div className="contactInfoContentLine">
                <img src="/images/icon-email.png" className="icon" alt="email-icon" />
                <div className="contactInfoIconText mailId">
                  <h6>Email</h6>
                  <a href="mailto:nirmal.p1206@gmail.com">nirmal.p1206@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="footerText">
          <img src="/images/copyright.png" alt="copyright" className="images" height="14" />{" "}
          Nirmal Premil
        </div>
      </div>
    </section>
  );
}
