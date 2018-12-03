import React, { Component } from 'react';
import { Input, Select } from 'antd';
import './app.less';

const { Option } = Select;

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 200, margin: 32 }}>
          <Input />
          <Select value="Hello">
            <Option value="Hello">Hello</Option>
          </Select>
        </div>
      </div>
    );
  }
}

export default App;
