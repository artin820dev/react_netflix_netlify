import React from "react";
import SavedShows from "../Components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <div className="absolute w-full h-[400px] bg-gradient-to-r from-black"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/ccf00e8d-5357-4dcc-ba0b-e4f2d71cfb11/DE-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className=" w-full h-[400px] object-cover"
        />
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
