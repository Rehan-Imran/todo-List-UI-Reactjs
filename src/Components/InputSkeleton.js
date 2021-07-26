import React from "react";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { Card } from "baseui/card";

const InputSkeleton = (props) => {
  return (
    <Card className={props.className}>
      <form onSubmit={props.onSubmit}>
        <Input
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <Button type={props.type}>{props.children}</Button>
      </form>
    </Card>
  );
};

export default InputSkeleton;
