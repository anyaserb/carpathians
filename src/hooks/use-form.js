import { useState, useEffect } from "react";

const useForm = (openNewPopUp = true) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [thanksPopUp, setThanksPopUp] = useState(false);

  const [formData, setFormData] = useState({
    name: { value: "", isValid: false },
    phone: { value: "", isValid: false },
    email: { value: "", isValid: false }
  });

  useEffect(() => {
    if (
      (formData.name.isValid && formData.phone.isValid) ||
      (formData.name.isValid && formData.email.isValid)
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formData]);

  const submitForm = (event) => {
    event.preventDefault();

    let formData = {
      name: formData.name.value,
      phone: formData.phone.value,
      email: formData.email.value
    };

    if (formIsValid) {
      const fetchData = async () => {
        try {
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
        } catch (error) {
          console.log("Дані успішно відравлені");
        }
      };

      console.error("Помилка відправлення даних", error);

      setFormData({
        name: { value: "", isValid: false },
        phone: { value: "", isValid: false },
        email: { value: "", isValid: false }
      });

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

    setFormData((prevData) => ({
      ...prevData,
      name: { value: event.target.value, isValid: isValid }
    }));
  };

  const changeInputPhoneHandler = (event) => {
    const regex = /^\+380\d{9}$/;
    const value = event.target.value;
    const isValid = regex.test(value);

    setFormData((prevData) => ({
      ...prevData,
      phone: { value: value, isValid: isValid }
    }));
  };

  const changeInputEmailHandler = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = event.target.value;
    const isValid = regex.test(value);

    setFormData((prevData) => ({
      ...prevData,
      email: { value: value, isValid: isValid }
    }));
  };

  return {
    formIsValid,
    formData,
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
