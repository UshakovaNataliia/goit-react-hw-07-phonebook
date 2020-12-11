import React, { Component } from 'react';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import { connect } from 'react-redux';
import {setContacts} from '../../redux/contactList/contactListActions'
// import contactsReducer from '../../redux/store';

class App extends Component { 

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.props.setCont(parseContacts);
    }
    console.log(parseContacts);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cont !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
    console.log(prevProps.contacts);
  }

  render() {
     return (
       <>
         <CSSTransition
           appear={true}
           in
           timeout={500}
           classNames={styles}
           unmountOnExit>
          <h1 className={styles.title}>Phonebook</h1>
         </CSSTransition>

          <Form/>
          <h2>Contacts</h2>
         <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames={styles}
          unmountOnExit
         >
           <Filter/>
         </CSSTransition>
          <ContactList/>
       </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setCont: (cont => dispatch(setContacts(cont)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);