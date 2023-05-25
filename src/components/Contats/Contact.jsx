import { useEffect } from 'react';

export const Contact = function (props) {
  const { contacts, onDeleteContact } = props;
  console.log(props);

  return (
    <ul>
      {contacts !== [] &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
