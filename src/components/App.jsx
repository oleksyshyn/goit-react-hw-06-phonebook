import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';

function App() {
 
  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contacts_title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App; 