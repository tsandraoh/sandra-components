# TreeSelect

- treeselect 选择器。

### 何时使用

- 待定

### 代码演示

```jsx
/**
 * title: 'demo_1'
 */

import { ITreeSelect } from 'sandra-components';

const orgData = [
  {
    id: 1001,
    name: 'node',
    children: [
      {
        id: 2001,
        name: 'node_1',
        children: [
          {
            id: '200101',
            name: 'node_1_1',
          },
          {
            id: '200102',
            name: 'node_1_2',
          },
        ],
      },
      {
        id: 2002,
        name: 'node_2',
        children: [
          {
            id: '20021',
            name: 'node_2_1',
          },
          {
            id: '20022',
            name: 'node_2_2',
          },
          {
            id: '20023',
            name: 'node_2_3',
          },
        ],
      },
    ],
  },
];

const onChange = (value: string[]) => {
  console.log(value, '-----value');
};

const App: React.FC = () => (
  <ITreeSelect
    showSearch
    treeCheckable
    style={{ width: 318 }}
    originData={orgData}
    onChange={onChange}
  />
);

export default App;
```
