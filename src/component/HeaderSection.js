import { React, useState } from "react";
import "./Header.css";
import image from "./image.svg";
import telephone from "./telephone.svg";
import "@fontsource/montserrat";

export default function HeaderSection() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      {/* <div className="head-container"> */}
        <nav
          className={`navbar navbar-expand-lg p-4 ${
            colorChange ? "navbar colorChange" : "navbar"
          } `}
        >
          <div className="container ">
            <img className="logo-img" src={image} alt="" />
            <div>
              <span className="phone">
                <img className="phone-img" src={telephone} alt="" /> +91
                2349759439
              </span>
              <button className="button-1"><span className="normal-view">Check for opening today</span> <span className="mob-view">check</span></button>
            </div>
          </div>
        </nav>
        {/* <div className="main"> */}
        <div className="container main-head pt-5 my-6 header-main pt-4">
          <div className="container heading">
            <h1>
              <strong>
                Personalized IV Therapy Designed To Make Sure You Get The EXACT
                Nutrients You Need To Thrive
              </strong>
            </h1>
            <h4>
              We don’t believe in randomly picking from those basic IV menus.
              That’s why our board-certified Integrative Medicine specialists
              craft our advanced IV therapy infusions specific to you!
            </h4>
            <button className=" button-2 my-3">Check for opening today</button>
          </div>
          <div className="container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Qmi-Xwq-MEc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* </div> */}

        <section className="testimonial-section container d-flex">
          <div className="testimonial container mx-3">
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <p className="my-3">
              I had a great experience at VYVE Wellness.
            </p>{" "}
            <br />
            <p>
              The facility is very clean and the overall design and ambience of
              the space is very calming and peaceful.
            </p>{" "}
            <br />
            <p>
              Dr. Haas was very knowledgeable about the health testimonial of IV
              infusions. He really took the time to also address a few of my
              personal health concerns and wellness goals. Tae, the front desk
              nurse/receptionist was also so helpful and personable during my
              visits. She really made me feel so welcomed during my IV sessions.
              She was simply amazing! Brent, one of the Lead Infusion staff
              members was very gentle and friendly during my IV treatment. He
              made sure I felt relaxed and comfortable. I appreciate the
              excellent customer service from VYVE Wellness!
            </p>
            <div>
              <img
                className="rounded-circle"
                src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620a6ff0c9c08c45e0d8864e.png"
                alt=""
              />
              <span className="name-testimonial">Kendra B</span>
            </div>
          </div>
          <div className="testimonial container mx-3">
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <span class="fa fa-star checked mx-0.5 mx-1"></span>
            <p className="my-3">
              I had a great experience at VYVE Wellness.
            </p>{" "}
            <br />
            <p>
              The facility is very clean and the overall design and ambience of
              the space is very calming and peaceful.
            </p>{" "}
            <br />
            <p>
              Dr. Haas was very knowledgeable about the health testimonial of IV
              infusions. He really took the time to also address a few of my
              personal health concerns and wellness goals. Tae, the front desk
              nurse/receptionist was also so helpful and personable during my
              visits. She really made me feel so welcomed during my IV sessions.
              She was simply amazing! Brent, one of the Lead Infusion staff
              members was very gentle and friendly during my IV treatment. He
              made sure I felt relaxed and comfortable. I appreciate the
              excellent customer service from VYVE Wellness!
            </p>
            <img
              className="rounded-circle"
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620a6ff0c9c08cc167d8864d.png"
              alt=""
            />
            <span className="name-testimonial">Kendra B</span>
          </div>
        </section>

        <section className="benefits-section d-flex">
          <div className="benefits-1">
            <h1>
              <strong>
                Unlock the testimonial of <br />
                IV Nutrient Therapy
              </strong>
            </h1>
            <br />
            <p>
              IV therapy is one of the quickest ways to rehydrate your body.
              But, it’s also the most EFFICIENT way to absorb 100% of the
              nutrients you need for optimal health, no matter your wellness
              goal.
            </p>
            <div className="checklist d-flex justify-content-between">
              <div className="checklist-1 d-flex flex-column ">
                <span className="mb-3">
                  <img
                    src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
                    alt=""
                  />
                  <span className="mx-3">Reduce inflammation</span>
                </span>
                <span className="mb-3">
                  <img
                    src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
                    alt=""
                  />
                  <span className="mx-3">Boost energy levels</span>
                </span>
                <span className="mb-3">
                  <img
                    src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
                    alt=""
                  />
                  <span className="mx-3">Improve function</span>
                </span>
              </div>
              <div className="checklist-2 d-flex flex-column">
                <span className="mb-3">
                  <img
                    src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
                    alt=""
                  />
                  <span className="mx-3">Optimize physique</span>
                </span>
                <span className="mb-3">
                  <img
                    src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
                    alt=""
                  />
                  <span className="mx-3">Support cognitive health</span>
                </span>
                <span className="mb-3">
                  <img
                    src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
                    alt=""
                  />
                  <span className="mx-3">…And much more!</span>
                </span>
              </div>
            </div>
            <button className="my-3 button-2">Check for opening today</button>
          </div>
          <div className="container benefits-2">
            <img
              className="benifits-img"
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/5f756f90-a603-43f0-bcc6-ff3a6fd1ad7a.jpeg"
              alt=""
            />
          </div>
        </section>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}