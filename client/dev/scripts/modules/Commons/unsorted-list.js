import React from 'react';

export default React.createClass({
  getInitialState() {
    let items = this.props.items;
    let listOfItems = [];
    items.forEach(function generateUnsortedList(item) {
      listOfItems.push(
        <li className="mdl-list__item" key={Math.random()}>
          {item}
        </li>
      )
    });

    return {listOfItems: listOfItems}
  },

  render() {
    return (
      <ul className="mld-list">
        {this.state.listOfItems}
      </ul>
    );
  }
})