import React from 'react'
import { Link } from 'react-router'
import Select2 from 'react-select2-wrapper'
import AddressBookActions from '../AddressBook/AddressBookActions'
import AddressBookStore from '../AddressBook/AddressBookStore'
import LoginStore from '../Login/LoginStore'
import * as FormElements from '../../modules/Commons/FormElements.react'
import 'react-select2-wrapper/css/select2.min.css'
import NewMessageActions from './NewMessageActions'
import NewMessageStore from './NewMessageStore'

export default class NewMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: {
        title: '',
        message: '',
        receivers: this.props.receivers,
      },
    }

    this._onDialogAccept = this._onDialogAccept.bind(this);
    this._onChange = this._onChange.bind(this);
    this._addressBookStoreChanged = this._addressBookStoreChanged.bind(this);
    this._newMessageChanged = this._newMessageChanged.bind(this);
    
    AddressBookStore.addChangeListener(this._addressBookStoreChanged);
    NewMessageStore.addChangeListener(this._newMessageChanged)
  }

  componentDidMount() {
    const calle = LoginStore.getLoginData();
    AddressBookActions.getAddressBookData(calle);
  }

  componentWillUnmount() {
    AddressBookStore.removeChangeListener(this._addressBookStoreChanged);
    NewMessageStore.removeChangeListener(this._newMessageChanged);
  }

  _addressBookStoreChanged(change) {
    this.setState({
      addressBookEntries: AddressBookStore.data,
      categories: []
    })
  }

  _newMessageChanged() {
    this.context.router.push(NewMessageStore.newMessageUri);
  }

  _onChange(args) {
    let updatedMessage = this.state.message;
    for (let prop in args) {
      if (args.hasOwnProperty(prop)) {
        updatedMessage[prop] = args[prop];
      }
    }
    this.setState({
      message: updatedMessage
    });
  }

  _onDialogAccept(event) {
    NewMessageActions.sendMessage(this.state.message);
  }

  render() {
    let message = this.state.message;
    return (<div style={ { width: "100%", textAlign: "center" } }>
              <form>
                <ul className="demo-list-item mdl-list"
                    style={ { display: "inline-block", width: "80%" } }>
                  <li className="mdl-list__item">
                    <Select2 multiple={ true }
                             data={ this.state.addressBookEntries }
                             value={ message.receivers }
                             options={ { placeholder: 'wybierz adresata', } }
                             style={ { width: "100%" } }
                             onChange={ (event) => {
                                          let opts = event.target.selectedOptions;
                                          let values = [];
                                          for (var i = 0; i < opts.length; i++) {
                                            values.push(opts[i].value);
                                          }
                                          ;this._onChange({
                                            receivers: values
                                          })
                                        } } />
                  </li>
                  <li className="mdl-list__item">
                    <Select2 multiple={ true }
                             data={ this.state.addressBookEntries }
                             value={ message.receivers }
                             options={ { placeholder: 'wybierz adresata', } }
                             style={ { width: "100%" } }
                             onChange={ (event) => {
                                          let opts = event.target.selectedOptions;
                                          let values = [];
                                          for (var i = 0; i < opts.length; i++) {
                                            values.push(opts[i].value);
                                          }
                                          ;this._onChange({
                                            receivers: values
                                          })
                                        } } />
                  </li>
                  <li className="mdl-list__item">
                    <div className="mdl-list__item-primary-content">
                      <FormElements.InputText id="title"
                                              onChange={ this._onChange }
                                              label={ 'Tytuł wiadomości' }
                                              style={ { width: "100%" } } />
                    </div>
                  </li>
                  <li className="mdl-list__item">
                    <div className="mdl-list__item-primary-content">
                      <FormElements.InputTextArea id="body"
                                                  onChange={ this._onChange }
                                                  label={ 'Treść wiadomości' }
                                                  style={ { width: "100%" } } />
                    </div>
                  </li>
                </ul>
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--2-col">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                            onClick={ this._onDialogAccept }>
                      Wyślij
                    </button>
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

NewMessage.contextTypes = {
  router: React.PropTypes.object.isRequired,
  location() {
    React.PropTypes.func.isRequired
  }
}