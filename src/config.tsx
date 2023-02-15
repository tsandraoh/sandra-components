import { DatePicker, Input } from 'antd';
import React from 'react';
import { Field } from './definition';
import ICascader from './ICascader';
import IRadio from './IRadio';
import ISelect from './ISelect';
import ITreeSelect from './ITreeSelect';

const ItemMap = {
  input: Input,
  radio: IRadio,
  select: ISelect,
  cascader: ICascader,
  treeSelect: ITreeSelect,
  datePicker: DatePicker,
};

export function FormControl(
  field: Field & { value?: any; onChange?: (value: any) => void },
) {
  const { type, fieldProps, value, onChange } = field;
  const ItemField = ItemMap[type];
  return <ItemField value={value} onChange={onChange} {...fieldProps} />;
}

export default {
  // FieldsConfig,
  FormControl,
};
