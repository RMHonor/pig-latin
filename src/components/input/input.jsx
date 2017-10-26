import React from 'react';
import { connect } from 'react-redux';

const Input = (props) => (
  <div className="field">
    <label className="field__label">
      Enter text to translate
      <input className="field__input" type="text" onSubmit={(val) => props.submit(val)}/>
    </label>
  </div>
);

export default connect(null, null)(Input);