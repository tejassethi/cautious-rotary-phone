import React from "react";
import Navbar from "./components/Navbar";

const service = () => {
  return (
    <>
      <Navbar active="service" />
      <div className="container mx-auto mt-5 mb-5 px-4">
        <div className="flex gap-2 ">
          <div className="bg-pink-500 text-white cursor-pointer rounded-lg rounded-b-none p-3 px-5 w-max">
            Master Eater Review
          </div>
          <div className="bg-gray-200 hover:bg-pink-500 cursor-pointer hover:text-white rounded-lg rounded-b-none p-3 px-5 w-max">
            Recipe Development
          </div>
          <div className="bg-gray-200 hover:bg-pink-500 cursor-pointer hover:text-white rounded-lg rounded-b-none p-3 px-5 w-max">
            Coaching
          </div>
          <div className="bg-gray-200 hover:bg-pink-500 cursor-pointer hover:text-white rounded-lg rounded-b-none p-3 px-5 w-max">
            Brand Content & Social Media Handling{" "}
          </div>
          <div className="bg-gray-200 hover:bg-pink-500 cursor-pointer hover:text-white rounded-lg rounded-b-none p-3 px-5 w-max">
            Project Consultancy
          </div>
        </div>
        <div className="bg-gray-200 shadow-xl min-h-screen w-full p-10">
          <h1> Reviews on master eater’s account Instagram story promotion</h1>{" "}
          <br />
          <ul>
            <li>
              Instagram story promotion (detailed review) with interactive
              polls, Q&A and quizzes! 10 pictures Instagram carousel (detailed
              review in English for the Thai Indian/ expats community) focusing
              on giving information about your restaurant/ ratings of each dish
              Instagram reel up between 60-90 seconds (video in English for the
              Thai Indian/ expats community) focusing on reviewing the dishes
              and taste of the food with detailed caption Tiktok video promotion
              (Thai video for Thai audiences) up to 90 seconds focusing on
              reviewing the dishes and the restaurant in general (exposure to
              30,000 Thai audience) Give away collaboration/ guarantee social
              media profile visits and followers Lifetime content on master
              eater’s platform Content given to the brand for their own
              marketing purposes
            </li>
            <li>
              Instagram story promotion (detailed review) with interactive
              polls, Q&A and quizzes! 10 pictures Instagram carousel (detailed
              review in English for the Thai Indian/ expats community) focusing
              on giving information about your restaurant/ ratings of each dish
              Instagram reel up between 60-90 seconds (video in English for the
              Thai Indian/ expats community) focusing on reviewing the dishes
              and taste of the food with detailed caption Tiktok video promotion
              (Thai video for Thai audiences) up to 90 seconds focusing on
              reviewing the dishes and the restaurant in general (exposure to
              30,000 Thai audience) Give away collaboration/ guarantee social
              media profile visits and followers Lifetime content on master
              eater’s platform Content given to the brand for their own
              marketing purposes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default service;
