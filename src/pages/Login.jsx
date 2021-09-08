import { Button, Heading, Pane } from "evergreen-ui";
import React from "react";

const Login = ({ setLoginType }) => {
  const pickLogin = (type) => {
    setLoginType(type);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Pane height={500} background="gray300" width={300} borderRadius={14}>
        <Heading fontWeight={300} size={800} textAlign="center" marginTop={20}>
          Welcome
        </Heading>

        <Pane
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
          marginTop="50%"
        >
          <Button
            onClick={() => pickLogin("employee")}
            marginBottom={20}
            width={200}
          >
            Employee Signin
          </Button>
          <Button onClick={() => pickLogin("hr")} width={200}>
            HR Signin
          </Button>
        </Pane>
      </Pane>
    </div>
  );
};

export default Login;
