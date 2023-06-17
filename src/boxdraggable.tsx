import * as React from 'react';
import { useState } from 'react';
import { useXarrow } from 'react-xarrows';
import Draggable from 'react-draggable';
import ContentEditable from 'react-contenteditable';
import ButtonTray from './buttontray';

const style_box = {
  position: 'absolute',
  display: 'table',
  border: 'none',
  borderRadius: '10px',
  width: '120px',
  height: '60px',
  padding: '15px',
  //paddingTop: '15px',
  margin: '0px',
  backgroundColor: 'rgba(80, 200, 80, 0.9)',
  boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
};

const style_shape = [];
style_shape.push({ ...style_box });

style_shape.push({ ...style_box });
style_shape[style_shape.length - 1].height = ' 120px';
style_shape[style_shape.length - 1].borderRadius = '50%';

const style_row = {
  display: 'table-row',
  border: 'none',
  padding: '0px',
};

const style_cell = {
  display: 'table-cell',
  verticalAlign: 'middle',
  border: 'none',
  padding: '0px',
  margin: '0px',
};

const style_title = {
  backgroundColor: 'rgba(255,255,255,0.3)',
  textAlign: 'center',
  border: 'none',
  fontSize: '14px',
  padding: '6px',
  margin: '0px',
};

const style_description = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  textAlign: 'center',
  border: 'none',
  fontSize: '11px',
  padding: '2px',
  margin: '0px',
};

export default function BoxDraggable({
  name,
  title,
  description,
  onArrowClick,
  arrowActive,
  onCloseClick
}) {
  const updateXarrow = useXarrow();
  const [localTitle, setTitle] = useState<string>(title);
  const [localDescription, setDescription] = useState<string>(description);
  const cancelDrag = '.title, .description, .button_arrow, .button_shape';
  const [shape, setShape] = useState(0);
  const handleShape = () => {
    if (shape < style_shape.length - 1) {
      setShape(shape + 1);
    } else {
      setShape(0);
    }
  };
  return (
    <Draggable
      onDrag={updateXarrow}
      onStop={updateXarrow}
      defaultPosition={{
        x: window.innerWidth / 2 - 60,
        y: window.innerHeight / 2 - 60,
      }}
      cancel={cancelDrag}
    >
      {/* <div style={style_outer}> */}
      <div id={name} style={style_shape[shape]}>
        <div style={style_row}>
          <div style={style_cell}>
            <ButtonTray
              onArrowClick={onArrowClick}
              arrowActive={arrowActive}
              name={name}
              onShapeClick={handleShape}
              onCloseClick={onCloseClick}
            />
            <ContentEditable
              className="title"
              disabled={false}
              html={localTitle}
              style={style_title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ContentEditable
              className="description"
              disabled={false}
              html={localDescription}
              style={style_description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </Draggable>
  );
}
