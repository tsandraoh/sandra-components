import { DefaultOptionType } from 'antd/es/cascader';
import { TreeSelectProps } from 'antd/es/tree-select';

export function normalizeSelectData(
  iLabelKey: string,
  iValueKey: string,
  initData: Array<{ [key: string]: any }>,
): { label: string; value: number | string }[] {
  return (initData || []).map((ele) => ({
    label: ele[iLabelKey],
    value: ele[iValueKey],
  }));
}
//
export interface InitTreeNode {
  id: number;
  name: string;
  children: InitTreeNode[];
}

export function normalizeDataForCascader(
  originData: InitTreeNode[],
): DefaultOptionType[] {
  return (originData || []).map((node) => {
    const { id, name, children } = node;
    const newChildren = normalizeDataForCascader(children || []);
    return {
      label: name,
      value: id,
      children: newChildren,
    };
  });
}

export function normalizeDataForTreeSelect(
  originData: InitTreeNode[],
): TreeSelectProps[] {
  return (originData || []).map((node) => {
    const { id, name, children } = node;
    const newChildren: TreeSelectProps[] = normalizeDataForTreeSelect(
      children || [],
    );
    return {
      title: name,
      value: id,
      key: id,
      children: newChildren,
    };
  });
}
