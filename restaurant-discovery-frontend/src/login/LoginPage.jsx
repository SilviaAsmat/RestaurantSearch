import { useState, useEffect } from "react";

import InputTextBox from "../components/InputTextBox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function LoginPage() {
  const [emailTextField, setEmailTextField] = useState("");
  const [passwordTextField, setPasswordTextField] = useState("");
  const navigate = useNavigate();

  const { loginSuccess, loading, errorMessage, attemptLogin } = useLogin({
    email: emailTextField,
    password: passwordTextField,
  });

  useEffect(() => {
    if (loginSuccess) {
      console.log("login was a success");
      navigate("/restaurants");
    }
  });

  const onLoginClick = () => {
    console.log("login button clicked");
    attemptLogin();
  };

  const onRegisterClick = () => {
    console.log("register button clicked");
    navigate("/register");
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack className="LoginPage" spacing={2} direction={"column"} width={400}>
        <InputTextBox
          hintText="email address"
          onTextFieldUpdated={setEmailTextField}
        />
        <InputTextBox
          hintText="password"
          onTextFieldUpdated={setPasswordTextField}
        />
        <Button variant="contained" onClick={onLoginClick}>
          Login
        </Button>
        <Button variant="text" onClick={onRegisterClick}>
          New User? <b style={{ padding: "0 10px" }}>Register Here</b>
        </Button>
        {errorMessage && <p style={{ color: "red" }}>Error: {errorMessage}</p>}
        {loading && <p>Loading...</p>}
      </Stack>
    </Container>
  );
}

export default LoginPage;
