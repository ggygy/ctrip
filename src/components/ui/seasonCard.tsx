import Image from "next/image";
import { FunctionComponent } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
interface SeasonCardProps {
  title: string;
  pic: string;
}

const SeasonCard: FunctionComponent<SeasonCardProps> = (props) => {
  const { title, pic } = props;
  return (
    <div className="rounded-xl h-[548px] bg-gradient-to-bl from-blue-500 to-blue-100 ">
      <div className="flex flex-wrap bg-blue-50 rounded-xl">
        <Image
          src={pic}
          alt=""
          width={96}
          height={71}
          className="rounded-lg "
        />
        <div className="flex justify-center items-start p-">
          <div>{title}</div>
          <div>
            <RightCircleOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
