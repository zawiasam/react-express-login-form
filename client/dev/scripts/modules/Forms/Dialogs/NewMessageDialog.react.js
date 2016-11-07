import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplate from 'react-autocomplete'
import ModalDialog from '../../Commons/Dialogs/ModalDialog.react'
import * as FormElements from '../../Commons/FormElements.react'

export default class NewMessageDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'Ma' }
    this._dialogHandler = this._dialogHandler.bind(this);
  }

  _dialogHandler(obj) {
    if (this.props.onClosing) {
       this.props.onClosing(obj);
    }
    ReactDOM.unmountComponentAtNode(document.getElementById("dialog"))
  }

  componentDidMount() {
    let component = this;
    document.querySelector("#btn-new_message").addEventListener('click', function(params) {
        ReactDOM.render( <ModalDialogMessage onClosing={component._dialogHandler} />
          , document.getElementById("dialog"), ()=>{ componentHandler.upgradeDom() })
    })
  }

  render() {
    return (<div style={{display: "none"}}/>  )
  }
}

NewMessageDialog.propTypes = {
  onClosing: React.PropTypes.func,
}


function getStates() {
  return [
    { abbr: "AL", name: "Alabama"},
    { abbr: "AK", name: "Alaska"},
    { abbr: "AZ", name: "Arizona"},
    { abbr: "AR", name: "Arkansas"},
    { abbr: "CA", name: "California"},
    { abbr: "CO", name: "Colorado"},
    { abbr: "CT", name: "Connecticut"},
    { abbr: "DE", name: "Delaware"},
    { abbr: "FL", name: "Florida"},
    { abbr: "GA", name: "Georgia"},
    { abbr: "HI", name: "Hawaii"},
    { abbr: "ID", name: "Idaho"},
    { abbr: "IL", name: "Illinois"},
    { abbr: "IN", name: "Indiana"},
    { abbr: "IA", name: "Iowa"},
    { abbr: "KS", name: "Kansas"},
    { abbr: "KY", name: "Kentucky"},
    { abbr: "LA", name: "Louisiana"},
    { abbr: "ME", name: "Maine"},
    { abbr: "MD", name: "Maryland"},
    { abbr: "MA", name: "Massachusetts"},
    { abbr: "MI", name: "Michigan"},
    { abbr: "MN", name: "Minnesota"},
    { abbr: "MS", name: "Mississippi"},
    { abbr: "MO", name: "Missouri"},
    { abbr: "MT", name: "Montana"},
    { abbr: "NE", name: "Nebraska"},
    { abbr: "NV", name: "Nevada"},
    { abbr: "NH", name: "New Hampshire"},
    { abbr: "NJ", name: "New Jersey"},
    { abbr: "NM", name: "New Mexico"},
    { abbr: "NY", name: "New York"},
    { abbr: "NC", name: "North Carolina"},
    { abbr: "ND", name: "North Dakota"},
    { abbr: "OH", name: "Ohio"},
    { abbr: "OK", name: "Oklahoma"},
    { abbr: "OR", name: "Oregon"},
    { abbr: "PA", name: "Pennsylvania"},
    { abbr: "RI", name: "Rhode Island"},
    { abbr: "SC", name: "South Carolina"},
    { abbr: "SD", name: "South Dakota"},
    { abbr: "TN", name: "Tennessee"},
    { abbr: "TX", name: "Texas"},
    { abbr: "UT", name: "Utah"},
    { abbr: "VT", name: "Vermont"},
    { abbr: "VA", name: "Virginia"},
    { abbr: "WA", name: "Washington"},
    { abbr: "WV", name: "West Virginia"},
    { abbr: "WI", name: "Wisconsin"},
    { abbr: "WY", name: "Wyoming"}
  ]
}

function matchStateToTerm (state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
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

class ModalDialogMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      message: '',
    }

    this._onDialogClose = this._onDialogClose.bind(this);
    this._onChange = this._onChange.bind(this);
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
              inputProps={ { name: "US state", id: "states-autocomplete" } } 
              items={ getStates() } 
              getItemValue={ (item) => item.name } 
              shouldItemRender={ matchStateToTerm }
              // sortItems={ sortStates } 
              onChange={ (event, value) => this.setState({ value }) } 
              onSelect={ value => this.setState({ value }) }
              renderItem={ (item, isHighlighted) => ( <div style={ isHighlighted ? styles.highlightedItem : styles.item } key={ item.abbr }>
                                                        { item.name }
                                                      </div> ) } 
            />
            <FormElements.InputText id="title" onChange={this._onChange } />
            <FormElements.InputTextArea id="message" onChange={ this._onChange } />
          </form>
        </ModalDialog>)
  }
}
ModalDialogMessage.propTypes ={
  onClosing: React.PropTypes.func,
}
