import { TreeSelect } from 'antd';
import { TreeSelectProps } from 'antd/es/tree-select';
import React, { type FC } from 'react';
import {
  InitTreeNode,
  normalizeDataForTreeSelect,
} from 'sandra-components/tools';

type Props = TreeSelectProps & {
  originData?: InitTreeNode[];
};

const App: FC<Props> = ({ originData, ...rest }) => {
  const targetTreeData =
    originData !== undefined
      ? normalizeDataForTreeSelect(originData)
      : rest?.treeData || [];
  return (
    <TreeSelect
      showSearch
      dropdownStyle={{ maxHeight: 600, overflow: 'auto' }}
      placeholder="请选择"
      allowClear
      showCheckedStrategy="SHOW_PARENT"
      treeDefaultExpandAll
      treeData={targetTreeData}
      filterTreeNode={(inputValue, treeNode) =>
        treeNode && (treeNode.title as string).includes(inputValue)
      }
      {...rest}
    />
  );
};

export default App;
