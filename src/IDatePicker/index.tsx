import { DatePicker } from 'antd';
import React, { type FC } from 'react';

interface Props {
  value?: any;
}

const IDatePicker: FC<Props> = () => {
  return <DatePicker></DatePicker>;
};

export default IDatePicker;
