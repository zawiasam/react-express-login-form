import React from 'react'
import ReactDOM from 'react-dom'
import NewMessage from './NewMessage.react'

export default class NewMessageWrapper extends React.Component {
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
        ReactDOM.render( <NewMessage onClosing={component._dialogHandler} />
          , document.getElementById("dialog"), ()=>{ componentHandler.upgradeDom() })
    })
  }

  render() {
    return (<div style={{display: "none"}}/>  )
  }
}

NewMessageWrapper.propTypes = {
  onClosing: React.PropTypes.func,
}
