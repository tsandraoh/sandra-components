import { DefaultOptionType } from 'antd/es/cascader';
// import { TreeSelectProps } from 'antd/es/tree-select';

interface Node {
  title: string;
  key: string | number;
  value: string | number;
  disabled?: boolean;
  children?: Node[];
}

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
  id: number | string;
  name: string;
  children?: InitTreeNode[];
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

export function normalizeDataForTree(originData: InitTreeNode[]): Node[] {
  return (originData || []).map((node) => {
    const { id, name, children } = node;
    const newChildren: Node[] = normalizeDataForTree(children || []);
    return {
      title: name,
      value: id,
      key: id,
      children: newChildren,
    };
  });
}
