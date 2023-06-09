import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/operations';

export default function ContactsList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const savedContacts = useSelector(state => {
    if (filterValue) {
      return state.contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
      );
    } else {
      return state.contacts.items;
    }
  });

  const handleSubmit = e => {
    dispatch(deleteContact(e));
  };
  return (
    <div>
      <ul className={css.contact__list}>
        {savedContacts.map(contact => (
          <li className={css.contact__item} key={contact.id}>
            <span className={css.contact__span__name}>{contact.name}</span>:
            <span className={css.contact__span__number}>{contact.phone}</span>
            <button
              className={css.contact__button}
              onClick={() => handleSubmit(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
        {savedContacts.length === 0 && filterValue && (
          <li className={css.contact__item}>
            No contact found in the phonebook!
          </li>
        )}
      </ul>
    </div>
  );
}
