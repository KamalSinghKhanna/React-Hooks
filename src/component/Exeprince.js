import { React, useState } from "react";
import "./Exeprince.css";
import {Carousel} from 'react-bootstrap';
import "./Header.css";
import image from "./image.svg";
// import check from './check2.svg'
import check from "./image(4).svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import "@fontsource/montserrat";

function Exeprence() {
  return (
    <>
      <div className="container testimonial-section d-flex flex-column">
        <div className="container text-center">
          <h1>
            <strong>Experience the VYVE Difference</strong>
          </h1>
          <p>
            As an Integrative Medicine clinic specializing in IV Therapy, we
            build a COMPLETE wellness plan <br />
            (including IV drips) to support your overall performance goals!
          </p>
        </div>
        <div className="container my-5 item d-flex text-center">
          <div className="container text-center text-center">
            <img src={icon1} alt="" />
            <h4 className="my-3 text-center">
              <strong>Board-Certified Physicians</strong>
            </h4>
            <p>
              Treatment plans developed and overseen by in-house doctors with
              specialty training.{" "}
            </p>
          </div>
          <div className="container item  text-center">
            <img src={icon2} alt="" />
            <h4 className="my-3 text-center">
              <strong>Board-Certified Physicians</strong>
            </h4>
            <p>
              Treatment plans developed and overseen by in-house doctors with
              specialty training.{" "}
            </p>
          </div>
          <div className="container item  text-center">
            <img src={icon3} alt="" />
            <h4 className="my-3 text-center">
              <strong>Board-Certified Physicians</strong>
            </h4>
            <p>
              Treatment plans developed and overseen by in-house doctors with
              specialty training.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="spots container testimonial-section d-flex flex-column justify-content-center align-items-center mb-3">
        <h1>
          <strong className="text-white">
            Don’t settle for the standard IV drip service...
          </strong>
        </h1>
        <p className="mb-1">Join our tribe today of wellness-seekers TODAY</p>

        <p className="mb-1">and enjoy a personalized & integrative</p>

        <p className="mb-1"> approach to IV nutrient therapy!</p>
        <div className="d-flex">
          <img
            className="arrow"
            src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/07b4853a-cfea-40a9-a27b-17612d53fdaf.png"
            alt=""
          />
          <button className="mt-5 mb-3 mx-5">Check for opening today</button>
          <img
            className="arrow"
            src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/6cd9920d-0dbd-40fe-abe8-70ad0f0b2e8a.png"
            alt=""
          />
        </div>
        {/* <div className="container check-box text-center"> */}
        <img className="mb-2 check-img" src={check} alt="" />
        <p className="check-box-text">
          HURRY! <strong>ONLY 3 SPOTS REMAINING</strong> FOR THIS MONTH
        </p>
        {/* </div> */}
      </div>

      <section className="container testimonial-section d-flex flex-column work-section  align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center ">
          <h2 className="work-heading">HOW IT WORKS</h2>
          <h1>
            <strong>What to Expect At Your FIRST</strong>{" "}
          </h1>
          <h1>
            <strong>IV Visit at VVYE Wellness…</strong>{" "}
          </h1>
        </div>
        <div className="container visit-section my-5">
          <div className="container d-flex flex-column justify-content-center align-items-start ">
            <img
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/5938ac8a-ec9a-46c9-9f6e-df9f25dbe86b.png"
              alt=""
            />
            <h4>
              <strong>Uncover Your Hydration Profile</strong>
            </h4>
            <p>Take the guesswork out of the equation </p>{" "}
            <p>with our body composition and</p>{" "}
            <p>hydration profile report.</p>
          </div>
          <div className="container d-flex flex-column align-items-end">
            <img
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/da68e3b6-c31a-4631-aba9-9e268b3a46ad.png"
              alt=""
            />
            <h4>
              <strong>Uncover Your Hydration Profile</strong>
            </h4>
            <p>Take the guesswork out of the equation </p>{" "}
            <p>with our body composition and</p>{" "}
            <p>hydration profile report.</p>
          </div>

          <div className="container d-flex flex-column align-items-start">
            <img
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/473db299-ed68-4a7d-8e3a-5295e6ffec3c.png"
              alt=""
            />
            <h4>
              <strong>Uncover Your Hydration Profile</strong>
            </h4>
            <p>Take the guesswork out of the equation </p>{" "}
            <p>with our body composition and</p>{" "}
            <p>hydration profile report.</p>
          </div>
          <div className="container d-flex flex-column align-items-end">
            <img
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/d0ce0747-8c82-41e9-8b2f-0295c31a441c.png"
              alt=""
            />
            <h4>
              <strong>Uncover Your Hydration Profile</strong>
            </h4>
            <p>Take the guesswork out of the equation </p>{" "}
            <p>with our body composition and</p>{" "}
            <p>hydration profile report.</p>
          </div>
        </div>
      </section>

      <div className=" spots2 container testimonial-section d-flex flex-column  align-items-center mb-3">
        <h1 className="my-3">
          <strong className="text-white">NEW PATIENT SPECIAL OFFER</strong>
        </h1>
        <p className="">Enjoy your 1st Infusion PLUS:</p>
        <div className="d-flex offer-item mt-5">
          <div>
            <img
              className="mx-2"
              src="https://storage.googleapis.com/msgsndr/o4yMDdWvX9IjYu0LLupA/media/6215be169b2a4c518fd020e7.png"
              alt=""
            />
            <span className="">Hydration profile report</span>
          </div>
          <div>
            <img
              className="mx-2"
              src="https://storage.googleapis.com/msgsndr/o4yMDdWvX9IjYu0LLupA/media/6215be169b2a4c518fd020e7.png"
              alt=""
            />
            <span className="">Hydration profile report</span>
          </div>
          <div>
            <img
              className="mx-3"
              src="https://storage.googleapis.com/msgsndr/o4yMDdWvX9IjYu0LLupA/media/6215be169b2a4c518fd020e7.png"
              alt=""
            />
            <span className="">Hydration profile report</span>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center m-3">
          <h1 className="">just $97 today!</h1>
          <div className="d-flex">
            <img
              className="arrow"
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/07b4853a-cfea-40a9-a27b-17612d53fdaf.png"
              alt=""
            />
            <button className="price p-2 button-2">
              <h3 className="">Secure My Spot</h3>
            </button>
            <img
              className="arrow"
              src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/6cd9920d-0dbd-40fe-abe8-70ad0f0b2e8a.png"
              alt=""
            />
          </div>
        </div>
        <div className="check-box text-center">
          <img className="check-img" src={check} alt="" />
          <p>
            HURRY! <strong>ONLY 3 SPOTS REMAINING</strong> FOR THIS MONTH
          </p>
        </div>
      </div>

      <section className="raitng-2 container testimonial-section d-flex flex-column  align-items-center mb-3">
        <div className="text-center mb-5">
          <h1>
            <strong>What Our Charlotte Patients Say</strong>
          </h1>
          <h1>
            <strong>About IV Hydration at VYVE</strong>
          </h1>
        </div>
        {/* caraousl */}

        <Carousel indicators={true}
        infinite={true}
    >
      <Carousel.Item interval={2000}>
       <div className='d-flex'>
        <div class=" container mx-3">
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <p>
                  “Awesome customer service! Very friendly and cares about the
                  comfort of the patients. Dr. Haas is very detailed and
                  explains everything and ask patient
                </p>
              </div>
              <div class=" container mx-3 div-2">
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <p>
                  “They are great!! The nurses are so sweet and diligent. Dr.
                  Haas is amazing and really tries to get the best care for you
                  as an individual. They don’t
                </p>
              </div></div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='d-flex'>
        <div class=" container mx-3">
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  The facility is very clean and the overall design and ambience
                  of the space is very calming and peaceful.
                </p>
              </div>
              <div class=" container mx-3 div-2">
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  The facility is very clean and the overall design and ambience
                  of the space is very calming and peaceful.
                </p>
              </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='d-flex'>
        <div class=" container mx-3">
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  “I feel so fortunate to have discovered Dr. Haas and his
                  amazing team! I found them post-COVID after suffering from
                  severe fatigue and memory
                </p>
              </div>
              <div class=" container mx-3 div-2">
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>
                <span class="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  The facility is very clean and the overall design and ambience
                  of the space is very calming and peaceful.
                </p>
              </div>
        </div>
      </Carousel.Item>
    </Carousel>

        <button className="my-5">Join the VYVE family</button>
      </section>

      <div className="container faq testimonial-section d-flex flex-column justify-content-center align-items-center">
        <h1>
          <strong>Frequently Asked Questions</strong>
        </h1>
        <p>
          And because
          <strong>
            we want you to feel 100% confident in your investment,
          </strong>
        </p>

        <p>here are a few of the questions we commonly get asked:</p>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
            <span>How Long Does the Visit Take?</span>
            <i className="fa fa-plus"></i>
          </div>
          <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
            <span>Do You Accept Insurance?</span>
            <i className="fa fa-plus"></i>
          </div>
          <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
            <span>Who Oversees My IV Treatments?</span>
            <i className="fa fa-plus"></i>
          </div>
          <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
            <span>How Often Do I Need To Come To See Results?</span>
            <i className="fa fa-plus text-pink"></i>
          </div>
          <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
            <span>Do I Need Any Lab Tests to Get Started?</span>
            <i className="fa fa-plus text-pink"></i>
          </div>
        </div>
      </div>

      <div className="container consult testimonial-section d-flex  justify-content-center align-items-center">
        <div>
          <img
            className="consult-img"
            src=" https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/ac2cd3ce-770b-47a6-926c-6b96894ebe59.png"
            alt=""
          />
        </div>
        <div className=" spots3  d-flex flex-column   ps-5">
          <h1 className="my-3">
            <strong className="">
              SECURE your no-obligation consultation today!
            </strong>
          </h1>
          <p>Whenever you’re ready, join our tribe of wellness enthusiasts</p>
          <p>
            <strong>
              1st Infusion PLUS Custom IV Treatment Plan for JUST $97 today!
            </strong>
          </p>
          <button className="my-5">
            I’m Ready for My Custom IV Experience
          </button>
        </div>
      </div>

      <div className="container consult testimonial-section d-flex  justify-content-center align-items-center">
        <div className="container">
          <img src={image} alt="" />
          <div className="container address my-3">
            <p className="mb-0">VYVE Wellness</p>
            <p className="mb-0">441 N Wendover Rd.</p>
            <p className="mb-0">Charlotte, NC 28211</p>
            <p className="mb-0">Phone: 704-396-5901</p>
            <p className="mb-0">Hours: Mon-Wed 8am - 5pm, Thur 10am - 6pm</p>
          </div>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13042.607599008836!2d-80.8051468!3d35.1902277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854210e39d52189%3A0xb75a087b207983fa!2sVYVE%20Wellness!5e0!3m2!1sen!2sin!4v1659251398894!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Exeprence;
