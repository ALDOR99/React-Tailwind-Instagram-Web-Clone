import { useEffect, useState } from "react";

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export default function Input({ label, type = "text", ...props }) {
  //-------------------------------------------
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  //-------------------------------------------

  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);

  return (
    <label className="block relative">
      <input
        required={true}
        type={inputType}
        className="bg-zinc-50 border outline-none text-xs rounded-sm w-full h-[38px] focus:border-gray-400 px-2 valid:pt-[10px] peer"
        {...props}
      />

      <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-500 transition-all peer-valid:text-[10px] peer-valid:top-2.5 -translate-y-1/2">
        {label}
      </small>

      {type === "password" && props?.value && (
        <button
          type="button"
          onClick={() => setShow((show) => !show)}
          className="absolute top-0 right-0 h-full flex items-center text-sm font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
