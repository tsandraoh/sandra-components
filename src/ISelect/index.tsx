import { Select, SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { type FC } from 'react';
import { normalizeSelectData } from 'sandra-components/tools';

interface Props extends SelectProps {
  iLabelKey?: string;
  iValueKey?: string;
  originData?: Array<{ [key: string]: any }>;
}

const ISelect: FC<Props> = ({ iLabelKey, iValueKey, originData, ...rest }) => {
  const targetOptions: DefaultOptionType[] | undefined =
    iLabelKey && iValueKey && originData
      ? normalizeSelectData(iLabelKey, iValueKey, originData)
      : rest?.options;
  return (
    <Select allowClear placeholder="请选择" {...rest} options={targetOptions} />
  );
};

export default ISelect;
