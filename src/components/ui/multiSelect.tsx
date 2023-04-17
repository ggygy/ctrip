import { Select, Space, Tag } from "antd";
import { FunctionComponent, useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import CheckableTag from "antd/es/tag/CheckableTag";

interface MultiSelectProps {
  desc: string;
  defaultValue: string;
}
const options = ["二星（钻）及以下", "三星（钻）", "四星（钻）", "五星（钻）"];

const MultiSelect: FunctionComponent<MultiSelectProps> = (props) => {
  const { desc } = props;
  const [selectedTags, setSelectedTags] = useState<string[]>(["三星（钻）"]);
  const [open, setopen] = useState(true);

  const { Option } = Select;

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <label className=" text-gray-500 text-sm text-ellipsis mt-2 ml-2">
        {desc}
      </label>
      <div className="overflow-hidden">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          bordered={false}
          placeholder="不限"
          onChange={handleChange}
          optionLabelProp="value"
          className="flex flex-nowrap overflow-hidden h-10"
        >
          {options.map((i) => (
            <Option value={i + "、"} label={i} key={i}>
              <Space>{i}</Space>
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default MultiSelect;

// import React from 'react';
// import { Select, Tag } from 'antd';
// import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

// const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

// const App: React.FC = () => (
//   <Select
//     mode="multiple"
//     showArrow
//     tagRender={tagRender}
//     defaultValue={['gold', 'cyan']}
//     style={{ width: '100%' }}
//     options={options}
//   />
// );

// export default App;
