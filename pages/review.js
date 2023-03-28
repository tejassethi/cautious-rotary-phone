import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faDollar, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const query = `*[_type == "review"]{
    name,
    cuisine->{name},
    place->{area, city},
    instagram, 
    tiktok,
    price,
    recommended,
    cover{
      asset->{url}
    }
  } | order(_createdAt desc)`;
  const cuisinequery = `*[_type == "Cuisine"]{name}`;
  const placequery = `*[_type == "place"]{area, city}`;
  const review = await client.fetch(query);
  const cuisine = await client.fetch(cuisinequery);
  const place = await client.fetch(placequery);
  return {
    props: {
      review,
      cuisine,
      place,
    },
  };
};

export default function Review({ review, cuisine, place }) {
  function toCapitalCase(str) {
    if (typeof str == "string") {
      return str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    } else {
      console.log(str);
      return "";
    }
  }
  const area = place.map((item) => item.area);
  const city = place.map((item) => item.city);
  const [revieww, setRevieww] = useState(review);
  const [selectedPlace, setSelectedPlace] = useState("allPlace");
  const [selectedCuisine, setSelectedCuisine] = useState("allCuisine");
  const [selectedPrice, setSelectedPrice] = useState("allPrice");

  return (
    <>
      <Navbar active="review" />
      <div className="container mx-auto mt-2 mb-5 px-4">
        <div className="flex place-items-center">
          <a
            onClick={() => {
              setSelectedPlace("allPlace");
              setSelectedCuisine("allCuisine");
              setSelectedPrice("allPrice");
              setRevieww(review);
            }}
            className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
              selectedPlace != "allPlace"
                ? "bg-white text-gray-800 hover:bg-pink-500"
                : "bg-pink-500 text-white hover:bg-pink-600"
            } hover:text-white whitespace-nowrap`}
          >
            All Places
          </a>
          <div className="overflow-x-scroll">
            <div className="flex py-4">
              {[...new Set(city)].map((i, key) => (
                <a
                  key={key}
                  onClick={() => {
                    setSelectedPlace(i);
                    setSelectedCuisine("allCuisine");
                    setSelectedPrice("allPrice");
                    setRevieww(
                      review.filter(
                        (item) => item.place && item.place.city == i
                      )
                    );
                  }}
                  className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                    selectedPlace != i
                      ? "bg-white text-gray-800 hover:bg-pink-500"
                      : "bg-pink-500 text-white hover:bg-pink-600"
                  } hover:text-white whitespace-nowrap`}
                >
                  {toCapitalCase(i)}
                </a>
              ))}
              {area
                .filter(
                  (item, index) =>
                    area.indexOf(item) === index && !city.includes(item)
                )
                .map((i, key) => (
                  <a
                    key={key}
                    onClick={() => {
                      setSelectedPlace(i);
                      setSelectedCuisine("allCuisine");
                      setSelectedPrice("allPrice");
                      setRevieww(
                        review.filter(
                          (item) => item.place && item.place.area == i
                        )
                      );
                    }}
                    className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                      selectedPlace != i
                        ? "bg-white text-gray-800 hover:bg-pink-500"
                        : "bg-pink-500 text-white hover:bg-pink-600"
                    } hover:text-white whitespace-nowrap`}
                  >
                    {toCapitalCase(i)}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="flex place-items-center">
          <a
            onClick={() => {
              setSelectedCuisine("allCuisine");
              setSelectedPrice("allPrice");
              selectedPlace != "allPlace"
                ? setRevieww(
                    review.filter(
                      (item) =>
                        item.place &&
                        (item.place.area == selectedPlace ||
                          item.place.city == selectedPlace)
                    )
                  )
                : setRevieww(review);
            }}
            className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
              selectedCuisine != "allCuisine"
                ? "bg-white text-gray-800 hover:bg-pink-500"
                : "bg-pink-500 text-white hover:bg-pink-600"
            } hover:text-white whitespace-nowrap`}
          >
            All Cuisines
          </a>
          <div className="overflow-x-scroll">
            <div className="flex py-4">
              {[...new Set(cuisine)].map((i, key) => (
                <a
                  key={key}
                  onClick={() => {
                    setSelectedCuisine(i.name);
                    setSelectedPrice("allPrice");
                    selectedPlace != "allPlace"
                      ? setRevieww(
                          review.filter(
                            (item) =>
                              item.cuisine &&
                              item.cuisine.name === i.name &&
                              item.place &&
                              (item.place.area == selectedPlace ||
                                item.place.city == selectedPlace)
                          )
                        )
                      : setRevieww(
                          review.filter(
                            (item) =>
                              item.cuisine && item.cuisine.name === i.name
                          )
                        );
                  }}
                  className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                    selectedCuisine != i.name
                      ? "bg-white text-gray-800 hover:bg-pink-500"
                      : "bg-pink-500 text-white hover:bg-pink-600"
                  } hover:text-white whitespace-nowrap`}
                >
                  {toCapitalCase(i.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex place-items-center mb-5">
          <a
            onClick={() => {
              setSelectedPrice("allPrice");
              if (
                selectedPlace != "allPlace" &&
                selectedCuisine != "allCuisine"
              ) {
                setRevieww(
                  review.filter(
                    (item) =>
                      item.cuisine &&
                      item.cuisine.name === selectedCuisine &&
                      item.place &&
                      (item.place.area == selectedPlace ||
                        item.place.city == selectedPlace)
                  )
                );
              } else if (
                selectedPlace == "allPlace" &&
                selectedCuisine != "allCuisine"
              ) {
                setRevieww(
                  review.filter(
                    (item) =>
                      item.cuisine && item.cuisine.name === selectedCuisine
                  )
                );
              } else if (
                selectedPlace != "allPlace" &&
                selectedCuisine == "allCuisine"
              ) {
                setRevieww(
                  review.filter(
                    (item) =>
                      item.place &&
                      (item.place.area == selectedPlace ||
                        item.place.city == selectedPlace)
                  )
                );
              } else {
                setRevieww(review);
              }
            }}
            className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
              selectedPrice != "allPrice"
                ? "bg-white text-gray-800 hover:bg-pink-500"
                : "bg-pink-500 text-white hover:bg-pink-600"
            } hover:text-white whitespace-nowrap`}
          >
            All Prices
          </a>
          <div className="overflow-x-scroll">
            <div className="flex py-4">
              <div
                onClick={() => {
                  setSelectedPrice(1);
                  if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 1
                      )
                    );
                  } else if (
                    selectedPlace == "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.price &&
                          item.price == 1
                      )
                    );
                  } else if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine == "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 1
                      )
                    );
                  } else {
                    setRevieww(
                      review.filter((item) => item.price && item.price === 1)
                    );
                  }
                }}
                className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                  selectedPrice != 1
                    ? "bg-white text-gray-800 hover:bg-pink-500"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                } hover:text-white whitespace-nowrap`}
              >
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div
                onClick={() => {
                  setSelectedPrice(2);
                  if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 2
                      )
                    );
                  } else if (
                    selectedPlace == "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.price &&
                          item.price == 2
                      )
                    );
                  } else if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine == "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 2
                      )
                    );
                  } else {
                    setRevieww(
                      review.filter((item) => item.price && item.price === 2)
                    );
                  }
                }}
                className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                  selectedPrice != 2
                    ? "bg-white text-gray-800 hover:bg-pink-500"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                } hover:text-white whitespace-nowrap`}
              >
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div
                onClick={() => {
                  setSelectedPrice(3);
                  if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 3
                      )
                    );
                  } else if (
                    selectedPlace == "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.price &&
                          item.price == 3
                      )
                    );
                  } else if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine == "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 3
                      )
                    );
                  } else {
                    setRevieww(
                      review.filter((item) => item.price && item.price === 3)
                    );
                  }
                }}
                className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                  selectedPrice != 3
                    ? "bg-white text-gray-800 hover:bg-pink-500"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                } hover:text-white whitespace-nowrap`}
              >
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div
                onClick={() => {
                  setSelectedPrice(4);
                  if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 4
                      )
                    );
                  } else if (
                    selectedPlace == "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.price &&
                          item.price == 4
                      )
                    );
                  } else if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine == "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 4
                      )
                    );
                  } else {
                    setRevieww(
                      review.filter((item) => item.price && item.price === 4)
                    );
                  }
                }}
                className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                  selectedPrice != 4
                    ? "bg-white text-gray-800 hover:bg-pink-500"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                } hover:text-white whitespace-nowrap`}
              >
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div
                onClick={() => {
                  setSelectedPrice(5);
                  if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 5
                      )
                    );
                  } else if (
                    selectedPlace == "allPlace" &&
                    selectedCuisine != "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.cuisine &&
                          item.cuisine.name === selectedCuisine &&
                          item.price &&
                          item.price == 5
                      )
                    );
                  } else if (
                    selectedPlace != "allPlace" &&
                    selectedCuisine == "allCuisine"
                  ) {
                    setRevieww(
                      review.filter(
                        (item) =>
                          item.place &&
                          (item.place.area == selectedPlace ||
                            item.place.city == selectedPlace) &&
                          item.price &&
                          item.price == 5
                      )
                    );
                  } else {
                    setRevieww(
                      review.filter((item) => item.price && item.price === 5)
                    );
                  }
                }}
                className={`mr-4 cursor-pointer px-2 py-1 rounded-lg text-sm font-medium ${
                  selectedPrice != 5
                    ? "bg-white text-gray-800 hover:bg-pink-500"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                } hover:text-white whitespace-nowrap`}
              >
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
                <FontAwesomeIcon icon={faDollar} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 text-lg">
          <p className=" text-pink-500">
            {(selectedPlace != "allPlace" ||
              selectedCuisine != "allCuisine" ||
              selectedPrice != "allPrice") && (
              <span className="text-black">Filter: </span>
            )}
            {selectedPlace != "allPlace" && toCapitalCase(selectedPlace)}
            {selectedPlace != "allPlace" &&
              selectedCuisine != "allCuisine" &&
              ", "}
            {selectedCuisine != "allCuisine" && toCapitalCase(selectedCuisine)}
            {(selectedPlace != "allPlace" || selectedCuisine != "allCuisine") &&
              selectedPrice != "allPrice" &&
              ", "}
            {selectedPrice != "allPrice" && "$".repeat(selectedPrice)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {revieww.map((i, key) => (
            <Card key={key} value={i} />
          ))}
        </div>
      </div>
    </>
  );
}
