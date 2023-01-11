import React, { useRef, useState } from 'react';
import { useDrag, useGesture } from '@use-gesture/react';
import { animated, useSpring, useSprings } from '@react-spring/web'
import TaskBoard from './TaskBoard';
import { Utils } from './Utils';

import styles from './Viewpager.module.css'
import Task from './Task';

function Viewpager() {
  const pages = [
  <TaskBoard tasks={[
    { id: 1, text: 'Take out the trash' },
    { id: 2, text: 'Buy groceries' },
    { id: 3, text: 'Work on project' }]}/>, 
  <TaskBoard tasks={[
    { id: 1, text: 'Sit around all day' }]}/>, 
  <TaskBoard tasks={[
    { id: 1, text: 'One' },
    { id: 2, text: 'Two' },
    { id: 3, text: 'Three' },
    { id: 1, text: 'Four' },
    { id: 2, text: 'Five' },
    { id: 3, text: 'Six' }
  ]}/>
];

  const index = useRef(0)
  const width = window.innerWidth

  const [props, api] = useSprings(pages.length, i => ({
    x: i * width,
    scale: 1,
    display: 'block',
  }))
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    if (active && Math.abs(mx) > width / 2) {
      index.current = Utils.clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
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
