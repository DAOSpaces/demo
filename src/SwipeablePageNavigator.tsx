import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import TaskBoard from './TaskBoard';

const pages = [
  [<TaskBoard/>, 'page2', 'page3'],
  ['page4', 'page5', 'page6'],
  ['page7', 'page8', 'page9']
];

function SwipeablePageNavigator() {
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  console.log("SPN", currentX, currentY);

  const bind = useGesture({
    onMove: ({ offset: [x, y], delta: [dx, dy] }) => {
        console.log(x,y,dx,dy);
      if (dy < -50) {
        setCurrentY((currentY + 1) % pages.length);
      }
      if (dy > 50) {
        setCurrentY((currentY - 1 + pages.length) % pages.length);
      }
      if (dx > 50) {
        setCurrentX((currentX + 1) % pages[currentY].length);
      }
      if (dx < -50) {
        setCurrentX((currentX - 1 + pages[currentY].length) % pages[currentY].length);
      }
    },
  });

  return (
    <div className="SwipeablePageNavigator" {...bind()}>
        {pages[currentY][currentX]}
    </div>
  );
}

export default SwipeablePageNavigator;
