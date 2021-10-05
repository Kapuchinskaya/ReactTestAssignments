interface InputFieldProps {
  onChange: (value: string) => void;
}

export const InputField = ({ onChange }: InputFieldProps) => {
  return (
    <input
      className="select-box-amount"
      placeholder="0"
      onChange={(event) => onChange(event.target.value)}
    ></input>
  );
};
