import React from 'react';
import { connect } from 'react-redux';

const List = (props) => (
  <table>
    <thead>
      <tr>
        <th>Original</th>
        <th>Translations</th>
      </tr>
    </thead>
    <tbody>
      {props.translations.map(({ original, translation }, i) => (
        <tr key={i}>
          <td>{original}</td>
          <td>{translation}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

function mapStateToProps({translations}) {
  return {
    translations,
  }
}

export default connect(mapStateToProps)(List);