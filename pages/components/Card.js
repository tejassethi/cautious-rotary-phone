import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Card = ({ value }) => {
  const mypic = require("../assets/logo.png");

  return (
    <div className="flex flex-col justify-start place-items-center ">
      <div className="relative h-72 shadow-lg">
        {value?.recommended == true ? (
          <div className="absolute top-0 right-0 p-4">
            <div>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="bg-gray-200 text-gray-600  p-2 text-xl rounded-full"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="absolute bottom-0 right-0 p-4">
          <div>
            {Number.isInteger(value?.price) && (
              <p className="bg-gray-200  text-gray-600 p-[7px] py-1.5 m-1 text-base rounded-full">
                {"$".repeat(value?.price)}
              </p>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 p-4">
          <div>
            {value?.instagram != null ? (
              <a target="_blank" href={value?.instagram}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-pink-500 p-2 mr-2 text-xl rounded-full"
                />
              </a>
            ) : (
              <></>
            )}
            {value?.tiktok != null ? (
              <a target="_blank" href={value?.tiktok}>
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-pink-500 p-2 text-xl rounded-full"
                />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        {value?.cover?.asset?.url == undefined ? (
          <div className="bg-cover rounded-lg bg-center w-72 h-72 overflow-hidden">
            <Image
              alt="no picture"
              src={mypic}
              width={288}
              height={288}
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="bg-cover rounded-lg bg-center w-72 h-72 overflow-hidden">
            <img
              alt="no picture"
              src={value?.cover?.asset?.url}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="p-2 text-center rounded-b-xl text-xl font-semibold">
        <h1>{value?.name || "Recipe Coming Soon"}</h1>
      </div>
    </div>
  );
};

export default Card;
