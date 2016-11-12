import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplate from 'react-autocomplete'
import ModalDialog from '../../modules/Commons/Dialogs/ModalDialog.react'
import AddressBookActions from '../AddressBook/AddressBookActions'
import AddressBookStore from '../AddressBook/AddressBookStore'
import LoginStore from '../Login/LoginStore'
import * as FormElements from '../../modules/Commons/FormElements.react'

export default class NewMessage extends React.Component {
  constructor(props){
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
    if (action.action === 'ok'){
      action.title = this.state.title;
      action.message = this.state.message;
    }
    this.props.onClosing(action);
  }

  render() {
        return (<ModalDialog 
          onClosing={ this._onDialogClose }
          title="Is it good to have title?"
          useThisOpenButton="btn-new_message"
          dialogClassName="mdl-dialog mdl-dialog__new-message">
          <form>
            <AutoComplate 
              menuStyle = { styles.menuStyle }
              value={ this.state.value } 
              inputProps={ { name: "recipient", id: "recipient-autocomplete" } } 
              items={ this.state.addressBookEntries } 
              getItemValue={ (item) => item.name } 
              shouldItemRender={ matchStateToTerm }
              // sortItems={ sortStates } 
              onChange={ (event, value) => this.setState({ value }) } 
              onSelect={ value => this.setState({ value }) }
              renderItem={ (item, isHighlighted) => ( <div style={ isHighlighted ? styles.highlightedItem : styles.item } key={ item.id }>
                                                        { item.name }
                                                      </div> ) } 
            />
            <FormElements.InputText id="title" onChange={this._onChange } />
            <FormElements.InputTextArea id="message" onChange={ this._onChange } />
          </form>
        </ModalDialog>)
  }
}

NewMessage.propTypes ={
  onClosing: React.PropTypes.func,
}

function matchStateToTerm (state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.id.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menuStyle: {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%',
    zIndex: '1' },

  menu: {
    border: 'solid 1px #ccc'
  }
}
