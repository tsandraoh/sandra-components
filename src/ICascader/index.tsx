import { Cascader } from 'antd';
import {
  CascaderProps,
  CascaderRef,
  DefaultOptionType,
} from 'antd/es/cascader';
import React, { type FC } from 'react';
import {
  InitTreeNode,
  normalizeDataForCascader,
} from 'sandra-components/tools';

type InitData = InitTreeNode[];

type Props = CascaderProps<DefaultOptionType> & {
  originData: InitData;
  ref?: React.Ref<CascaderRef> | undefined;
};

const filter = (inputValue: string, path: Array<DefaultOptionType>) => {
  return path.some(
    (option: DefaultOptionType) =>
      option.text.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );
};

const App: FC<Props> = ({ originData, ...rest }) => {
  const targetOptions: DefaultOptionType[] =
    originData !== undefined
      ? normalizeDataForCascader(originData)
      : rest?.options || [];

  return (
    <Cascader
      options={targetOptions}
      expandTrigger="hover"
      changeOnSelect
      placeholder="请选择"
      showSearch={{ filter, limit: 9999999999 }}
      {...rest}
    />
  );
};

export default App;
