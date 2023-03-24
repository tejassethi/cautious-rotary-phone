import { createClient } from "next-sanity";
import React, { useEffect, useState } from "react";
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
  const query = `*[_type == "recipe"]{
    name,
    categories[]->{name},
    instagram, 
    tiktok,
    recommended,
    cover{
      asset->{url}
    }
  }`;
  const catquery = `*[_type == "category"]`;
  const recipe = await client.fetch(query);
  const category = await client.fetch(catquery);
  return {
    props: {
      recipe,
      category,
    },
  };
};

export default function Recipe({ recipe, category }) {
  function toCapitalCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  const [recipee, setRecipe] = useState([]);
  const [categoryy, setCategoryy] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    setRecipe(recipe);
    setCategoryy(category);
  }, []);

  return (
    <>
      <Navbar active="recipe" />
      <div className="container mx-auto mt-2 mb-5 px-4">
        <div className="flex place-items-center ">
          <a
            onClick={() => {
              setSelected("all");
              setRecipe(recipe);
            }}
            className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
              selected != "all"
                ? "bg-white text-gray-800 hover:bg-pink-500"
                : "bg-pink-500 text-white hover:bg-pink-600"
            } hover:text-white whitespace-nowrap`}
          >
            All
          </a>
          <div className="overflow-x-scroll">
            <div className="flex py-4 ">
              {categoryy.map((i, key) => (
                <a
                  key={key}
                  onClick={() => {
                    setSelected(i.name);
                    setRecipe(
                      recipe.filter((obj) => {
                        return obj.categories.some(
                          (category) => category && category.name === i.name
                        );
                      })
                    );
                  }}
                  className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                    selected != i.name
                      ? "bg-white text-gray-800 hover:bg-pink-500"
                      : "bg-pink-500 text-white hover:bg-pink-600"
                  } hover:text-white whitespace-nowrap`}
                >
                  {i.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4 text-lg">
          {selected != "all" && (
            <p className=" text-black">
              Filter:{" "}
              <span className="text-pink-500">{toCapitalCase(selected)}</span>
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {recipee.map((i, key) => (
            <Card key={key} value={i} />
          ))}
        </div>
      </div>
    </>
  );
}
