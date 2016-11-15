import React from 'react'

const styles = {
  section: {
    paddingTop: "5px",
  },
  sectionName: {
    fontSize: "14pt",
    fontWeight: "bold",
    textAlign: "center",
    paddingRigth: "5px",
  },
  sectionElements: {
    label: {
      fontSize: "11pt",
    },
    value: {
      fontSize: "11pt",
      fontWeight: "bold",
    },
  },
}

function handleValue(element) {
  let phoneNumberValues = [];
  if (element.value.constructor.name === "String") {
    phoneNumberValues.push(element.value);
  } else if (element.value.constructor.name === "Array") {
    phoneNumberValues = element.value;
  }
  phoneNumberValues = phoneNumberValues.map(function(item, index) {
    return (
      <div style={ styles.sectionElements.value } key={ index }>
        { item }
      </div>
    )
  })
  return phoneNumberValues;
}

export default class PhoneNumbers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let phoneNumbers = this.props.sectionElements.map(function(element, index) {
      let numberValues = handleValue(element);

      return (
        <div className="mdl-grid mdl-grid--no-spacing" style={ styles.section } key={ index }>
          <div className="mdl-cell mdl-cell--7-col">
            <div style={ styles.sectionElements.label }>
              { element.label }
            </div>
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            { numberValues }
          </div>
        </div>
      )
    })

    return (

      <div className="mdl-cell mdl-cell--12-col">
        { phoneNumbers }
      </div>

    )
  }
}

PhoneNumbers.propTypes = {
  sectionElements: React.PropTypes.array,
}