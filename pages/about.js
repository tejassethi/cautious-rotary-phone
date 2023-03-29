import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar";

const about = () => {
  const didi = require("./assets/didi.jpeg");

  return (
    <div className="bg-[#F3F4F2] min-h-screen ">
      <Navbar active="about" />
      <div className="grid grid-cols-12 w-full mt-5 xl:mt-10 p-5">
        <div className="col-span-12 xl:col-span-6 flex  flex-col justify-start place-items-center pb-5 xl:pb-0">
          <div className="bg-cover rounded-full bg-center xl:w-96 w-80 h-80 xl:h-96 overflow-hidden border-8 border-pink-500">
            <Image
              alt="no picture"
              src={didi}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="container pt-10">
            <div className="xl:hidden">
              <h1 className="text-4xl md:text-5xl pb-5 text-pink-500 font-roboto font-extrabold">
                Hi everyone
                <span className="text-gray-500 whitespace-nowrap"> !</span>
              </h1>
              <h2 className="xl:pr-10 mb-5 text-xl font-kalam">
                {`I’m Keerat Sethi also known as Master Eater to many of
            you. This platform is created to help most of you learn how to cook
            delicious dishes in an effortless way or find places to visit that
            match your needs within seconds! I create recipes, review
            restaurants, hotels, create brand contents, coach on digital
            marketing, handle social media accounts for brands, organize food
            events, provide consultancy to start up companies, create travel
            content and much more! I showcase my raw lifestyle with no
            unrealistic (something)! I hope you can benefit from my platform. So
            let’s get to know my experiences, services, inspiration and future
            plans a little more.`}
              </h2>
            </div>
            <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    Started an Instagram page to share recipes.{" "}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    March 2020
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`Started working with brands (creating content for brands: film them cooking, presenting their food etc for them to use on their social media)`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    November 2020
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {` I built a platform on TikTok to review restaurants in Thailand`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    March 2021
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I hosted my first online cooking session I hit 2 million views and 20,000 followers`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    June 2021{" "}
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`Business turning point`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    November 2021
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I started restaurant consultancy: menu, prices, promotions`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    January 2022
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I started creating content for brands: film them cooking, presenting their food etc for them to use on their social media `}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    February 2022
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I took part in a food competition and got featured on a magazine`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    April 2022
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`My first collaboration with a Michelin chef//fine dining restaurant `}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    July 2022
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I got invited for a media’s test vacation review at Doubletree by Hilton (first of many hotels) and exclusive lunches/dinners`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    October 2022
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I started coaching startup restaurants on how to use social media to their advance`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    November 2022
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I started expanding my content to food and travels `}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    January 2023
                  </p>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-pink-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-gray-500 col-start-3 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    {`I launched a website`}
                  </h3>
                  <p className="leading-tight text-justify w-full font-kalam">
                    March 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex place-items-end justify-end">
              <Link
                href="/service"
                className="text-right mt-5 xl:mr-10 font-roboto text-xl font-bold  whitespace-nowrap text-pink-500"
              >
                My Services →
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 flex flex-col justify-start">
          <div className="hidden xl:block">
            <h1 className="text-2xl md:text-5xl pb-5 text-pink-500 font-roboto font-extrabold">
              Hi everyone
              <span className="text-gray-500 whitespace-nowrap"> !</span>
            </h1>
            <h2 className="xl:pr-10 text-xl font-kalam">
              {`I’m Keerat Sethi also known as Master Eater to many of
            you. This platform is created to help most of you learn how to cook
            delicious dishes in an effortless way or find places to visit that
            match your needs within seconds! I create recipes, review
            restaurants, hotels, create brand contents, coach on digital
            marketing, handle social media accounts for brands, organize food
            events, provide consultancy to start up companies, create travel
            content and much more! I showcase my raw lifestyle with no
            unrealistic (something)! I hope you can benefit from my platform. So
            let’s get to know my experiences, services, inspiration and future
            plans a little more.`}
            </h2>
          </div>
          <h1 className="text-xl md:text-3xl py-5 text-pink-500 font-roboto font-bold">
            Inspiration behind cooking/food{" "}
          </h1>

          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`I grew up in a multicultural environment and didn’t specifically
            grow up with just one cuisine. If I had Thai food for lunch then my
            dinner would usually be Indian or Italian! We went for family
            dinners every weekend and we would just try different cuisines. Food
            was not just about eating anymore it was about connecting with one
            another. We would talk about the ingredients used, culture from
            where the food originated or we would just sit, eat and smile! It
            definitely brought happiness to our family.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`I don’t remember the first time I started cooking. From what I
            remember, it naturally came to me. I used to help my mom stir
            chicken curry when I was 5. I then went to boarding school when I
            was 8 and what I really liked doing was making instant noodles and
            birthday cakes with bread slices, Nutella, milk and coco crunch. It
            was so basic but I was happy doing it.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam">
            {`It was never hard for me to learn how to cook because my entire
            family cooks. Going to the kitchen was very normal in our household
            but despite my love for food, I was a very picky eater. I remember
            when my dad use to make me try new food every single day. From
            eggplant to durian, he made sure I tried everything. One day, I was
            16 and all of a sudden I knew how to eat everything my 10 year old
            self didn’t.`}
          </h2>
          <h1 className="text-xl md:text-3xl py-5 text-pink-500 font-roboto font-bold">
            Inspiration behind master eater and where do you get recipe ideas
            from?
          </h1>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {` I have a really sensitive stomach and it’s been this case ever since
            I came back from boarding school. It never disrupted my life until
            2018 when I was really stressed with school. Every time I was
            stressed my stomach would really hurt. Late 2018 I started having a
            lot of clean food (if I eat outside) but mostly home food. This gave
            me more time to explore and I was dedicated to creating recipes that
            I enjoy so that I wouldn’t miss unhealthy food.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`In 2019 I left Thailand and went to Malaysia for my further
            education. I continued cooking and it became a hobby. My friends and
            I used to meet up just to cook and spend time together. We would
            also invite a lot of people over and just cook for them. When my
            friends got sick I would make khichdi for them as a gesture to
            express my love and care. I don’t think my food is near perfect but
            I just really enjoy making it.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {` I was known as “the girl whose phone ate the food before her '' and
            I didn’t mind being called that. I always enjoyed food photography
            and capturing the beauty of food everywhere I go.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`I watch A LOT of YouTube videos and I get pleasure watching content
            creators that cook or review food. I used to sit for hours just
            watching that (definitely in the genes because my parents love doing
            that too). I wanted to be a YouTuber and I kept thinking if others
            can do it then why can’t I do it? I started thinking about it for
            fun and approached my friends about it. One of my friends really
            pushed me to do it and suggested the name “master eater”. I was
            skeptical about it at first but then here I am! I started this
            account sharing recipes and my experience! I’m still doing that but
            I’m also expanding and reviewing food because I really enjoy the
            process of eating, shooting, editing and food photography as a
            whole.`}
          </h2>

          <h1 className="text-xl md:text-3xl py-5 text-pink-500 font-roboto font-bold">
            Plans for the future?
          </h1>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`After earning over 30k followers and over 2 millions views recently
            on TikTok, I started collaborating with small businesses to
            promote/review their food on my account. Followed my creating brand
            contents, coaching, hosting cooking sessions and much more. Now I
            have successfully established my own small business and I definitely
            have plans to grow it even more.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`Currently, my aim is to focus on my services and making sure I
            deliver it in the best way possible. I would love to give my 100%
            and make sure others achieve their goals as well. However, I am very
            open to the idea of grasping something new if it comes my way.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam">
            {` I am also thinking of expanding my social media to Youtube,
            Pinterest and Facebook. Cooking class and cookbook is definitely
            something I am working on so if you’ve made it this far, you know
            what’s next. Thank you to all my followers, family and friends for
            giving me this opportunity because I wouldn’t have come this far
            without everyone’s support and faith in me.`}
          </h2>
          <h1 className="text-xl md:text-3xl py-5 text-pink-500 font-roboto font-bold">
            Fun Facts:
          </h1>
          <h2 className="xl:pr-10 text-xl font-kalam">{`We once used sugar instead of salt in our food for a whole week. This was when I recently started experimenting with cooking advanced dishes. One of my housemates mistakenly swapped the sugar and salt boxes and now I'm way past silly mistakes like this! XD `}</h2>
          <h1 className="text-xl md:text-3xl py-5 text-pink-500 font-roboto font-bold">
            Another fun fact:
          </h1>
          <h2 className="xl:pr-10 text-xl font-kalam">{`Aloo Tikki burger holds a lot of significance in my life because it was the day I realized my food actually tastes really good. I was sitting with my friend and enjoying these muffins. I got up and walked away for a few seconds to make a call and when I came back to the dining table the food vanished from my plate. My friend then said, "OMG I didn't realize I had it from your plate ... I was simply picking up the muffin and enjoying it without looking at whose plate it was on''. And just like that I had to make a new meal for myself with a huge smile on my face realizing how much others enjoyed my food. It was so delicious i couldn't help myself`}</h2>
          <h1 className="text-xl md:text-3xl py-5 text-pink-500 font-roboto font-bold">
            More about me:
          </h1>
          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`I am also a bilingual (Thai/ English) Early Interventionist/
            Behavioral therapist. I received my bachelor's degree in Arts and
            Social Sciences majoring in (Psychology and Communication) from
            Monash university. I am certified in the Hanen Teacher Talk Program
            (Encouraging Language Development in Early Childhood Settings). I
            have also received the Picture Exchange Communication System (PECS)
            training and the behavior therapy training from Little Sprouts
            Children's Centre.`}
          </h2>

          <h2 className="xl:pr-10 text-xl font-kalam pb-2">
            {`My experiences include working in international schools, private
            clinical setting and volunteering with individuals from the age of 2
            to 12 in Thailand. I have also worked/ works with individuals who
            have Selective Mutism, Autism, ADHD, Language Delay, Global
            Developmental Delay, and in the areas of Motor Development,
            Communication Skills, Social Skills, Sensory Processing, Self Help
            Skills and Behavior.`}
          </h2>
          <h2 className="xl:pr-10 text-xl font-kalam">
            {`My work includes working under the supervision of the clinical
            psychologist on providing behavioral therapy and drafting
            individualized programs that address each child’s specific needs
            which are implemented during my sessions. I also work closely with
            the Occupational and Speech therapists.`}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default about;
