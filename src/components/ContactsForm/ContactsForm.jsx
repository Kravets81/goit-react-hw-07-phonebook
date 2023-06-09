import React, { useState } from 'react';
import css from './ContactsForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/operations';
import { getContacts } from '../../Redux/selectors';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const savedContacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = e => {
    const { value } = e.target;

    setName(value);
  };

  const handlePhoneChange = e => {
    const { value } = e.target;
    setPhone(value);
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExists = savedContacts.some(
      contact => contact.name === name || contact.phone === phone
    );

    if (!isContactExists) {
      dispatch(addContact({ name, phone }));
    } else {
      alert('Contact already exists!');
    }

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={[css.form__label]}>
        Name
        <input
          className={[css.form__input]}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className={[css.form__label]}>
        Phone
        <input
          className={[css.form__input]}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlePhoneChange}
          value={phone}
        />
      </label>
      <button className={[css.form__button]}>Add contact</button>
    </form>
  );
}
