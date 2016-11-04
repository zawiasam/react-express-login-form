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
      <ModalDialog onClosing={ this._dialogHandler } title="Is it good to have title?">
        <form>
          <FormElements.InputText id="blabla" />
          <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows="3" id="messageBody"></textarea>
            <label className="mdl-textfield__label" htmlFor="messageBody">Treść wiadomości ...</label>
          </div>
        </form>
      </ModalDialog>
    )
  }
}

NewMessageDialog.propTypes = {
  onClosing: React.PropTypes.func,
}