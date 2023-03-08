import { CloseOutlined } from '@ant-design/icons';
import { Col, Input, Row, Tree } from 'antd';
import React, { useMemo, useState, type FC } from 'react';
import { InitTransferData } from 'sandra-components/data';
import { Node } from 'sandra-components/definition';
import { normalizeDataForTree } from 'sandra-components/tools';
import './index.less';

interface Item {
  id: string;
  name: string;
}

function matchedNodeByKeyWord(data: Node[], keyWord: string) {
  return data.map(({ title, children, ...rest }: any) => {
    const index = title.indexOf(keyWord);
    const beforeStr = title.substring(0, index);
    const afterStr = title.substring(index + keyWord?.length);
    const titleDom =
      index > -1 ? (
        <span>
          {beforeStr}
          <span className={'treesearchvalue'}>{keyWord}</span>
          {afterStr}
        </span>
      ) : (
        <span>{title}</span>
      );
    const newChildren: any[] = matchedNodeByKeyWord(children, keyWord);
    return {
      ...rest,
      title: titleDom,
      children: newChildren,
    };
  });
}

const ITransfer: FC = () => {
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [keyWord, setKeyWord] = useState<string>();
  const [treeData] = useState(normalizeDataForTree(InitTransferData));

  const targetTreeData = useMemo(() => {
    if (!keyWord) return treeData;
    // function matchedNodeByKeyWord(data: Node[]) {
    //   return (data || []).filter(({ title, children }) => {
    //     matchedNodeByKeyWord(children);
    //     return title.indexOf(keyWord) > -1
    //   })
    // }
    return matchedNodeByKeyWord(treeData, keyWord);
  }, [keyWord, treeData]);

  const selectedShops: Item[] = useMemo(() => {
    if (checkedKeys.length === 0) return [];
    const shops: Item[] = [];
    function matchedSelectNodeByKeys(data: Node[]) {
      (data || []).forEach(({ value, children, title }) => {
        matchedSelectNodeByKeys(children || []);
        if (checkedKeys.includes(value))
          shops.push({ id: value as string, name: title });
      });
    }
    matchedSelectNodeByKeys(treeData);
    return shops;
  }, [checkedKeys]);

  const handleDelete = (key: string) => {
    const index = checkedKeys.findIndex((i) => i === key);
    checkedKeys.splice(index, 1);
    setCheckedKeys([...checkedKeys]);
  };

  return (
    <div>
      <Row className="info" gutter={8}>
        <Col span={12} className="tree-col">
          <Input.Search
            allowClear
            placeholder="请输入名称 按回车搜索"
            onSearch={(v: string) => setKeyWord(v)}
          />
          <div className="overflow-comon">
            <Tree
              checkable
              defaultExpandAll
              className="tree-select-width"
              treeData={targetTreeData}
              checkedKeys={checkedKeys}
              onCheck={setCheckedKeys}
              onSelect={setCheckedKeys}
            />
          </div>
        </Col>
        <Col span={12} className="list-col">
          <Row justify={'space-between'} align="middle" className="list-head">
            <span>
              已选&nbsp;
              <span className="count">{(selectedShops || []).length}</span>
              &nbsp;个
            </span>
            <a onClick={() => setCheckedKeys([])}>全部删除</a>
          </Row>
          <div className="overflow-comon">
            {(selectedShops || []).map((shop, index: number) => (
              <Row justify="space-between" key={index}>
                <div className="flex-1">{shop.name}</div>
                <CloseOutlined
                  className="delete-icon"
                  width={12}
                  height={12}
                  onClick={() => handleDelete(shop.id)}
                />
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ITransfer;
