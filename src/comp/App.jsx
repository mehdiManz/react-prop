import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function App() {
  return (
    <div className="body">
      <h1 className="heading">Contacts</h1>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
