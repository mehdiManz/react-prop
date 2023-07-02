import React from "react";


function Avatar(props) {
  return (
    <div className="avatar-container">
      <img
        className="avatar-img"
        src={props.imgURL}
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
