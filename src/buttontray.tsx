import * as React from 'react';
const btnDown = 'rgba(255, 191, 0, 1)';

const bgBtnArrow = 'rgba(80, 80, 220, 0.8)';
const bgBtnArrow_hover = 'rgba(80, 80, 220, 1)';
const bgBtnArrow_on = 'rgba(80, 220, 80, 1)';

const bgBtnShape = 'rgba(80, 80, 80, 0.8)';
const bgBtnShape_hover = 'rgba(80, 80, 80, 1)';

const bgBtnClose = 'rgba(220, 80, 80, 0.8)';
const bgBtnClose_hover = 'rgba(220, 80, 80, 1)';

const style_button_tray = {
  border: 'black solid 0px',
  position: 'absolute',
  top: '3px',
  right: '3px',
};
const style_button = {
  backgroundColor: 'rgba(80, 80, 80, 0.8)',
  color: 'white',
  border: 'white solid 1px',
  height: '15px',
  width: '15px',
  padding: '0px',
  borderRadius: '50%',
  // fontSize: '1px',
  cursor: 'pointer',
};
const style_button_arrow_set = {
  off: { ...style_button },
  on: { ...style_button },
};
style_button_arrow_set.off.backgroundColor = bgBtnArrow;
style_button_arrow_set.on.backgroundColor = bgBtnArrow_on;

const style_button_shape = { ...style_button };

const style_button_close = { ...style_button };
style_button_close.backgroundColor = bgBtnClose;

export default function ButtonTray({
  onArrowClick,
  arrowActive,
  name,
  onShapeClick,
  onCloseClick
}) {
  const style_button_arrow =
    arrowActive == name
      ? style_button_arrow_set.on
      : style_button_arrow_set.off;
  return (
    <div style={style_button_tray}>
      <button
        className="button_arrow"
        style={style_button_arrow}
        onClick={() => onArrowClick(name)}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = bgBtnArrow_hover;
        }}
        onMouseLeave={(e) => {
          if (arrowActive != name) {
            e.target.style.backgroundColor = bgBtnArrow;
          }
        }}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = btnDown;
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = bgBtnArrow;
        }}
      ></button>
      <button
        className="button_shape"
        style={style_button_shape}
        onClick={() => onShapeClick()}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = bgBtnShape_hover;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = bgBtnShape;
        }}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = btnDown;
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = bgBtnShape;
        }}
      ></button>
      <button className="button_shape" onClick={()=> onCloseClick(name)} style={style_button_close}></button>
    </div>
  );
}
