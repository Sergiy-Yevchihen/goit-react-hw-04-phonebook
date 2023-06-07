import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';
 import { Notify } from 'notiflix/build/notiflix-notify-aio';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = formData;
  const validateForm = newContact => {
  const { name, number } = newContact;

  if (!name || !number) {
    Notify.failure('Some field is empty');
    return false;
  }

  return true;
};

if (!validateForm({ name, number })) {
  return;
}
   

    onAdd({ id: nanoid(), name, number });
    resetForm();
  };

  

  const resetForm = () => setFormData(INITIAL_STATE);

  const { name, number } = formData;
  return (
    <Form onSubmit={handleFormSubmit}>
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <button type="submit">Add contact</button>
    </Form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
