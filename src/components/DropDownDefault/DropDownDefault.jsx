import { Dropdown, Radio, Space } from "antd-mobile";
import React from "react";

const DropDownDefault = ({ items, title }) => {
  return (
    <Dropdown>
      <Dropdown.Item key=" sorter " title={title}>
        <div style={{ padding: 12 }}>
          <Radio.Group defaultValue=" default ">
            <Space direction=" vertical " block>
              {items?.map((ele, i) => (
                <Radio block value={ele.value} key={ele.value + i}>
                  {ele.value}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropDownDefault;
