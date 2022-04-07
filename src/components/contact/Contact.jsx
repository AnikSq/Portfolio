import "./contact.css";
import Phone from "./../../img/phone.png";
import Email from "./../../img/email.png";
import Location from "./../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSumbit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iebu3ng",
        "template_yehp0fb",
        formRef.current,
        "x-wiRuvLHZqPTriTc"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          setDone(false);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"> </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Phone} alt="" />
              +91 7439497790
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              Anikssp829@Gmail.Com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Location} alt="" />
              India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <div className="lettingThemKnow">
              <b>What's your Idea?</b>,&nbsp;Whatever it is,&nbsp;If you think
              it's interesting,&nbsp; Let me Know!
            </div>
            <p className="working">I am looking forward to work with You!</p>
          </p>
          <form action="" ref={formRef} onSubmit={handleSumbit}>
            <input
              style={{
                backgroundColor: darkMode ? "#343a40" : "#f8f9fa",
                color: darkMode ? "#f8f9fa" : "#343a40",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{
                backgroundColor: darkMode ? "#343a40" : "#f8f9fa",
                color: darkMode ? "#f8f9fa" : "#343a40",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{
                backgroundColor: darkMode ? "#343a40" : "#f8f9fa",
                color: darkMode ? "#f8f9fa" : "#343a40",
              }}
              type="Email"
              placeholder="Your,&nbsp;Electronic Mail"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode ? "#343a40" : "#f8f9fa",
                color: darkMode ? "#f8f9fa" : "#343a40",
              }}
              rows="5"
              placeholder="Hey,&nbsp; Feel free to write just about anything!"
              name="message"
              required
            />
            <button className="sendButton">Send It!</button>
            {done && "Hey, Thanks for the mail, I'll look into it."}
            {/* This means do this if this statement is true */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
