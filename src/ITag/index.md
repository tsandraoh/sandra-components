# ITag

下拉选择器。

### 何时使用

- 弹出一个下拉菜单给用户选择操作，可根据名称和内部 value 搜索筛选，快速定位目标数据。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

### 参考业务场景

- 选择

### 代码演示

```jsx
import { useState } from 'react';
import { ITag } from 'sandra-components';

const initGroups = [
  {
    id: 1,
    text: '标签1',
  },
  {
    id: 2,
    text: '标签2',
  },
  {
    id: 3,
    text: '标签3',
  },
]

interface Item {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [groups, setGroups] = useState<Item[]>(initGroups);

  return  <ITag
    groups={groups}
    setGroups={setGroups}
  />
}

export default App;
```
