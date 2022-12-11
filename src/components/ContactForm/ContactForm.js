import { PropTypes } from 'prop-types';
import { InputLabel, InputText, ButtonForm } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    const { name, number } = event.target.elements;
    event.preventDefault();
    onSubmit(name.value, number.value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputLabel>Name </InputLabel>
      <InputText
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputLabel>Number </InputLabel>
      <InputText
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ButtonForm type="submit">Add contact</ButtonForm>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
