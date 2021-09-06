import { useState } from "react";

const RegisterUser = (callback) => {
  const [input, setInput] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleChange,
    input,
  };
};

export default RegisterUser;
