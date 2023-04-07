# IRangePicker

范围选择器。

### 何时使用

- 日期范围

### 参考业务场景

- 选择

### 代码演示

```jsx
import { IRangePicker } from 'sandra-components';

const App: React.FC = () => (
  <IRangePicker
    unitOfTime={'M'}
    diffNum={2}
    onChange={(value) => {
      console.log(value, '-------value');
    }}
  />
);

export default App;
```
