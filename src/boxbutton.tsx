import * as React from 'react';

const style_button = {
  color: 'white',
  height: '50px',
  width: '50px',
  padding: '5px',
  borderRadius: '10px',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: '28px',
  cursor: 'pointer',
  backgroundColor: 'rgba(80, 80, 220, 0.8)',
  zIndex: '1000',
  position: 'absolute',
  outline: 'none',
  border: 'none',
};

export default function BoxButton({ onClick }) {
  //  let style_now = style_button;
  return (
    <button
    className='button_add'
      style={style_button}
      onClick={onClick}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = 'rgba(80, 80, 220, 1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'rgba(80, 80, 220, 0.8)';
      }}
      onMouseDown={(e) => {
        e.target.style.backgroundColor = 'rgba(255, 191, 0, 1)';
      }}
      onMouseUp={(e) => {
        e.target.style.backgroundColor = 'rgba(80, 80, 220, 0.8)';
      }}
    >
      +
    </button>
  );
}
