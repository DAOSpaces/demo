import React, { useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import { animated, useSprings } from '@react-spring/web'
import TaskBoard from './TaskBoard';
import { Utils } from './Utils';

import styles from './Viewpager.module.css'

function Viewpager() {
  const pages = [
  <TaskBoard date={new Date()} tasks={[
    { id: 1, title: 'Take out the trash', text: '', time: '12:00' },
    { id: 2, title: 'Get Groceries', text: 'Publix', time: 'Today' },
    { id: 3, title: 'Work on project', text:"", time:'' }]}/>, 
  <TaskBoard date={Utils.addDays(new Date(),1)} tasks={[
    { id: 1, title: 'Sit around all day', text:"", time:'' }]}/>, 
  <TaskBoard date={Utils.addDays(new Date(),2)} tasks={[
    { id: 1, title: 'One', text:"", time:'' },
    { id: 2, title: 'Two', text:"", time:'' },
    { id: 3, title: 'Three', text:"", time:'' },
    { id: 1, title: 'Four', text:"", time:'' },
    { id: 2, title: 'Five', text:"", time:'' },
    { id: 3, title: 'Six', text:"", time:'' }
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
