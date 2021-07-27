import React, { useState } from "react";
import InputSkeleton from "./InputSkeleton";

import "./CreateCards.css";

const CreateCards = (props) => {
  const [cardTitle, setCardTitle] = useState("");
  const onSubmitHandler = (event) => {
    setCardTitle(event.target.value);
  };
  const createObjectToSave = (event) => {
    event.preventDefault();
    if (cardTitle) {
      props.onPress(cardTitle);
    }
    setCardTitle("");
  };
  return (
    <InputSkeleton
      className="CreateCard"
      onSubmit={createObjectToSave}
      value={cardTitle}
      onChange={onSubmitHandler}
      placeholder="Enter the title"
      type="submit"
    >
      Add Field
    </InputSkeleton>
  );
};

export default CreateCards;
