import React from "react";
import Card from 'react-bootstrap/Card'; 

const PeopleCard = props => {
  return (
    <Card style={{ width: "18rem" }} key={props.id}>
      <Card.Img variant="top" src={props.url}  />
      <Card.Body>
        <Card.Title className="name">{props.name}</Card.Title>
        <Card.Text className="info">
          <p>Height: {props.height}</p>
          <p>Gender: {props.gender}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    // <div key={props.id}>
    //   <h2>Name: {props.name}</h2>
    //   <p>DOB: {props.birth_year}</p>
    //   <p>Gender: {props.gender}</p>
    // </div>
  );
};

export default PeopleCard;
