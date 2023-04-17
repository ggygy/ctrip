import { FunctionComponent } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
interface CountOptionProps {
  setCount: (n: number) => void;
  count: number;
  title: string;
  subtitle: string;
  mincount: number;
  maxcount: number;
}

const CountOption: FunctionComponent<CountOptionProps> = (props) => {
  const { count, setCount, title, subtitle, mincount, maxcount } = props;
  return (
    <div className="flex flex-nowrap justify-between">
      <div className="flex  text-base items-center flex-nowrap">
        {title}
        <div className="text-gray-400 text-xs">{subtitle}</div>
      </div>
      <div className="flex flex-nowrap text-gray-400 text-lg items-center">
        <MinusCircleOutlined
          onClick={() => {
            if (count > mincount) {
              setCount(count - 1);
            }
          }}
          className="hover:bg-blue-600 hover:text-white hover:rounded-full"
        />
        <div className="px-2 text-black">{count}</div>

        <PlusCircleOutlined
          onClick={() => {
            if (count < maxcount) {
              setCount(count + 1);
            }
          }}
          className="hover:bg-blue-600 hover:text-white hover:rounded-full"
        />
      </div>
    </div>
  );
};

export default CountOption;
