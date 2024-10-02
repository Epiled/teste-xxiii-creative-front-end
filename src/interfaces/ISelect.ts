import IInput from "./IInput";

interface ISelect extends Omit<IInput, 'name'> {
  values: string[];
  icon?: string;
  disabled?: boolean;
}

export default ISelect;
