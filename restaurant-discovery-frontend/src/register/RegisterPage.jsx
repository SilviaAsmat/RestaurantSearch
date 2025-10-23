import { useState, useEffect } from "react";
import InputTextBox from "../components/InputTextBox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import useRegister from "../hooks/useRegister";

function RegisterPage() {
  const [emailTextField, setEmailTextField] = useState("");
  const [passwordTextField, setPasswordTextField] = useState("");
  const [passwordConfirmedTextField, setPasswordConfirmedTextField] =
    useState("");
  const navigate = useNavigate();

  const { registrationSuccess, loading, errorMessage, attemptRegisterUser } =
    useRegister({
      email: emailTextField,
      password: passwordTextField,
      confirmPassword: passwordConfirmedTextField,
    });

  useEffect(() => {
    if (registrationSuccess) {
      console.log("registration was a success");
      navigate("/login");
    }
  });

  const onRegisterClick = () => {
    console.log("register user clicked");
    attemptRegisterUser();
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
      <Stack className="LoginPage" spacing={2} direction={"column"} width={500}>
        <InputTextBox
          hintText="email address"
          onTextFieldUpdated={setEmailTextField}
        />
        <InputTextBox
          hintText="password"
          onTextFieldUpdated={setPasswordTextField}
        />
        <InputTextBox
          hintText="confirm password"
          onTextFieldUpdated={setPasswordConfirmedTextField}
        />
        <Button variant="contained" onClick={onRegisterClick}>
          {" "}
          <b style={{ padding: "0 10px" }}>Register</b>
        </Button>
        {errorMessage && <p style={{ color: "red" }}>Error: {errorMessage}</p>}
        {loading && <p>Loading...</p>}
      </Stack>
    </Container>
  );
}

export default RegisterPage;
