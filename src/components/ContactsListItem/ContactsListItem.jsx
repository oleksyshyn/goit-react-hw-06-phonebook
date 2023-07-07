// import React from 'react';
// import { useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact } from 'redux/slice';
// import PropTypes from 'prop-types';
// import css from './ContactsListItem.module.css';

// function ContactsListItem() {
//     const contacts = useSelector(state => state.contacts);
  

//     return (
//         <li className={css.contacts_list_item}>
//             <p className={css.contact}>{name}: {number}</p>
//             <button className={css.button} onClick={deleteContactHandler}>Delete</button>
//         </li>
//     )
// }

// export default ContactsListItem;

// ContactsListItem.propTypes = {
//     contactId: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// };