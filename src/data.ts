import { Field } from './definition';

export const orgLevelData = [
  {
    id: 1001,
    name: 'node',
    children: [
      {
        id: 2001,
        name: 'node_1',
        children: [
          {
            id: '200101',
            name: 'node_1_1',
          },
          {
            id: '200102',
            name: 'node_1_2',
          },
        ],
      },
      {
        id: 2002,
        name: 'node_2',
        children: [
          {
            id: '20021',
            name: 'node_2_1',
            children: [
              {
                id: '200212',
                name: 'node_2_1_1',
              },
              {
                id: '200213',
                name: 'node_2_1_2',
              },
            ],
          },
          {
            id: '20022',
            name: 'node_2_2',
          },
          {
            id: '20023',
            name: 'node_2_3',
          },
        ],
      },
    ],
  },
];

export const orgShopData = [
  {
    id: 1001,
    name: '上海',
    children: [
      {
        id: 2001,
        name: '虹口区',
        children: [
          {
            id: '200101',
            name: '协信星光店',
          },
          {
            id: '200102',
            name: '江湾镇店',
          },
        ],
      },
      {
        id: 2002,
        name: '浦东新区',
        children: [
          {
            id: '20021',
            name: '国金店',
          },
          {
            id: '20022',
            name: '麦德龙店',
          },
        ],
      },
      {
        id: 2003,
        name: '黄浦区',
        children: [
          {
            id: '20031',
            name: '人民广场',
            children: [
              {
                id: '200311',
                name: '世贸店',
              },
              {
                id: '200312',
                name: '新世界城店',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const orgSelectData = [
  { label: '方式一', value: 0 },
  { label: '方式二', value: 1 },
  { label: '方式三', value: 2 },
  { label: '方式四', value: 3 },
  { label: '方式五', value: 4 },
  { label: '方式六', value: 5 },
];

export const orgAmtData = [
  { amtUpCase: '两千元', amtValue: 2000 },
  { amtUpCase: '三千元', amtValue: 3000 },
  { amtUpCase: '五千元', amtValue: 5000 },
  { amtUpCase: '六千元', amtValue: 6000 },
  { amtUpCase: '八千元', amtValue: 8000 },
  { amtUpCase: '一万元', amtValue: 10000 },
];

export const orgRadioData = [
  { label: '类型一', value: 0 },
  { label: '类型二', value: 1 },
  { label: '类型三', value: 2 },
];

export const FieldsConfig: Field[] = [
  {
    label: '姓名',
    name: 'iName',
    type: 'input',
    fieldProps: {
      placeholder: '请输入',
    },
  },
  {
    label: '会员类型',
    name: 'iMemberType',
    type: 'radio',
    fieldProps: {
      options: orgRadioData,
    },
  },
  {
    label: '消费方式',
    name: 'iPayMode',
    type: 'select',
    fieldProps: {
      options: orgSelectData,
    },
    itemProps: {
      rules: [],
    },
  },
  {
    label: '充值金额',
    name: 'iRechargeAmount',
    type: 'select',
    fieldProps: {
      originData: orgAmtData,
      iLabelKey: 'amtUpCase',
      iValueKey: 'amtValue',
    },
  },
  {
    label: '有效期至',
    name: 'iDate',
    type: 'datePicker',
    fieldProps: {
      placeholder: '请选择',
      disabledDate: (curDate: Date) => curDate > new Date(),
    },
  },
  {
    label: '会员等级',
    name: 'iLevel',
    type: 'treeSelect',
    fieldProps: {
      originData: orgLevelData,
    },
  },
  {
    label: '会员门店',
    name: 'iShop',
    type: 'cascader',
    fieldProps: {
      originData: orgShopData,
      multiple: true,
      maxTagCount: 'responsive',
    },
  },
  // {
  //   label: '会员住址',
  //   name: 'iLocation',
  //   type: 'cascader',
  //   fieldProps: {
  //     originData: [],
  //   },
  // },
];

export const InitTransferData = [
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
            name: '门店1',
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
