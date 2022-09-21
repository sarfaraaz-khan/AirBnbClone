import react, { useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import React from "react";
import Search from "./Search";
// import { useHistory } from "react-router-dom";

function Banner() {
  // const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="bannerSearch">
        {showSearch && <Search />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          variant="outlined"
          className="bannerSearchButton"
        >
          {/* agar seatch date hai to hide dikha ya ni to search dikha */}
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and streched your imagination</h1>
        <h5>
          Plan a diffrent kind of gateway to uncover the hidden gems near you
        </h5>
        <Button
          variant="outlined"
          // onClick={() => {
          //   history.push("/search");
          // }}
        >
          {" "}
          Explore Near Me
        </Button>
      </div>
    </div>
  );
}

export default Banner;
