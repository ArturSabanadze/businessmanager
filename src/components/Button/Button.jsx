import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({id="btn_1", label, onClick, style }) => {
  return (
    <button id={id} style={style} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default Button;
