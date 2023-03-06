import { CloseOutlined } from '@ant-design/icons';
import { Col, Input, Row, Tree } from 'antd';
import React, { useMemo, useState, type FC } from 'react';
import { InitTransferData } from 'sandra-components/data';
import { normalizeDataForTree } from 'sandra-components/tools';
import './index.less';

interface Item {
  id: string;
  name: string;
}

const ITransfer: FC = () => {
  const [selectedShops] = useState<Item[]>([]);
  const [keyWord, setKeyWord] = useState<string>();
  const [treeData] = useState(normalizeDataForTree(InitTransferData));

  const targetTreeData = useMemo(() => {
    return treeData;
  }, [keyWord, treeData]);

  // const onCheck = (checkedKeys: string[], info) => {
  //   console.log(checkedKeys: string[], info);

  // };

  return (
    <div>
      <Row className="info-area">
        <Col span={12}>
          <Input.Search
            allowClear
            value={keyWord}
            onSearch={(v: string) => setKeyWord(v)}
          />
          <div className="overflow-col">
            <Tree
              checkable
              defaultExpandAll
              className="tree-select-width"
              treeData={targetTreeData}
            />
          </div>
        </Col>
        <Col span={12}>
          <Row justify={'space-between'} align="middle" className="list-col">
            <span>
              已选&nbsp;
              <span className="title">{(selectedShops || []).length}</span>
              &nbsp;家门店
            </span>
            <a onClick={() => {}}>全部删除</a>
          </Row>
          <div className="overflow-col">
            {(selectedShops || []).map((shop, index: number) => (
              <Row justify="space-between" key={index}>
                <div className="flex-1">{shop.name}</div>
                <CloseOutlined
                  style={{ width: 20 }}
                  width={12}
                  height={12}
                  // onClick={() => deleteSelectShopId(v.key)}
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
