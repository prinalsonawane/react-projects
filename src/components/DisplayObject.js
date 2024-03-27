import React, { useState } from "react";

function DisplayObject() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: 
        {
          sample: {
            sam2: "fdfdf"
          }}},
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  const renderNestedObject = (object, depth = 0) => {
    return <ul style={{ listStyleType: 'none', paddingLeft: 20 * depth }}>
      {Object.entries(object).map(([key, value]) => (
        <li key={key}><b>{key}</b>:
          {typeof value === "object" ? renderNestedObject(value, depth + 1) : `${value}`}</li>
      ))}
    </ul>
  }
  return <div>{renderNestedObject(nestedObjected)}</div>
};

export default DisplayObject;
