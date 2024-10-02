import { ChangeEvent } from "react";

interface IInput {
  id: string;
  label: string;
  name: string;
  type?: string;
  tipe?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default IInput;
