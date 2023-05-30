import React from "react";

interface IProp {
  name: string;
}

const TypeProduct = ({ name }: IProp) => {
  return <div>{name}</div>;
};

export default TypeProduct;
