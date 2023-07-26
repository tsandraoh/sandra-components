import { Tag } from 'antd';
import type { Identifier, XYCoord } from 'dnd-core';
import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export const ItemTypes = {
  CARD: 'card',
};

const style = {
  padding: '0.5rem 1rem',
  cursor: 'move',
};

export interface CardProps {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  handleClose: (deleteId: number) => void;
  setEditInputIndex?: any;
  setEditInputValue?: any;
  styles?: any;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card: FC<CardProps> = ({
  id,
  text,
  index,
  moveCard,
  setEditInputIndex,
  setEditInputValue,
  handleClose,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <Tag
      ref={ref}
      style={{ ...style, opacity, userSelect: 'none' }}
      data-handler-id={handlerId}
      {...rest}
      key={id}
      closable
      onClose={() => handleClose(id)}
    >
      <span
        onDoubleClick={(e) => {
          setEditInputIndex(index);
          setEditInputValue(text);
          e.preventDefault();
        }}
      >
        {text}
      </span>
    </Tag>
  );
};
