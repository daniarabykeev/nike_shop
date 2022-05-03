import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Tooltip } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { favoriteContext } from "../../context/favoriteContext";

const CollectionCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoriteContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const [checkItemX, setCheckItemX] = useState(checkItemInFavorite(item.id));
  return (
    <div>
      <Card
        hoverable
        style={{ maxWidth: 400, margin: "10px 0" }}
        cover={
          <Carousel autoplay>
            <img alt="example" src={item.image1} />
            <img alt="example" src={item.image2} />
            <img alt="example" src={item.image3} />
            <img alt="example" src={item.image4} />
            <img alt="example" src={item.image5} />
          </Carousel>
        }
        actions={[
          <Tooltip placement="topLeft" title="Добавить в избранное">
            <HeartOutlined
              style={{ fontSize: "25px", color: checkItemX ? "red" : "black" }}
              onClick={() => {
                addProductToFavorite(item);
                setCheckItemX(checkItemInFavorite(item.id));
              }}
            />
          </Tooltip>,
          <Tooltip placement="topLeft" title="Добавить в корзину ">
            <ShoppingCartOutlined
              style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}
              onClick={() => {
                addProductToCart(item);
                setCheckItem(checkItemInCart(item.id));
              }}
            />
            {/* </Link> */}
          </Tooltip>,
          <Tooltip placement="topLeft" title="Details">
            <Link
              style={{ borderBottom: "1px solid white" }}
              to={`/collection/${item.id}`}
            >
              <EllipsisOutlined key="ellipsis" />
            </Link>
          </Tooltip>,
        ]}
      >
        <p>{item.model}</p>
        <p>{item.price}$</p>
      </Card>
    </div>
  );
};

export default CollectionCard;
