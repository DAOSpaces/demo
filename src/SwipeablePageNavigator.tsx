import React, { useState } from 'react';
import { useDrag, useGesture } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web'
import TaskBoard from './TaskBoard';
import './SwipeablePageNavigator.css';

const pages = [
  [<TaskBoard/>, 'page2', 'page3'],
  ['page4', 'page5', 'page6'],
  ['page7', 'page8', 'page9']
];

const visualViewport = window?.visualViewport ?? {width: 200, height: 200};

function SwipeablePageNavigator() {
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [offsetStyle, setOffsetStyle] = useState("");

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const bind = useDrag(
    ({ down, movement: [mx, my] }) => {
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
        console.log(mx,my)
    //   if (my < visualViewport.height / 2) {
    //     setCurrentY((currentY + 1) % pages.length);
    //   }
    //   if (my > visualViewport.height / 2) {
    //     setCurrentY((currentY - 1 + pages.length) % pages.length);
    //   }
    //   if (mx > visualViewport.width / 2) {
    //     setCurrentX((currentX + 1) % pages[currentY].length);
    //   }
    //   if (mx < visualViewport.width / 2) {
    //     setCurrentX((currentX - 1 + pages[currentY].length) % pages[currentY].length);
    //   }

      setOffsetStyle(`translate(${Math.round(x.get())}px, ${Math.round(y.get())}px)`);
    },
    { axis: 'lock' }
  );

  return (
    <div className="SwipeablePageNavigator" {...bind()}>
        <div style={{transform: offsetStyle}}>
            {pages[currentY][currentX]}
        </div>
    </div>
  );
}

export default SwipeablePageNavigator;
