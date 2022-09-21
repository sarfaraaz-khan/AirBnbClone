import React from "react";
import "./home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="homeSection">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-49090690/original/2e13571e-e2c1-4c16-80db-20184b9c6c0b.jpeg?im_w=720"
          title="hanimandaho, Maldives"
          description="Indonesia Ministry of Tourism, Wego, and Creative Economy collaborates to revive tourism to Bali, with an aim to welcome over 900,000 tourists"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-49090690/original/2e13571e-e2c1-4c16-80db-20184b9c6c0b.jpeg?im_w=720"
          title="Abiansemal, Indonesia"
          description="Through Wego’s vast user base in MENA, Indonesia Tourism Board will be able to promote its destination and Bali specifically to drive more bookings."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-49090690/original/2e13571e-e2c1-4c16-80db-20184b9c6c0b.jpeg?im_w=720"
          title="pemenang, Indonesia"
          description="Through Wego’s vast user base in MENA, Indonesia Tourism Board will be able to promote its destination and Bali specifically to drive more bookings"
        />
      </div>
      <div className="homeSection">
        <Card
          src="https://a0.muscache.com/im/pictures/2f15fd34-ad65-4b22-a276-50c298cbae3e.jpg?im_w=720"
          title="Dome hosted by Dorothy"
          description="ANGSANA VELAVARU DELUXE BEACHFRONT POOL VILLA"
          price="₹83,714"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
          title="Dome hosted by Dorothy"
          description="Adaaran Club Rannalhi, Maldives, Water Bungalows"
          price="₹43,094"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/00ab4e4e-502a-4874-bf65-eb463310ee4f.jpg?im_w=720"
          title="Dome hosted by Dorothy"
          description="Maldives Bands, Garden Villa"
          price="₹39,902"
        />
      </div>
    </div>
  );
}

export default Home;
