import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const client = createClient({
  projectId: process.env.PROJECT_ID,
  token: process.env.PROJECT_TOKEN,
  apiVersion: "v2021-10-21",
  dataset: "production",
  useCdn: true,
});

export const getServerSideProps = async () => {
  const query = `*[_type == "recipe" && pinned == true]{
    name,
    instagram, 
    tiktok,
    recommended,
    cover{
      asset->{url}
    }
  } | order(_createdAt desc)[0..2]`;
  const query2 = `*[_type == "review" && pinned == true]{
    name,
    instagram, 
    tiktok,
    recommended,
    cover{
      asset->{url}
    }
  } | order(_createdAt desc)[0..2]`;
  const recipe = await client.fetch(query);
  const review = await client.fetch(query2);
  return {
    props: {
      recipe,
      review,
    },
  };
};

const index = ({ recipe, review }) => {
  const mypic = require("./assets/pp.jpeg");
  const didi = require("./assets/didi.jpeg");
  const mainpic = require("./assets/image1.jpeg");
  const mainpic2 = require("./assets/image2.jpeg");

  return (
    <div>
      <Navbar active="home" />
      <div className="bg-[#FDF3F8] min-h-screen">
        <div className="container px-5 md:px-0 mx-auto grid grid-cols-12 pt-10 md:pt-32 2xl:pt-10 pb-10">
          <div className="w-full col-span-12 2xl:col-span-6 flex justify-center place-items-start 2xl:place-items-center">
            <div className="flex flex-col justify-center place-items-start max-w-[640px]">
              <h1 className="text-4xl md:text-7xl pb-10 text-gray-700 font-roboto font-extrabold">
                Unleash your <br /> inner{" "}
                <span className="text-pink-500 whitespace-nowrap">
                  {" "}
                  Master Eater
                </span>
              </h1>

              <p className="text-xl font-kalam">
                {`Welcome to Master Eater, the home of culinary inspiration and
                gastronomic adventures. Join me on a journey around the world,
                exploring the most delectable dishes and discovering hidden gems
                in the restaurant scene. From easy-to-follow recipes to
                restaurant reviews, you'll find everything you need to become a
                Master Eater. Let's eat!`}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 col-span-12 pt-10 2xl:pt-0 2xl:col-span-6 justify-center place-items-center ">
            <Image
              src={mypic}
              width={200}
              height={200}
              alt="Profile Picture"
              className="rounded-full w-[100px] h-[200px] md:w-[220px] md:h-[440px] xl:w-[250px] xl:h-[500px]  object-cover "
            />
            <Image
              src={mainpic}
              width={300}
              height={300}
              alt="Profile Picture"
              className="rounded-full w-[100px] h-[300px] md:w-[220px] md:h-[640px] xl:w-[250px] xl:h-[700px] object-cover"
            />
            <Image
              src={mainpic2}
              width={200}
              height={200}
              alt="Profile Picture"
              className="rounded-full w-[100px] h-[200px] md:w-[220px] md:h-[440px] xl:w-[250px] xl:h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="xl:pl-16 p-5">
            <div className="grid grid-cols-12 pt-4">
              <div className="col-span-12 xl:col-span-8 ">
                <div className="mb-5">
                  <h1 className="text-3xl text-center xl:text-left text-gray-600 font-roboto font-extrabold">
                    Trending Recipes
                  </h1>
                  <h3 className="text-xl font-kalam text-center xl:text-left">
                    Join the{" "}
                    <span className="text-pink-600 "> foodie movement</span>{" "}
                    with my collection of trending recipes.
                  </h3>
                </div>
                <div className="flex flex-col flex-wrap md:flex-row align-items-center justify-center xl:justify-start gap-4">
                  {recipe.map((i, key) => (
                    <Card key={key} value={i} />
                  ))}
                </div>
                <div className="w-full flex justify-center place-content-center xl:justify-start xl:place-items-start mt-3">
                  <Link
                    href="/recipe"
                    className="text-center xl:text-left font-roboto text-xl font-bold  whitespace-nowrap text-pink-500"
                  >
                    More Recipes →
                  </Link>
                </div>
                <hr className="border-2 border-gray-500 my-5 w-full xl:hidden" />
                <div className="mb-5 xl:mt-5">
                  <h1 className="text-3xl text-center xl:text-left text-gray-600 font-roboto font-extrabold">
                    Trending Reviews
                  </h1>
                  <h3 className="text-xl font-kalam text-center xl:text-left">
                    From Michelin stars to{" "}
                    <span className="text-pink-500"> hidden gems</span>, my
                    trending restaurant reviews have got you covered.
                  </h3>
                </div>
                <div className="flex flex-col flex-wrap md:flex-row align-items-center justify-center xl:justify-start gap-4">
                  {review.map((i, key) => (
                    <Card key={key} value={i} />
                  ))}
                </div>
                <div className="w-full flex justify-center place-content-center xl:justify-start xl:place-items-start mt-3">
                  <Link
                    href="/review"
                    className="text-center xl:text-left font-roboto text-xl font-bold  whitespace-nowrap text-pink-500"
                  >
                    More Reviews →
                  </Link>
                </div>
              </div>

              <div className="col-span-12 m-2 xl:col-span-4 justify-start flex flex-col place-items-center xl:mt-10">
                <hr className="border-2 border-gray-500 mb-10 mt-5 w-full xl:hidden" />
                <div className="bg-cover rounded-full bg-center w-72 h-72 overflow-hidden">
                  <Image
                    alt="no picture"
                    src={didi}
                    width={288}
                    height={288}
                    className="rounded-lg"
                  />
                </div>
                <h1 className="text-3xl pt-3 text-center xl:text-left text-gray-600 font-roboto font-extrabold">
                  <span className="text-pink-500"> Keerat</span> Sethi
                </h1>
                <h3 className="text-xl font-kalam text-center pt-5">
                  {`Hi there! I'm a food blogger with a passion for all things
                  culinary. I'm always on the lookout for new and exciting
                  recipes to try, from classic dishes to fusion cuisine. Whether
                  it's a savory meal or a sweet treat, I love to experiment with
                  flavors and techniques to create delicious dishes that are
                  both tasty and visually appealing. Join me on my culinary
                  journey as I explore the world of food and share my favorite
                  recipes and tips with you!`}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
