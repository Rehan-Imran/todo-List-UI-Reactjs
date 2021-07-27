import React, { createRef, useState } from "react";
import { Card } from "baseui/card";
import { StatefulMenu } from "baseui/menu";
import { Menu } from "baseui/menu";
import closeButton from "./Resources/cross.png";

const DisplayTasks = (props) => {
  const [isValied, setIsValied] = useState(false);

  const changeCard = (item) => {
    props.onChange(item.id, props.item.id);
  };
  return (
    <Card key={props.item.id}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{props.item.name}</div>
        <div>
          <img
            src={closeButton}
            alt="Delete Task"
            style={{ width: 20, height: 20 }}
            onClick={() => {
              // deleteTask(item.id);
              if (isValied === false) {
                setIsValied(true);
              } else {
                setIsValied(false);
              }
            }}
          ></img>
        </div>
      </div>
      {isValied && (
        <StatefulMenu
          items={props.titles}
          onItemSelect={(props) => changeCard(props.item)}
          overrides={{
            List: {
              style: {
                width: "matchParent",
              },
            },
            Option: {
              props: {
                getItemLabel: (item) => item.name,
              },
            },
          }}
        />
      )}
    </Card>
  );
};

export default DisplayTasks;
