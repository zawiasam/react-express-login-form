import React from 'react'

export default class Settlement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" style={ { width: "100%" } }>
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Data</th>
            <th>Wpływ</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">2016-01-10</td>
            <td>245 pln</td>
            <td>0 pln</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">2016-02-10</td>
            <td>0 pln</td>
            <td>245 pln</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">2016-03-10</td>
            <td>245 pln</td>
            <td>245 pln</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">2016-04-10</td>
            <td>490 pln</td>
            <td>0 pln</td>
          </tr>
        </tbody>
      </table>
    )
  }
}