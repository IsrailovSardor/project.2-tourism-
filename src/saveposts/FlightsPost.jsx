import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchData = () => {
  return axios
    .get("http://localhost:3004/flit")
    .then((response) => response.data);
};
const FlightsPost = () => {
  const [flit, setFlit] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setFlit(data));
  }, []);
  return (
    <div className="flitpost-item">
      {flit.map((flit) => {
        return (
          <div className="flit-container">
            <p>
              <strong>ФИО :</strong> {flit.flightsFIO}
            </p>
            <p>
              <strong>Номер тел :</strong> {flit.flightsNum}
            </p>
            <p>
              <strong>город вылета:</strong> {flit.flightsCity}
            </p>
            <p>
              <strong>город назначения :</strong> {flit.flightsCity2}
            </p>
            <p>
              <strong>Взрослых :</strong> {flit.flightsPeople1} человека
            </p>
            <p>
              <strong>Детей :</strong> {flit.flightsPeople2} человека
            </p>
            <p>
              <strong>Дата вылета :</strong> {flit.flightsDataOne}
            </p>
            <p>
              <strong>Дата возрата :</strong> {flit.flightsDataTwo}
            </p>
            <p>
              <strong>Почта :</strong> {flit.flightsEmail}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FlightsPost;
