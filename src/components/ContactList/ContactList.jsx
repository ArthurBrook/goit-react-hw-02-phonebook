const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
