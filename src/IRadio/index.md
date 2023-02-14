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
  { cName: 'keep', ckey: 1 },
  { cName: 'early', ckey: 2 },
  { cName: 'hours', ckey: 3 },
  { cName: 'hello', ckey: 4 },
  { cName: 'word', ckey: 5 },
];

const App: React.FC = () => (
  <IRadio
    optionType="button"
    originData={orgData}
    iLabelKey="cName"
    iValueKey="cKey"
  />
);

export default App;
```
