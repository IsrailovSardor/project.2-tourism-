import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const fetchData  = () => {
    return axios
    .get("http://localhost:3004/pages")
    .then((response) => response.data);
}

const VisaPost = () => {

    const [visa, setVisa] = useState([]);
    useEffect(() => {
      fetchData().then((data) => setVisa(data));
    }, []);
    return (
        <div className="visapost">
          {visa.map((visa) => {
            return (
              <div className="visapost-item">
                <img src={visa.pageImgAA} alt="" className="visapost-img" />
                <p>{visa.pagesTitle}</p>
              </div>
            );
          })}
        </div>
      );
    };

export default VisaPost;