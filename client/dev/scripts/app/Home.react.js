import React from 'react';
import Card from '../modules/Forms/Card.react'
import PhoneNumbers from './Home/Components/PhoneNumbers.react'

const styles = {
  fullPageWidth: {
    width: "100%",
  },
}

const alarmPhoneNumbers = [
  {
    label: 'Pogotowie ratunkowe',
    value: '999 / 112',
  },
  {
    label: 'Straż pożarna',
    value: '998 / 112',
  },
  {
    label: 'Policja',
    value: '997 / 112',
  },
  {
    label: 'Pogotowie Gazowe',
    value: ['992', '426-745-523'],
  },
  {
    label: 'Policja',
    value: '997 / 112',
  },
]

const technicalHelpPhoneNumbers = [
  {
    label: 'Brama wjazdowa',
    value: '426-487-867'
  },
  {
    label: 'Domofon',
    value: '426-425-729'
  },
  {
    label: 'Kotłownia',
    value: '501-762-277'
  },
  {
    label: 'Monitoring',
    value: '426-391-888'
  }, {
    label: 'PKP Energetyka',
    value: ['697-040-240', '422-055-375']
  },
]

export default class Information extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing" style={ styles.fullPageWidth }>
        <div className="mdl-cell mdl-cell--9-col">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
              <Card title="Numery alarmowe" footer={ (<div></div>)}>
                <PhoneNumbers sectionElements={ alarmPhoneNumbers } />
              </Card>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <Card title="Pomoc techniczna" footer={ (<div></div>)}>
                <PhoneNumbers sectionElements={ technicalHelpPhoneNumbers } />
              </Card>
            </div>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--3-col">
          <div className="mdl-grid">1</div>
        </div>
      </div>
    )
  }
}