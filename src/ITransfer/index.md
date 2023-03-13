# Transfer

- 穿梭框。

### 何时使用

- 待定

### 代码演示

```jsx
/**
 * title: 'demo_1'
 */

import { ITransfer } from 'sandra-components';

const InitTransferData = [
  {
    id: 'shanghai',
    name: '上海',
    children: [
      {
        id: 'hongkou',
        name: '虹口',
        children: [
          {
            id: '2001',
            name: '江湾镇',
            children: [
              {
                id: '2001111',
                name: '门店1-1',
              },
              {
                id: '2001222',
                name: '门店1-2',
              },
              {
                id: '2001333',
                name: '门店1-3',
              },
            ],
          },
          {
            id: '2002',
            name: '门店2',
          },
          {
            id: '2003',
            name: '门店3',
          },
        ],
      },
      {
        id: 'pudong',
        name: '浦东新区',
        children: [
          {
            id: '2004',
            name: '门店4',
          },
          {
            id: '2005',
            name: '门店5',
          },
          {
            id: '2006',
            name: '门店6',
          },
        ],
      },
      {
        id: 'jingan',
        name: '静安',
        children: [
          {
            id: '2007',
            name: '门店7',
          },
          {
            id: '2008',
            name: '门店8',
          },
          {
            id: '2009',
            name: '门店9',
          },
        ],
      },
    ],
  },
  {
    id: 'suzhou',
    name: '苏州',
    children: [
      {
        id: 'shangchengqu',
        name: '虎丘区',
        children: [
          {
            id: '20010',
            name: '门店10',
          },
          {
            id: '20011',
            name: '门店11',
          },
          {
            id: '20012',
            name: '门店12',
          },
        ],
      },
    ],
  },
];
const onChange = (value: string[]) => {
  console.log(value, '-----value');
};

const App: React.FC = () => <ITransfer initData={InitTransferData} onChange />;

export default App;
```
