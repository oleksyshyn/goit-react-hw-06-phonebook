import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

function ContactsList() {
    const state = useSelector(state);
    console.log(state);
    const contacts = useSelector(state => state.contacts.contacts);
    console.log(contacts);
    const dispatch = useDispatch();
    
    const deleteContactHandler = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li className={css.contacts_list_item} key={id}>
                    <p className={css.contact}>{name}: {number}</p>
                    <button className={css.button} onClick={() => deleteContactHandler(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        }),
    ),
};