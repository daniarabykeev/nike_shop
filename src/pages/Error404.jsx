import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button onClick={() => navigate("/")} type="primary" key="console">
            Go home
          </Button>
        }
      />
    </div>
  );
};

export default Error404;
