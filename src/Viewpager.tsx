import React, { useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { animated, useSprings } from '@react-spring/web'
import TaskBoard from './TaskBoard';
import { Utils } from './Utils';

import styles from './Viewpager.module.css'
import Task from './Task';

interface ViewpagerProps {
  tasks: Task[],
}

const Viewpager: React.FC<ViewpagerProps> = ({ tasks }) => {
  // Keep track of the current date
  const [date, setDate] = useState(new Date());

  const pages = [
    <TaskBoard date={Utils.subtractDays(date, 1)} tasks={tasks}/>, 
    <TaskBoard date={date} tasks={tasks}/>, 
    <TaskBoard date={Utils.addDays(date, 1)} tasks={tasks}/>
  ];


  const index = useRef(1)
  const width = window.innerWidth

  const [props, api] = useSprings(pages.length, i => ({
    x: (i - 1) * width,
    scale: 1,
    display: 'block',
  }));

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    if (active && Math.abs(mx) > width / 2) {
      // Update the current date based on the swipe direction
      setDate(prevDate => Utils.addDays(prevDate, xDir > 0 ? -1 : 1));
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return (
    <div className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className={styles.page} {...bind()} key={i} style={{ display, x }}>
          {pages[i]}
        </animated.div>
      ))}
    </div>
  )
}

export default Viewpager
