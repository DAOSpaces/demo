import { useRef } from 'react'
import { useSprings, animated, config } from '@react-spring/web'
import { useDrag } from '@use-gesture/react';
import { Utils } from './Utils'

interface DraggableListProps<T> {
    items: T[];
}

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * 100 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === 'zIndex',
          config: (key: string) => (key === 'y' ? config.stiff : config.default),
        }
      : {
          y: order.indexOf(index) * 100,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        }

function DraggableList<T extends React.ReactNode>({ items }: DraggableListProps<T>) {
  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = Utils.clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = Utils.swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })

  return (
    <div>
      {items.map((item, i) => (
        <animated.div className={'drag'} {...bind(i)} key={i} children={item} />
      ))}
    </div>
  )
}

export default DraggableList;
