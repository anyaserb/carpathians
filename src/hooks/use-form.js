import { useState, useEffect } from "react";

const useForm = (openNewPopUp = true) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [thanksPopUp, setThanksPopUp] = useState(false);

  const [nameState, setNameState] = useState({
    value: "",
    isValid: false
  });
  const [phoneState, setPhoneState] = useState({
    value: "",
    isValid: false
  });
  const [emailState, setEmailState] = useState({
    value: "",
    isValid: false
  });

  useEffect(() => {
    if (
      (nameState.isValid && phoneState.isValid) ||
      (nameState.isValid && emailState.isValid)
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }

    console.log(formIsValid);
  }, [nameState, phoneState, emailState]);

  const submitForm = (event) => {
    event.preventDefault();

    let formData = {
      name: nameState.value,
      phone: phoneState.value,
      email: emailState.value
    };

    if (formIsValid) {
      const fetchData = async () => {
        const response = await fetch(
          "https://carpathians-5d74d-default-rtdb.firebaseio.com/clients.json",
          {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        console.log("Дані успішно відравлені", response);
      };
      setNameState({ value: "", isValid: false });
      setPhoneState({ value: "", isValid: false });
      setEmailState({ value: "", isValid: false });

      fetchData();

      if (openNewPopUp) {
        setPopUp(true);
      } else {
        setPopUp(false);
        setThanksPopUp(true);
      }
    }
  };

  const changeInputNameHandler = (event) => {
    const isValid =
      event.target.value.trim().length >= 2 &&
      event.target.value.trim().length <= 60;

    setNameState({ value: event.target.value, isValid: isValid });
  };

  const changeInputPhoneHandler = (event) => {
    const regex = /^\+380\d{9}$/;
    const value = event.target.value;
    const isValid = regex.test(value);

    setPhoneState({ value: value, isValid: isValid });
    console.log(value, isValid);
  };

  const changeInputEmailHandler = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = event.target.value;
    const isValid = regex.test(value);

    setEmailState({ value: value, isValid: isValid });
    console.log(value, isValid);
  };

  return {
    formIsValid,
    nameState,
    phoneState,
    emailState,
    submitForm,
    popUp,
    setPopUp,
    thanksPopUp,
    setThanksPopUp,
    changeInputNameHandler,
    changeInputPhoneHandler,
    changeInputEmailHandler
  };
};

export default useForm;
