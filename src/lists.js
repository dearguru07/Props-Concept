import React from "react";

const Fruits = ["Apple", "Banana", "Graps", "Mango", "lion"];
const FruitsList = Fruits.map((index, fruit) => {
  return <li key={fruit}>{index}</li>;
});

const List = () => {
  return (
    <div>
      <ul>{FruitsList}</ul>
    </div>
  );
};
export default List;
