import React from "react";
import "./MainImage.css";
import mainimage from "./img/hero.png";

function MainImage() {
  return (
    <div>
      <div className="main-image">
        <img className="image3" src={mainimage} alt="photo" />
      </div>
      <br />
      <div className="big-heading centre">
        <span className="nilshow">:</span>
        <span
          className="txt-rotate"
          data-period="3000"
          data-rotate='[ "Tax Solutions.", "Company Law Solutions.", "Accounting Solutions."]'
        ></span>
      </div>
      <div className="below-big-heading centre">
        your way with <strong>E-Accounting</strong>. Contact us today for
        <span className="EM">Accounting</span>,
        <span className="EM">Company Law</span> &
        <span className="EM">taxation</span> solution!
      </div>
      <div className="enquire centre">
        <form name="submit-to-google-sheet">
          <input
            type="text"
            name="name"
            placeholder="Name "
            className="enter-email centre"
          />
          <span name="subject" name="eaccounting"></span>

          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="enter-email centre"
          />

          <input
            type="text"
            name="message"
            placeholder="Message/Service"
            className="enter-email centre"
          />

          {/* <button type='submit' className=" btn">
            <span
            //   onClick={submit_form}
                type='submit'
              className=" centre"
              style="background-color: transparent; color: white"
            >
              Submit
            </span>
          </button> */}
        </form>
      </div>
    </div>
  );
}

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzvr85UNDDdi2KLvHgdD4kHiDY1rvhRh2tiKoFXcTFHf4KM4LkEepdSaXocowt08XvG/exec";
// // const form = document.forms["submit-to-google-sheet"];

// const form = document.getElementsByName("submit-to-google-sheet")

// form.addEventListener("submit", (e) => {
//   // e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => console.log("Success!", response))
//     .catch((error) => console.error("Error!", error.message));
// });






export default MainImage;
