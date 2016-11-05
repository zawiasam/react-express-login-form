import React from 'react'
import ModalDialog from '../../Commons/Dialogs/ModalDialog.react'
import * as FormElements from '../../Commons/FormElements.react'


export default class NewMessageDialog extends React.Component {
  constructor(props) {
    super(props)
    this._dialogHandler = this._dialogHandler.bind(this);
  }

  _dialogHandler(obj) {
    if (this.props.onClosing) {
      return this.props.onClosing(obj);
    }
  }

  render() {
    return (
      <ModalDialog 
        onClosing={ this._dialogHandler }
        title="Is it good to have title?"
        useThisOpenButton="btn-new_message">
        <form>
          <FormElements.InputText id="blabla" />
          <FormElements.InputTextArea id="newMessageContent" />
        </form>
      </ModalDialog>
    )
  }
}

NewMessageDialog.propTypes = {
  onClosing: React.PropTypes.func,
}