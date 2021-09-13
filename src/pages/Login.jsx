import { Button, Heading, Pane } from "evergreen-ui";
import React from "react";

const Login = ({ setLoginType }) => {
  const pickLogin = (type) => {
    setLoginType(type);
  };

  return (
    <div
      style={{
          backgroundColor: 'whitesmoke',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Pane height={500} background="red700" width={300} borderRadius={14}>
        <Heading color="white" size={900} textAlign="center" marginTop={20}>
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
            size="large"
            color="black"
            backgroundColor="papayawhip"
            onClick={() => pickLogin("employee")}
            marginBottom={50}
            width={200}
          >
            Employee Signin
          </Button>
          <Button
            size="large"
            color="black"
            backgroundColor="papayawhip"
            onClick={() => pickLogin("hr")}
            width={200}
          >
            HR Signin
          </Button>
        </Pane>
      </Pane>
    </div>
  );
};

export default Login;
