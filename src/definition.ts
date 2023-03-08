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

export interface Node {
  title: string;
  key: string | number;
  value: string | number;
  disabled?: boolean;
  children?: Node[];
}
