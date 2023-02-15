# Radio

单选选择器。

### 何时使用

- 弹出一个下拉菜单给用户选择操作，可根据名称和内部 value 搜索筛选，快速定位目标数据。
- 当选项少时（大于 5 项），建议直接将选项下拉，使用 ISelect 是更好的选择。

### 参考业务场景

- 选择--

### 代码演示

```jsx
import { IRadio } from 'sandra-components';

const orgData = [
  { cName: 'keep', cKey: 1 },
  { cName: 'early', cKey: 2 },
  { cName: 'hours', cKey: 3 },
  { cName: 'hello', cKey: 4 },
  { cName: 'word', cKey: 5 },
];

const App: React.FC = () => (
  <IRadio originData={orgData} iLabelKey="cName" iValueKey="cKey" />
);

export default App;
```
