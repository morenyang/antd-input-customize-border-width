import React, { Component } from "react";
import { Input, Select, Col, Form, Cascader } from "antd";
import "./app.less";

const { Option } = Select;

const { Item: FormItem } = Form;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 800, margin: 32 }}>
          <Input.Group compact>
            <Input prefix="1" style={{ width: "20%" }} />
            <Input style={{ width: "30%" }} />
            <Select defaultValue="Option2-2">
              <Option value="Option2-1">Option2-1</Option>
              <Option value="Option2-2">Option2-2</Option>
            </Select>
            <Cascader options={options} placeholder="Please select" />
          </Input.Group>
          <Input.Group compact>
            <Input style={{ width: "20%" }} />
            <Cascader options={options} placeholder="Please select" />
            <Select defaultValue="Option2-2">
              <Option value="Option2-1">Option2-1</Option>
              <Option value="Option2-2">Option2-2</Option>
            </Select>
            <Input style={{ width: "30%" }} />
          </Input.Group>
          <Form>
            <FormItem
              {...formItemLayout}
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
            >
              <Input.Group compact>
                <Input style={{ width: "20%" }} />
                <Input style={{ width: "30%" }} />
                <Select defaultValue="Option2-2">
                  <Option value="Option2-1">Option2-1</Option>
                  <Option value="Option2-2">Option2-2</Option>
                </Select>
              </Input.Group>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
            >
              <Input.Group compact>
                <Input prefix="1" style={{ width: "20%" }} />
                <Select defaultValue="Option2-2">
                  <Option value="Option2-1">Option2-1</Option>
                  <Option value="Option2-2">Option2-2</Option>
                </Select>
                <Input style={{ width: "30%" }} />
              </Input.Group>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
            >
              <Input.Group compact>
                <Select defaultValue="Option2-2">
                  <Option value="Option2-1">Option2-1</Option>
                  <Option value="Option2-2">Option2-2</Option>
                </Select>
                <Input style={{ width: "20%" }} />
                <Input style={{ width: "30%" }} />
              </Input.Group>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
            >
              <div style={{ marginBottom: 16 }}>
                <Input
                  addonBefore="Http://"
                  addonAfter=".com"
                  defaultValue="mysite"
                />
              </div>
            </FormItem>
          </Form>
          <Input.Group size="large">
            <Col span={5}>
              <Input defaultValue="0571" />
            </Col>
            <Col span={5}>
              <Input defaultValue="0571" />
            </Col>
            <Col span={8}>
              <Input defaultValue="26888888" />
            </Col>
          </Input.Group>

          <Input.Group compact>
            <Select defaultValue="Option1-1" style={{ width: "40%" }}>
              <Option value="Option1-1">Option1-1</Option>
              <Option value="Option1-2">Option1-2</Option>
            </Select>
            <Select defaultValue="Option2-2">
              <Option value="Option2-1">Option2-1</Option>
              <Option value="Option2-2">Option2-2</Option>
            </Select>
          </Input.Group>

          <Select value="Hello">
            <Option value="Hello">Hello</Option>
          </Select>
        </div>
      </div>
    );
  }
}

export default App;
