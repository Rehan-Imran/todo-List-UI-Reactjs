import * as React from "react";
import { Card } from "baseui/card";
import { Input } from "baseui/input";
import closeButton from "./Resources/cross.png";
import "./InputSkeleton.css";
const TodoItems = (props) => {
  const changeEventHandler = (event) => {
    props.setRecord(props.data.id, event.target.value);
  };
  return (
    <div className={props.className} draggable={props.draggable}>
      <Card>
        <img
          src={closeButton}
          alt="Close the tab"
          className="image"
          onClick={() => {
            props.onClick(props.data.id);
          }}
        />
      </Card>
      <Input value={props.data.name} onChange={changeEventHandler} />
      {props.task.length > 0 &&
        props.task
          .filter((item) => {
            return item.cardId === props.id;
          })
          .map((item) => (
            <Card key={item.id} draggable="true">
              {item.name}
            </Card>
          ))}
    </div>
  );
};

export default TodoItems;
