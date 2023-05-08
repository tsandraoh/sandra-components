import { PlusOutlined } from '@ant-design/icons';
import { Input, InputRef, message, Space, Tag, Tooltip } from 'antd';
import update from 'immutability-helper';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card } from './provider';

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

const Groups: React.FC<any> = ({ groups, setGroups }) => {
  const tags: Item[] = groups;
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState<string>('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const onDelete = (removedTagId: number) => {
    console.log(removedTagId, '----removedTagId');

    // setGroups
    // { id: removedTagId }
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddByBlur = () => {
    setInputVisible(false);
    setInputValue('');
  };

  const handleInputConfirm = () => {
    const iValue = inputValue.replaceAll(' ', '');
    if (iValue) {
      if (tags.findIndex(({ text }) => text === iValue) !== -1) {
        return message.error('标签名称不能重复');
      } else {
        // return addGroup({ regionId: id, name: inputValue });
        // setGroups
        setInputVisible(false);
        setInputValue('');
        return;
      }
    } else return message.error('标签名称不能为空');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditByBlur = () => {
    setEditInputIndex(-1);
    setInputValue('');
  };

  const handleEditInputConfirm = () => {
    const iValue = editInputValue.replaceAll(' ', '');
    if (iValue) {
      if (tags.findIndex(({ text }) => text === iValue) !== -1) {
        return message.error('标签名称不能重复');
      } else {
        // return updateGroup({ regionId: id, name: editInputValue, id: editTagId });
      }
    } else return message.error('标签名称不能为空');
    setEditInputIndex(-1);
    setInputValue('');
  };

  const tagInputStyle: React.CSSProperties = {
    width: 78,
    verticalAlign: 'top',
  };

  const tagPlusStyle: React.CSSProperties = {
    // background: 'pink',
    borderStyle: 'dashed',
    padding: '0.5rem 1rem',
  };

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setGroups((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    );
  }, []);

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          handleClose={onDelete}
          setEditInputIndex={setEditInputIndex}
          setEditInputValue={setEditInputValue}
        />
      );
    },
    [],
  );

  return (
    <Space size={[0, 8]} wrap>
      <DndProvider backend={HTML5Backend}>
        <Space size={[0, 8]} wrap>
          {tags.map(({ text, id }, index) => {
            if (editInputIndex === index && id !== 0) {
              return (
                <Input
                  ref={editInputRef}
                  key={id}
                  size="small"
                  style={tagInputStyle}
                  value={editInputValue}
                  onChange={handleEditInputChange}
                  onBlur={handleEditByBlur}
                  onPressEnter={() => handleEditInputConfirm()}
                />
              );
            }
            const isLongTag = text.length > 8;
            const tagElem = renderCard(
              { text: `${isLongTag ? `${text.slice(0, 8)}...` : text}`, id },
              index,
            );
            return isLongTag ? (
              <Tooltip title={text} key={id}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
        </Space>
      </DndProvider>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleAddByBlur}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} onClick={showInput}>
          <PlusOutlined /> 添加
        </Tag>
      )}
    </Space>
  );
};

export default Groups;
