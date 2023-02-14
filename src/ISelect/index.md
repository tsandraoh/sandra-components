# Select

下拉选择器。

### 何时使用

- 弹出一个下拉菜单给用户选择操作，可根据名称和内部 value 搜索筛选，快速定位目标数据。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

### 参考业务场景

- 选择

### 代码演示

```jsx
import { ISelect } from 'sandra-components';

const orgData = [
  { name: 'sandra', key: 0 },
  { name: 'della', key: 1 },
  { name: 'hello', key: 2 },
  { name: 'word', key: 3 },
  { name: 'ohh', key: 4 },
  { name: 'kelly', key: 5 },
];

const App: React.FC = () => (
  <ISelect
    showSearch
    style={{ width: 218 }}
    originData={orgData}
    placeholder="请选择"
    iLabelKey="name"
    iValueKey="key"
  />
);

export default App;
```
