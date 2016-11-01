import React from 'react';

function _getDialogId(ctx) {
  return ctx.state.dialogId;
}

function _getOkButtonId(ctx) {
  return _getDialogId(ctx) + '-btn-ok-id';
}

function _getShowDialogId(ctx) {
  return _getDialogId(ctx) + '-btn-show-id';
}

function _handleDialogAction(dialog, component, actionType) {
      let hasHandler = !!component.props.onClosing;
      let handlerResult = false;

      if (hasHandler) {
        handlerResult = component.props.onClosing({
          action: actionType
        });

        if (typeof(handlerResult) !== "boolean") {
          handlerResult = true;
        }
      }

      if (!hasHandler || handlerResult) {
        dialog.close();
      }
    }

export default class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogId: props.dialogId || new Date().getMilliseconds().toString()
    }
  }

  componentDidMount() {
    let dialog = document.querySelector('#' + _getDialogId(this));
    let showDialogButton = document.querySelector('#' + _getShowDialogId(this));
    let _component = this;

    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });

    dialog.querySelector('.close').addEventListener('click', function dialogCancelClicked(){
      _handleDialogAction(dialog, _component, "cancel");
    });

    dialog.querySelector('.ok').addEventListener('click', function dialogOkClicked(){
      _handleDialogAction(dialog, _component, "ok");
    });
  }

  render() {
    return (
      <div>
        <button id={ _getShowDialogId(this) } type="button" className="mdl-button">Show Dialog</button>
        <dialog className="mdl-dialog" id={ _getDialogId(this) }>
          <h4 className="mdl-dialog__title">{this.props.title}</h4>
          <div className="mdl-dialog__content">
            {this.props.children}
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button ok">Ok</button>
            <button type="button" className="mdl-button close">Anuluj</button>
          </div>
        </dialog>
      </div>
    )
  }
}

ModalDialog.propTypes = {
  dialogId: React.PropTypes.string,
  title: React.PropTypes.string,
  onClosing: React.PropTypes.func
}

ModalDialog.defaultProps = {
  dialogId: "dialog" + new Date().getTime().toString(),
  title: "",
}