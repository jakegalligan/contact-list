import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Contacts from './Contacts';
import PropTypes from 'prop-types'
import './../App.css';





class App extends React.Component {
  constructor () {
    super()
//set preloaded contacts
    this.state = {
      contactList: [
        { key: 1,
          name: 'Derek Jeter',
          image_url: 'https://securea.mlb.com/mlb/images/players/head_shot/116539.jpg',
          email: 'Jeter76@gmail.com',
          phone_number: '305-274-2834'},
        { key: 2,
          name: 'Mariano Rivera',
          image_url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3240.png&w=350&h=254',
          email: 'mrivera@yahoo.com',
          phone_number: '211-634-6810'},
        { key: 3,
          name: 'David Tyree',
          image_url: 'http://media.nj.com/giants_impact/photo/10479457-large.jpg',
          email: 'tyree@giants.com',
          phone_number: '211-731-9151'}
      ]
  }
  //bind the addContact's and delteContact's function 'this' to the App's this
  this.addContact = this.addContact.bind(this)
  this.deleteContact = this.deleteContact.bind(this)

}

//takes in a contact from CreateContact component and then adds it to the array of contacts in the state
addContact(contact) {

  this.setState({contactList: this.state.contactList.concat([contact])})
}
//delete the specfed contact
deleteContact(target) {
  let newContact = [];
  const currentList = this.state.contactList
//find the contact in the list that has the same key as the clicked on contact and then add it to our new array
  currentList.filter((contact) => {
    if (contact.key !== target ) {
      newContact.push(contact)
    }
  })
  //update the state with a new ContactList that doesn't include the deleted contact
    this.setState({
    contactList: newContact
  })
}


  render() {
    return (
      <div>
        <Switch>
        //setting route for url to '/path
          <Route path='/contacts' render={() => (
            //onnce the rout is set to /contacts the app goes to the Contacts component
            <Contacts addContact={this.addContact} contactList ={this.state.contactList} deleteContact = {this.deleteContact} />
          )}/>
        </Switch>
      </div>
    )
  }
}

Contacts.propTypes = {
  contactList: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired

}

export default App
