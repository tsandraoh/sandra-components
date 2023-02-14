import { Radio, RadioGroupProps } from 'antd';
import React, { type FC } from 'react';
import { normalizeSelectData } from '/Users/tnn/Desktop/myProject/sandra-components/src/tools';

interface Props extends RadioGroupProps {
  iLabelKey?: string;
  iValueKey?: string;
  originData?: Array<{ [key: string]: any }>;
}

const IRadio: FC<Props> = ({ iLabelKey, iValueKey, originData, ...rest }) => {
  const targetOptions: any[] =
    iLabelKey && iValueKey && originData
      ? normalizeSelectData(iLabelKey, iValueKey, originData)
      : rest?.options || [];

  return (
    <Radio.Group
      defaultValue={'null'}
      {...rest}
      options={[{ label: '全部', value: 'null' }].concat(targetOptions)}
    ></Radio.Group>
  );
};

export default IRadio;
