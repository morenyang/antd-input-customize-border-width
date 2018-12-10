import React, { Component } from "react";
import { Input, Select, Col } from "antd";
import "./app.less";

const { Option } = Select;

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 500, margin: 32 }}>
          <Input.Group compact>
            <Input style={{ width: "20%" }} />
            <Input style={{ width: "30%" }} />
          </Input.Group>
          <Input.Group size="large">
            <Col span={5}>
              <Input defaultValue="0571" />
            </Col>
            <Col span={8}>
              <Input defaultValue="26888888" />
            </Col>
          </Input.Group>

          <Input.Group compact>
            <Select defaultValue="Option1-1">
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
