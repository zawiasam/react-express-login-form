import React from 'react'
import { Link } from 'react-router'
import Select2 from 'react-select2-wrapper'
import AddressBookActions from '../AddressBook/AddressBookActions'
import AddressBookStore from '../AddressBook/AddressBookStore'
import LoginStore from '../Login/LoginStore'
import * as FormElements from '../../modules/Commons/FormElements.react'

export default class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
      addressBookEntries: [],
    }

    this._onDialogClose = this._onDialogClose.bind(this);
    this._onChange = this._onChange.bind(this);
    this._addressBookStoreChanged = this._addressBookStoreChanged.bind(this);
    AddressBookStore.addChangeListener(this._addressBookStoreChanged);
  }

  componentDidMount() {
    const calle = LoginStore.getLoginData();
    AddressBookActions.getAddressBookData(calle);
  }

  _addressBookStoreChanged(change) {
    this.setState({
      addressBookEntries: AddressBookStore.data,
    })
  }

  _onChange(args) {
    this.setState(args);
  }

  _onDialogClose(action) {
    if (action.action === 'ok') {
      action.title = this.state.title;
      action.message = this.state.message;
    }
    this.props.onClosing(action);
  }

  render() {
    return (<div style={ { width: "100%", textAlign: "center" } }>
              <form>
                <ul className="demo-list-item mdl-list" style={ { display: "inline-block", width: "80%" } }>
                  <li className="mdl-list__item">
                    <Select2 multiple={ true } data={ this.state.addressBookEntries } options={ { placeholder: 'wybierz adresata', } } style={ { width: "100%" } } />
                  </li>
                  <li className="mdl-list__item">
                    <div className="mdl-list__item-primary-content">
                      <FormElements.InputText id="title" onChange={ this._onChange } label={ 'Tytuł wiadomości' } style={ { width: "100%" } } />
                    </div>
                  </li>
                  <li className="mdl-list__item">
                    <div className="mdl-list__item-primary-content">
                      <FormElements.InputTextArea id="message" onChange={ this._onChange } label={ 'Treść wiadomości' } style={ { width: "100%" } } />
                    </div>
                  </li>
                </ul>
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--2-col">
                    <Link to="/Inbox">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                      Wyślij
                    </button>
                    </Link>
                  </div>
                  <div className="mdl-cell mdl-cell--2-col">
                    <Link to="/Inbox">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                      Anuluj
                    </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>)
  }
}
