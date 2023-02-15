import { Button, Form, FormProps } from 'antd';
import React, { type FC } from 'react';
import { FormControl } from 'sandra-components/config';
import { Field } from 'sandra-components/definition';

interface Props extends FormProps {
  config: Field[];
}

const IBasicForm: FC<Props> = (props) => {
  const [form] = Form.useForm();

  const validateMessages = {
    required: '${label} 值不能为空',
    // https://github.com/react-component/field-form/blob/master/src/utils/messages.ts
  };

  return (
    <Form form={form} validateMessages={validateMessages} {...props}>
      {(props.config || []).map((item, idx) => (
        <Form.Item
          label={item.label}
          name={item.name}
          key={idx}
          rules={[{ required: true }]}
          {...item.itemProps}
        >
          <FormControl {...item} />
        </Form.Item>
      ))}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default IBasicForm;
