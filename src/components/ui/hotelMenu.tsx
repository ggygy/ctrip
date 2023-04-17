import { Radio, Select } from "antd";
import { FunctionComponent, useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { data } from "@/public/data/city";
interface HotelMenuProps {
  selectedSite: string;
  setselectedSite: (s: string) => void;
}

const HotelMenu: FunctionComponent<HotelMenuProps> = (props) => {
  const { selectedSite, setselectedSite } = props;
  const [othersite, setothersite] = useState("广州");
  const [open, setopen] = useState<boolean>(false);

  const moreRender = () => {
    return (
      <div className="overflow-scroll cursor-pointer flex flex-wrap max-h-[300px]">
        {data.map((i, index) => (
          <div
            key={index}
            onClick={() => {
              setopen(false);
              setothersite(i);
              setselectedSite(i);
            }}
            className="hover:bg-blue-100 w-20 leading-8 justify-center flex"
          >
            <span>{i}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full my-6 flex lg:flex-row h-10 flex-col">
      <div className="mr-4 text-xl  font-medium dark:text-white">
        酒店
        <span className="text-orange-300">推荐</span>
      </div>
      <div className="flex  justify-end lg:ml-auto ">
        <Radio.Group
          defaultValue="a"
          value={selectedSite}
          onChange={(e) => setselectedSite(e.target.value)}
        >
          <Radio.Button value="上海" defaultChecked>
            上海
          </Radio.Button>
          <Radio.Button value="北京">北京</Radio.Button>
          <Radio.Button value="杭州">杭州</Radio.Button>
          <Radio.Button value={othersite}>{othersite}</Radio.Button>
        </Radio.Group>

        <div className="w-15 h-8 hover:bg-blue-100 ">
          <Select
            open={open}
            value={"更多"}
            onClick={() => setopen(true)}
            onBlur={() => {
              setTimeout(() => {
                setopen(false);
              }, 100);
            }}
            placement="bottomLeft"
            bordered={false}
            dropdownMatchSelectWidth={false}
            dropdownStyle={{
              width: "30%",
            }}
            style={{ border: 0 }}
            suffixIcon={
              open ? (
                <CaretUpOutlined style={{ color: "#007aff" }} />
              ) : (
                <CaretDownOutlined />
              )
            }
            dropdownRender={moreRender}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelMenu;
