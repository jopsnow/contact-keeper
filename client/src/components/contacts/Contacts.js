import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import { Context } from 'express-validator/src/context';

const Contacts = () => {

    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                )
            )}
        </Fragment>
    )
}

export default Contacts
