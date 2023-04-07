# IDatePicker

选择器。

### 何时使用

- 日期选择

### 参考业务场景

- 选择

### 代码演示

```jsx
import { IDatePicker } from 'sandra-components';

const App: React.FC = () => (
  <IDatePicker
    onChange={(value) => {
      console.log(value, '-------value');
    }}
  />
);

export default App;
```
