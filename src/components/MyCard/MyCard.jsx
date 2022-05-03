import { Button } from "antd";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import "./MyCard.css";

const MyCards = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="credit">
      <div className="wrapper">
        <div id="PaymentForm">
          <Cards
            cvc={data.cvc}
            expiry={data.expiry}
            focus={data.focus}
            name={data.name}
            number={data.number}
          />
          <form action="">
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="expiry"
              placeholder="Expire Date"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
            />
            <Button
              onClick={() => navigate("/success")}
              style={{ margin: "20px 0" }}
            >
              Оформить заказ
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
