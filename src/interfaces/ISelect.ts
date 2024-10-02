import IInput from "./IInput";

interface ISelect extends Omit<IInput, 'name' | 'onChange'> {
  values: string[];
  icon?: string;
  disabled?: boolean;
}

export default ISelect;
