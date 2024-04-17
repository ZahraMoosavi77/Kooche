import { clsx } from "clsx";
import { BasicTextAreaProps } from "./BasicTextArea.type";

export const BaicTextArea: React.FC<BasicTextAreaProps> = ({
  name,
  onChangeHandler,
  value,
  className,
  register,
}) => {
  const classes = clsx(
    "h-[100px] w-full overflow-hidden resize-none bg-gray-200 text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] mt-1 focus:bg-white  focus:border focus:border-primary focus:text-primary",
    className
  );
  if (register) {
    return (
      <textarea
        name={name}
        className={classes}
        {...register(name, { required: false, maxLength: 500 })}
      ></textarea>
    );
  } else {
    return (
      <textarea
        onChange={onChangeHandler}
        value={value}
        name={name}
        className={classes}
      ></textarea>
    );
  }
};

export default BaicTextArea;
