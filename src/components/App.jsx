import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/1/10/Kabir_Bedi_2012_%28bust_cropped%29.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
