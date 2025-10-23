import { useState, useEffect } from "react";
import LoginEndpoint from "../login/LoginEndpoint";

export default function useLogin({ email, password }) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const attemptLogin = () => {
    console.log("In attemptLogin", { email }, { password });
    if (email.trim() === "") {
      setErrorMessage("Please enter email");
    } else if (password.trim() === "") {
      setErrorMessage("Please enter password");
    } else {
      LoginEndpoint({ email, password })
        .then((res) => setLoginSuccess(true))
        .catch((err) => {
          console.log("userLogin failed");
          setErrorMessage(err.response.data.errorMessage);
        })
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    console.log("login: InUseEffect");
    setLoading(false);
    setErrorMessage(null);
  }, [email, password]);
  return { loginSuccess, loading, errorMessage, attemptLogin };
}
