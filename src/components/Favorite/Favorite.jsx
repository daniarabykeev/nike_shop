import { Button, Card, Carousel, Col, List } from "antd";
import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import "./Favorite.css";

const { Meta } = Card;
const Favorite = () => {
  const { getFavorite, favorite, deleteFromFavorite } =
    useContext(favoriteContext);
  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <div className="container">
      <div style={{ display: "flex" }}>

        <div>
          <List
            itemLayout="vertical"
            dataSource={favorite.products}
            renderItem={(item) => (
              <Card
                hoverable
                style={{ maxWidth: 400, margin: "10px 0" }}
                cover={
                  <Carousel autoplay>
                    <img alt="example" src={item.item.image1} />
                    <img alt="example" src={item.item.image2} />
                    <img alt="example" src={item.item.image3} />
                    <img alt="example" src={item.item.image4} />
                    <img alt="example" src={item.item.image5} />
                  </Carousel>
                }
              >
                <h3>{item.item.brand}</h3>
                <h4>{item.item.model}</h4>
                <div>{item.item.description}</div>
                <Button onClick={() => deleteFromFavorite(item.item.id)}>
                  Remove from favorite
                </Button>
              </Card>

            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
