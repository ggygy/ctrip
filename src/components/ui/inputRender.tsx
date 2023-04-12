import { Divider } from "antd";
interface inputRenderType {
  desc: string;
  setshow: (b: boolean) => void;
  value: any;
  setValue: (s: string) => void;
}
export const InputRender = (props: inputRenderType) => {
  const { desc, setshow, value, setValue } = props;
  return (
    <>
      <label className="absolute text-gray-500 text-sm text-ellipsis mt-1 ml-1">
        {desc}
      </label>
      <input
        type="text"
        onFocus={() => setshow(true)}
        onBlur={(e) => {
          e.preventDefault();
          setshow(false);
        }}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          setshow(false);
        }}
        className=" text-black text-ellipsis font-bold box-border w-[90%] pt-7 px-4 m-1 outline-none border-white  border-b-2"
        value={value}
      />
      <Divider type="vertical" className=" w-[5%] inline bottom-3" />
    </>
  );
};
