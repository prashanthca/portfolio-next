import {useEffect} from "react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="container">
      <section className="row top-container">
        <div className="col-12 col-lg-6">
          <span className="intro-top ms-lg-5">Hi! I am<br/>Prashanth C A</span>
          <p className="intro-first ms-lg-5">A freelance <b>web developer</b> from Bangalore, IN.</p>
          <p className="intro-second ms-lg-5">I specialize in UI/UX Design, Full-stack MERN/LAMP development and Mobile application development</p>
          <div classname="input-group mb-3 ms-lg-5 reach-out">
            <input type="text" classname="form-control" placeholder="Your email" aria-label="Your email" aria-describedby="button-addon2"/>
            <button classname="btn btn-outline-secondary" type="button" id="button-addon2">Connect with me</button>
          </div>
        </div>
      </section>
    </div>
  )
}
