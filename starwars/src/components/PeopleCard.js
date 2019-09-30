import React from "react";

const PeopleCard = props => {
  return (
    <div key={props.id}>
      <h2>Name: {props.name}</h2>
      <h2>DOB: {props.birth_year}</h2>
      <h2>Gender: {props.gender}</h2>
    </div>
  );
};

export default PeopleCard;
