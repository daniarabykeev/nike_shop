import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="Your purchase is approved!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button
            onClick={() => navigate("/collection")}
            type="primary"
            key="console"
          >
            back to shopping
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;
