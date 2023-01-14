import { Input, Select } from "dragontail-experimental";
import { FC, useState } from "react";
import { ConvertButton } from "./ConvertButton";
import { timeUnits } from "../lib/units";

interface ConverterPanelProps {
  units: string[];
}

export const ConverterPanel: FC<ConverterPanelProps> = ({ units }) => {
  const [val, setVal] = useState<string>("");
  const [from, setFrom] = useState<string>(timeUnits[0]);
  const [result, setResult] = useState<number>(0);

  return (
    <div className="flex justify-start items-center p-8 bg-slate-900/30 rounded-xl border border-slate-400/30 w-[80%] h-[500px] sm:h-[328px] sm:w-max sm:min-w-[466px] sm:max-w-[856px]">
      <div className="flex items-center gap-5">
        <Input
          type="number"
          onChange={(nv) => setVal(nv.target.value)}
          value={val}
          variant="underline"
        />
        <div className="w-20">
          <Select value={from} onChange={(e) => setFrom(e.target.value)}>
            {units.map((unit) => (
              <option value={unit} key={unit}>
                {unit}
              </option>
            ))}
          </Select>
        </div>
        <span>{"→"}</span>
        <Input isDisabled variant="underline" value={result} />
        <span className="text-white/90">{`坤${from}`}</span>
        <ConvertButton
          onClick={() => {
            setResult(Math.round((parseFloat(val) / 2.5) * 1000) / 1000 || 0);
          }}
        />
      </div>
    </div>
  );
};
