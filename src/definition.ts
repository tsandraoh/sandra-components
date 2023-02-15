import { FormItemProps } from 'antd';
export type FieldType =
  | 'input'
  | 'select'
  | 'cascader'
  | 'radio'
  | 'treeSelect'
  | 'datePicker';

export interface Field {
  label: string;
  name: string;
  type: FieldType;
  // 自定义组件 props
  fieldProps?: any;
  // form item props
  itemProps?: FormItemProps;
}
