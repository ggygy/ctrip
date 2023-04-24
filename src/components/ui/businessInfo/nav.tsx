import { navData } from "@/public/data/businessTravel";
import { FunctionComponent } from "react";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  return (
    <div className="box-border block mt-4 ml-3">
      {navData.map((i, index) => (
        <div className=" flex flex-row mt-3" key={index}>
          <div className="text-primary font-semibold mr-6 leading-5 text-xs w-12 h-8 whitespace-nowrap mt-1 dark:text-gray-200">
            {i.title}
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex  flex-wrap cursor-pointer">
              {i.data.map((d, ind) => (
                <a
                  key={ind}
                  href={d.href}
                  className="block text-ellipsis max-w-6xl min-w-[80px] min-h-[20px] max-h-30 font-normal text-gray-666 dark:text-gray-400 overflow-hidden ml-1 text-xs mt-1"
                >
                  {d.alt}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
