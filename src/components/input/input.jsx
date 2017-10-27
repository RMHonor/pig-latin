import React, { Component } from 'react';
import { connect } from 'react-redux';

import translate from '../../actions/translate';

import './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.translate(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <form className="field" onSubmit={this.onSubmit}>
        <label className="field__label" htmlFor="input">
          Enter text to translate
        </label>
        <input className="field__input" type="text" name="input" onChange={this.updateInputValue} value={this.state.inputValue}/>
        <button type="submit" className="field__submit">Translate</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    translate: val => dispatch(translate(val)),
  };
}

export default connect(null, mapDispatchToProps)(Input);