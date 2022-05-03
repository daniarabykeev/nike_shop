import { Image } from "antd";
import React from "react";
import './Stores.css'

const Stores = () => {
  let STORES = [
    {
      image:
        "https://cdn3.yoox.biz/cloud/stonewp/uploads/2013/09/THE-BRAND_Flagship_Milano-Matteotti_380X253_a.jpg",
      location: "Milan",
      id: 1,
    },
    {
      image: "https://cdn3.yoox.biz/cloud/stonewp/uploads/2015/10/Roma-3-1.jpg",
      location: "Roma",
      id: 2,
    },
    {
      image:
        "https://cdn3.yoox.biz/cloud/stonewp/uploads/2015/10/Firenze-1-1.jpg",
      location: "Paris",
      id: 3,
    },
    {
      image: "https://cdn3.yoox.biz/cloud/stonewp/uploads/2015/10/verona.jpg",
      location: "Verona",
      id: 2,
    },
    {
      image:
        "https://cdn3.yoox.biz/cloud/stonewp/uploads/2014/02/Venezia_Banner.jpg",
      location: "Venice",
      id: 2,
    },
    {
      image:
        "https://cdn3.yoox.biz/cloud/stonewp/gallery/flagshiptorino_slideshow/torino-1.jpg",
      location: "Turin",
      id: 6,
    },
    {
      image:
        "https://cdn3.yoox.biz/cloud/stonewp/uploads/2015/10/Cannes-1-1.jpg",
      location: "Osh",
      id: 2,
    },
    {
      image:
        "https://cdn3.yoox.biz/cloud/stonewp/uploads/2015/10/Amsterdam-1-1.jpg",
      location: "Bishkek",
      id: 2,
    },
  ];

  return (
    <>
      <div
        className="stores-main container"
        // style={{
        //   dispaly: "flex",
        //   flexWrap: "wrap",
        //   justifyContent: "space-around",
        // }}
      >
        <p style={{ textAlign: "center", fontSize: "2rem" }}>NIKE</p>
        <p style={{ textAlign: "center" }}>
          The Nike store has been conceived in line with the brand’s philosophy,
          both as an object of design and a container of clothes.
          <br />
          The concept of the Stone Island stores was created by Marc Buhre, an
          industrial designer from Heidelberg founder of the architecture studio
          Zeichenweg TM.!
        </p>
        <div
          style={{
            margin: "10px 0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {STORES.map((item) => (
            <div key={item.id}>
              <Image width={300} src={item.image} />
              <p style={{ textAlign: "center" }}>{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stores;
