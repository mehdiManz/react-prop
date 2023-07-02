import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <div className="name">
          {props.name}
        </div>
        <img
          className="circle-img"
          src={props.imgURL}
          alt="Profile"
        />
      </div>
      <div className="bottom">
        <p className="info">Phone: {props.phone}</p>
        <p className="info">Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Card;
