import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

import {
  faChalkboardTeacher,
  faDiagramProject,
  faPhotoFilm,
  faReceipt,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

const Service = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendform = () => {
    const msg = {
      fullname: fullname,
      email: email,
      subject: subject,
      message: message,
    };
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(msg),
    // }).then((res) => {
    //   console.log("Response received");
    //   if (res.status === 200) {
    //     console.log("Response succeeded!");
    //     setSubmitted(true);
    //     setFullname("");
    //     setSubject("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // });
  };

  return (
    <>
      <Navbar active="service" />
      <div className="container flex mx-auto mb-5 px-4 mt-10">
        <div className="flex-col flex w-full ">
          <div className="flex flex-col lg:flex-row w-full place-items-center justify-center gap-5">
            <div className="rounded-3xl bg-pink-500 text-white h-14 w-14 text-3xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faPhotoFilm} />
            </div>
            <h1 className=" text-center text-pink-500 text-4xl font-kalam">
              Master Eater Reviews
            </h1>
          </div>
          <hr className=" border-2 m-4" />
          <div className=" rounded-xl p-5">
            <div className="px-10">
              <ol className="list-decimal text-xl space-y-3">
                <li>
                  Instagram story promotion (detailed review) with interactive
                  polls, Q&A and quizzes!
                </li>
                <li>
                  10 pictures Instagram carousel (detailed review in English for
                  the Thai Indian/ expats community) focusing on giving
                  information about your restaurant/ ratings of each dish
                </li>
                <li>
                  {" "}
                  Instagram reel up between 60-90 seconds (video in English for
                  the Thai Indian/ expats community) focusing on reviewing the
                  dishes and taste of the food with detailed caption
                </li>
                <li>
                  {" "}
                  Tiktok video promotion (Thai video for Thai audiences) up to
                  90 seconds focusing on reviewing the dishes and the restaurant
                  in general (exposure to 30,000 Thai audience)
                </li>
                <li>
                  {" "}
                  Give away collaboration/ guarantee social media profile visits
                  and followers{" "}
                </li>{" "}
                <li> Lifetime content on master eater’s platform </li>{" "}
                <li>
                  {" "}
                  Content given to the brand for their own marketing purposes
                </li>
              </ol>
              <a
                target="_blank"
                href="https://www.tiktok.com/@master.eater/video/7176545635259436314?is_from_webapp=1&sender_device=pc&web_id=7209143035313063426"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="bg-gray-200 hover:bg-gray-300 text-pink-500 hover:text-pink-500 p-2 text-xl mt-5 mr-3 rounded-full"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/CmGfg27r8vD/?utm_source=ig_web_copy_link"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-gray-200 hover:bg-gray-300 text-pink-500 hover:text-pink-500 p-2 text-xl mt-5 mr-3 rounded-full"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/p/CmGgY3xPEf6/?utm_source=ig_web_copy_link"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-gray-200 hover:bg-gray-300 text-pink-500 hover:text-pink-500 p-2 text-xl mt-5 mr-3 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mb-5 px-4 mt-10">
        <div className="flex-col flex w-full">
          <div className="flex flex-col lg:flex-row w-full place-items-center justify-center gap-5">
            <div className="rounded-3xl bg-pink-500 text-white h-14 w-14 text-3xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faReceipt} />
            </div>
            <h1 className=" text-center text-pink-500 text-4xl font-kalam">
              Recipe Development
            </h1>
          </div>
          <hr className=" border-2 m-4" />
          <div className=" rounded-xl p-5">
            <div className="px-10">
              <ol className="list-decimal text-xl space-y-3">
                <li>
                  {" "}
                  Brands can send the product over (such as meat, milk, nut or
                  any ingredients) and we will work on creating a recipe with
                  the ingredients
                </li>
                <li>Recipe will be featured on master eater’s account</li>{" "}
                <ol className=" list-disc list-inside space-y-3">
                  <li>
                    Instagram story promotion (detailed review) with interactive
                    polls, Q&A and quizzes!{" "}
                  </li>
                  <li>
                    {" "}
                    10 pictures Instagram carousel (detailed review in English
                    for the Thai Indian/ expats community) focusing on giving
                    information about your restaurant/ ratings of each dish
                  </li>
                  <li>
                    Instagram reel up between 60-90 seconds (video in English
                    for the Thai Indian/ expats community) focusing on reviewing
                    the dishes and taste of the food with detailed caption{" "}
                  </li>
                  <li>
                    {" "}
                    Tiktok video promotion (Thai video for Thai audiences) up to
                    90 seconds focusing on reviewing the dishes and the
                    restaurant in general (exposure to 30,000 Thai audience)
                  </li>
                </ol>
                <li>
                  Content given to the brand for their own marketing purposes
                </li>
              </ol>
              <a
                target="_blank"
                href="https://www.tiktok.com/@master.eater/video/7123435487737416987?is_from_webapp=1&sender_device=pc&web_id=7209143035313063426"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="bg-gray-200 hover:bg-gray-300 text-pink-500 hover:text-pink-500 p-2 text-xl mt-5 mr-3 rounded-full"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/reel/CR86KZHnZv7/?utm_source=ig_web_copy_link"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-gray-200 hover:bg-gray-300 text-pink-500 hover:text-pink-500 p-2 text-xl mt-5 mr-3 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mb-5 px-4 mt-10">
        <div className="flex-col flex w-full">
          <div className="flex flex-col lg:flex-row w-full place-items-center justify-center gap-5">
            <div className="rounded-3xl bg-pink-500 text-white h-14 w-14 text-3xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <h1 className=" text-centertext-center text-pink-500 text-4xl font-kalam">
              Coaching
            </h1>
          </div>
          <hr className=" border-2 m-4" />
          <div className=" rounded-xl p-5">
            <div className="px-10">
              <ol className="list-disc text-xl space-y-3">
                <li>
                  {" "}
                  Basics Understanding the basics of tik tok and instagram
                  (posting, scheduling, features etc)
                </li>
                <li> SEO - search engine optimization </li>
                <li> Ads - Google ads, Social media ads etc</li>
                <li> Photos and videos - iphone photography and editing</li>
                <li>
                  {" "}
                  Algorithm - Algorithm, analytics caption, live, scheduling
                  post, engagements and hashtag & resources
                </li>
                <li>
                  {" "}
                  Content creation - 90 days schedule and templates for posters
                </li>
                <li>
                  {" "}
                  Affiliate marketing Expand - Tapping into a new market and
                  understanding the importance of influencers
                </li>
                <li>
                  {" "}
                  Other industries - How to shape food industry content to other
                  markets (personalized)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mb-5 px-4 mt-10">
        <div className="flex-col flex w-full">
          <div className="flex flex-col lg:flex-row w-full place-items-center justify-center gap-5">
            <div className="rounded-3xl bg-pink-500 text-white h-14 w-14 text-3xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faShareFromSquare} />
            </div>
            <h1 className=" text-center text-pink-500 text-4xl font-kalam">
              Brand Content & Social Media Handling
            </h1>
          </div>
          <hr className=" border-2 m-4" />
          <div className=" rounded-xl p-5">
            <div className="px-10">
              <ol className="list-decimal text-xl space-y-3">
                <li>
                  Create contents for brand accounts such as reels, TikTok
                  videos or photos for the menu
                </li>
                <li>
                  Brand social media handle (Your social media account will be
                  created and handled by our team!)
                </li>
                <ol className="list-disc list-inside">
                  <li> 2 platforms </li>
                  <li> Page/channel evaluation</li>
                  <li>
                    Content creation for any industry (stories, posters, photos,
                    videos, captions etc)
                  </li>
                  <li>90 days</li>
                  <li>Schedule posts</li>
                  <li>Reporting</li>
                  <li>Action plan</li>
                  <li>Engagement with followers</li>
                  <li>Personalized plan and more! </li>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mb-5 px-4 mt-10">
        <div className="flex-col flex w-full">
          <div className="flex flex-col lg:flex-row w-full place-items-center justify-center gap-5">
            <div className="rounded-3xl bg-pink-500 text-white h-14 w-14 text-3xl flex justify-center place-items-center">
              <FontAwesomeIcon icon={faDiagramProject} />
            </div>
            <h1 className=" text-center text-pink-500 text-4xl font-kalam">
              Project Consultancy
            </h1>
          </div>
          <hr className=" border-2 m-4" />
          <div className=" rounded-xl p-5">
            <div className="px-10">
              <ol className="list-decimal text-xl space-y-3">
                <li>
                  We will get familiar with your business environment and
                  stakeholders in order to lead the project efficiently
                </li>
                <li>We focus on assist brands in:</li>
                <ol className="list-inside list-disc">
                  <li>
                    Hosting events, managing budgets, monitoring the project
                    management team, coordination with key stakeholders,
                    identifying project risks, and developing creative solutions
                  </li>
                  <li> Menu prices consultancy </li>
                  <li>Promotional ideas </li>
                  <li>Taste test</li>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mb-5 px-4 mt-10">
        <section className=" w-full">
          <hr className="border-2 " />
          <div className="py-8 lg:py-16 px-4 mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-pink-500 ">
              Contact Me
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
              Are you interested in any services or do you want to get in touch
              with me?
            </p>

            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="username@domain.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <a
                onClick={() => {
                  sendform();
                }}
                type="submit"
                className="py-3 px-5 text-sm font-medium bg-pink-500 text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </a>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
