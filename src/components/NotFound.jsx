import React from "react";
import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";
import { ButtonReturn } from "./ButtonReturn";

const NotFound = () => {
  return (
      <div className="flex flex-col justify-center items-center py-40">
        <div className="text-center">
          <h2 className="text-secondary font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            404 - Looks like you’re lost.
          </h2>
          <p className="text-secondary text-sm py-5 font-medium sm:text-xs md:text-sm lg:text-sm xl:text-sm">
            Maybe this page used to exist or you just spelled something wrong.
            <br />
            Chances are you Spelled something wrong, so you can double check the
            URL?
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <Link to="/home">
            <ButtonReturn />
          </Link>
        </div>
      </div>
  );
};

export default WithRouter(NotFound);