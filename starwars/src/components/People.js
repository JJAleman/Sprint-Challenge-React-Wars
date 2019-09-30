import React, { useState, useEffect } from "react";
import PeopleCard from "./PeopleCard";
import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        const peopleData = res.data.results;
        console.log(peopleData);
        setPeople(peopleData);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      {people.map(person => {
        return (
          <PeopleCard
            key={person.id}
            name={person.name}
            dob={person.birth_year}
            gender={person.gender}
          />
        );
      })}
    </div>
  );
};
export default People;
