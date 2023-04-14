import { Select, Space } from "antd";
import { FunctionComponent } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

interface MultiSelectProps {
  desc: string;
  defaultValue: string;
}

const MultiSelect: FunctionComponent<MultiSelectProps> = (props) => {
  const { desc } = props;
  const { Option } = Select;
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <label className="absolute text-gray-500 text-sm text-ellipsis mt-1 ml-1">
        {desc}
      </label>

      <Select
        mode="multiple"
        style={{ width: "100%" }}
        // placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
        suffixIcon={<CaretUpOutlined />}
      >
        <Option value="china" label="China">
          <Space>
            <span role="img" aria-label="China">
              房间
            </span>
          </Space>
        </Option>
        <Option value="usa" label="USA">
          <Space>
            <span role="img" aria-label="USA">
              成人
            </span>
          </Space>
        </Option>
        <Option value="japan" label="Japan">
          <Space>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan (日本)
          </Space>
        </Option>
        <Option value="korea" label="Korea">
          <Space>
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea (韩国)
          </Space>
        </Option>
      </Select>
    </>
  );
};

export default MultiSelect;
