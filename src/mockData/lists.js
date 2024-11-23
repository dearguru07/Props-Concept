import React from "react";

const Fruits = ["Apple", "Banana", "Graps", "Mango", "lion"];
const FruitsList = Fruits.map((fruit,index) => {
  return <li key={index}>{fruit}</li>;
});

const List = () => {
  return (
    <div>
      <ul>{FruitsList}</ul>
    </div>
  );
};
export default List;
