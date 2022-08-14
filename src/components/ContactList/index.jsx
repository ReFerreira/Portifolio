import React from "react";
import { Contact } from "../../constants";
import { List, Text } from "./styles";

// import { Container } from './styles';

function ContactList() {
  return (
    <List>
      {Contact.map(({ description, icon, link }) => (
        <li key={Math.random()}>
          {icon}
          <Text>{link ? link : description}</Text>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
