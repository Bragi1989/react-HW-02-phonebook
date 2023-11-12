import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.handleSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
            <p className={css.contactName}>Name</p>
            <input type="text" name="name" value={name} onChange={this.handleChange} required />
            <p className={css.contactName}>Number</p>
        <input type="tel" name="number" value={number} onChange={this.handleChangeNumber} required />
        <button className={css.contactButton} type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;