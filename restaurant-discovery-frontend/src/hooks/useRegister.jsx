import { useState, useEffect } from "react";
import RegisterUserEndpoint from "../register/RegisterUserEndpoint";

export default function useRegister({ email, password, confirmPassword }) {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const attemptRegisterUser = () => {
    if (email.trim() === "") {
      setErrorMessage("Please enter email");
    } else if (password.trim() === "") {
      setErrorMessage("Please enter password");
    } else if (password === confirmPassword) {
      RegisterUserEndpoint({ email, password })
        .then((response) => {
          console.log("response was: ", { response });
          console.log("Registration was a success");
          setRegistrationSuccess(true);
        })
        .catch((err) => {
          console.log("useRegister failed");
          setErrorMessage(err.response.data.errorMessage);
        })
        .finally(() => setLoading(false));
    } else {
      console.log("Password and confirm password are different");
      setErrorMessage("Password and confirm password are different");
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("register: InUseEffect");
    setLoading(false);
    setErrorMessage(null);
  }, [email, password, confirmPassword]);
  return { registrationSuccess, loading, errorMessage, attemptRegisterUser };
}
