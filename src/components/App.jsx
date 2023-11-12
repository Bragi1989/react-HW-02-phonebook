import React, { Component } from 'react';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Filter from './Filter.jsx';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = (name, number) => {
    const { contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }

    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('Contact with this name already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList contacts={filteredContacts} handleDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
