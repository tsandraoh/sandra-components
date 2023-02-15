# IBasicForm

基础表单演示

### 何时使用

- 今天是个好天气

### 参考业务场景

- 待补充

### 代码演示

```jsx
import { IBasicForm } from 'sandra-components';
import { FieldsConfig } from 'sandra-components/data';

function onFinish(values: any) {
  console.log(values, '-----values');
}

const App: React.FC = () => (
  <IBasicForm
    config={FieldsConfig}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
  />
);

export default App;
```
