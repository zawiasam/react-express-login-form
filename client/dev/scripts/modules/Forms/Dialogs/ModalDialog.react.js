import React from 'react';

function _getDialogId() {
  return this.props.dialogId;
}

function _getOkButtonId() {
  return this._getDialogId() + '-btn-ok-id';
}

function _getShowDialogId() {
  return this._getDialogId() + '-btn-show-id';
}

export default class ModalDialog extends React.Component {
  constructor(props) {
    super(props);

    this._getDialogId = _getDialogId.bind(this);
    this._getOkButtonId = _getOkButtonId.bind(this);
    this._getShowDialogId = _getShowDialogId.bind(this);
  }

  componentDidMount() {
    var dialog = document.querySelector( '#' + this._getDialogId() );
    var showDialogButton = document.querySelector( '#' + this._getShowDialogId());
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
  }

  render() {
    return (
      <div>
        <button id={this._getShowDialogId()} type="button" className="mdl-button">Show Dialog</button>
        <dialog className="mdl-dialog" id={this._getDialogId()}>
          <h4 className="mdl-dialog__title">Allow data collection?</h4>
          <div className="mdl-dialog__content">
            <p>
              Allowing us to collect data will let us get you the information you want faster.
            </p>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button">Agree</button>
            <button type="button" className="mdl-button close">Disagree</button>
          </div>
        </dialog>
      </div>
    )
  }
}

ModalDialog.propTypes = {
  dialogId: React.PropTypes.string,
  showButtonId: React.PropTypes.string,
  onClose: React.PropTypes.func
}
