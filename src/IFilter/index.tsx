import { QueryFilter, QueryFilterProps } from '@ant-design/pro-form';
import { Form } from 'antd';
import React, { type FC } from 'react';
import { FormControl } from 'sandra-components/config';
import { Field } from 'sandra-components/definition';

interface Props extends QueryFilterProps {
  config: Field[];
}
const IFilter: FC<Props> = (props) => {
  const [form] = Form.useForm();

  // const handleSearch = async (values: any) => {
  //   form.validateFields().then(() => {
  //     console.log(values, '----get--formValues');
  //   })
  // };

  const handleReset = (values: any) => {
    console.log(values, '----reset--formValues');
  };

  return (
    <QueryFilter form={form} onReset={handleReset} {...props}>
      {(props.config || []).map((item, idx) => (
        <Form.Item label={item.label} name={item.name} key={idx}>
          <FormControl {...item} />
        </Form.Item>
      ))}
    </QueryFilter>
  );
};

export default IFilter;
