import React from 'react';
import { render } from 'react-dom';

export default class UnsortedList extends React.Component {
  render(){
    let items = this.props.items;
    let unsortedListOfItems = [];
    items.forEach(function generateUnsortedList(item) {
      unsortedListOfItems.push(
        <li className="mdl-list__item">
          { item }
        </li>
      );
    });

    return (
      <ul className="mld-list">
        { unsortedListOfItems }
      </ul>
    );
  };
}