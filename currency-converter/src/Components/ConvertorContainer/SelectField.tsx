interface CurrencyFieldProps {
  value: string;
  isDefault: boolean;
  onChange: (value: string) => void;
  options: string[];
}

export const CurrencyField = ({
  value,
  isDefault,
  onChange,
  options,
}: CurrencyFieldProps) => {
  return (
    <select
      className={`select-box-currency ${
        isDefault ? "default-currency-amount-select" : null
      }`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{isDefault ? value : "Select currency"}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
