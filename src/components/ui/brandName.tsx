import logo from "../../../public/images/logo.png";
import Image from "next/image";
interface Props {
  classes?: string;
  text?: string;
  textClass?: string;
}

export default function Logo({ classes, text, textClass }: Props) {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="logo"
        width={30}
        height={150}
        className={"ml-1 rounded-md " + classes}
      />
      {text && (
        <p
          className={
            "font-andika pl-1 text-xl font-bold text-primary " + textClass
          }
        >
          {text}
        </p>
      )}
    </div>
  );
}

/* <h1
        className={`font-andika text-lg bg-primary rounded-r-xl border-[1px] p-5 py-2 text-white ${classes}`}
      >
        * <p>Pammmddy</p> 
    </h1> */
