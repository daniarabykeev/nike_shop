import { Button, InputNumber, List } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  // console.log(cart);
  return (
    <div className="cart-cart container">
      <List
        itemLayout="horizontal"
        dataSource={cart.products}
        footer={
          <div>
            <h1>Total: {cart.totalPrice}$</h1>
            <Button id="btn-order" onClick={() => navigate("/credit")}>
              Order
            </Button>
          </div>
        }
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div>
                  <div>
                    <h2>{item.item.model}</h2>
                  </div>
                  <div>
                    <h3>{"$" + item.item.price}</h3>
                  </div>
                </div>
              }
              description={
                <>
                  <div className="cart-imgdes">
                    <img
                      className="imageCart"
                      src={item.item.image1}
                      alt="img"
                      style={{ width: "270px" }}
                    />
                    <div className="cart-description">
                      <div className="aaa">{item.item.description}</div>
                      <div className="cart-sub-price">
                        <h4>SubPrice</h4>
                        <h3>{"$" + item.subPrice}</h3>
                      </div>
                      <div className="quantity">
                        <h4>Quantity</h4>
                        <Button
                          onClick={() =>
                            changeProductCount(item.count - 1, item.item.id)
                          }
                        >
                          -
                        </Button>
                        <InputNumber disabled value={item.count} />
                        <Button
                          onClick={() =>
                            changeProductCount(item.count + 1, item.item.id)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <Button onClick={() => deleteFromCart(item.item.id)}>
                    Remove from cart
                  </Button>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
