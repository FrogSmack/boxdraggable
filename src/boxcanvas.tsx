import * as React from 'react';
import { useId, useRef, useState } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import BoxButton from './boxbutton';
import BoxDraggable from './boxdraggable';

type Box = {
  id: number;
  name: string;
  title: string;
  description: string;
};
type Arrow = {
  id: number;
  name: string;
  from: string;
  to: string;
};

export default function BoxCanvas() {
  const [data, setData] = useState<Box[]>([]);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [arrowClick, setArrowClick] = useState<string>(null);

  const addBox = () => {
    setData((prevData) => {
      const thisId =
        data.length == 0 ? 0 : Math.max(...prevData.map((o) => o.id)) + 1; // setting to thisId to the highest id plus one or zero if the first
      return [
        ...prevData,
        {
          id: thisId,
          name: 'Box_' + thisId,
          title: '',
          description: '',
        },
      ];
    });
  };

  const handleArrowClick = (boxName) => {
    if (arrowClick === null) {
      setArrowClick(boxName);
    } else {
      if (arrowClick !== boxName) {
        addArrow({ nameFrom: arrowClick, nameTo: boxName });
      }
      setArrowClick(null);
    }
  };

  const addArrow = ({ nameFrom, nameTo }) => {
    setArrows((prevArrows) => {
      const thisId =
        arrows.length == 0 ? 0 : Math.max(...prevArrows.map((o) => o.id)) + 1; // setting to thisId to the highest id plus one or zero if the first
      return [
        ...prevArrows,
        {
          id: thisId,
          name: 'Arrow_' + thisId,
          from: nameFrom,
          to: nameTo,
        },
      ];
    });
  };

  const removeArrow = (arrowId: number) => {
    setArrows(arrows.filter((arrow) => arrow.id !== arrowId));
  };
  const removeBox = (closeName: string) => {
    setData(data.filter((box) => box.name !== closeName));
    setArrows(arrows.filter((arrow) => (arrow.to!==closeName)&&(arrow.from !== closeName)));
   // setArrows(arrows.filter((arrow) => arrow.to !== closeName));
    console.log(arrows);
    console.log(closeName)
    //remove any arrows that point at removed box
  };

  return (
    <div>
      <BoxButton onClick={addBox} />
      <div style={{ flexbox: 'auto', position: 'absolute', width: '100%' }}>
        <Xwrapper>
          {arrows.map((arrow, index) => (
            <Xarrow
              key={arrow.name}
              start={arrow.from}
              end={arrow.to}
              animateDrawing={true}
              passProps={{
                onDoubleClick: () => {
                  removeArrow(arrow.id);
                },
              }}
            />
          ))}
          {data.map((item, index) => (
            <BoxDraggable
              key={item.name}
              name={item.name}
              title={item.title}
              description={item.description}
              onArrowClick={handleArrowClick}
              arrowActive={arrowClick}
              onCloseClick={removeBox}
            />
          ))}
        </Xwrapper>
      </div>
    </div>
  );
}
