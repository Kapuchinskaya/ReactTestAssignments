interface RateCountedProps {
  amountToConvert: number;
  convertedAmount: number;
  isShown: boolean;
  fromCurrency: string;
  toCurrency: string;
}
export const RateCounted = ({
  amountToConvert,
  convertedAmount,
  isShown,
  fromCurrency,
  toCurrency,
}: RateCountedProps) => {
  return (
    <div
      className={`converted-amount-container ${
        isShown ? "" : "display-property-none"
      }`}
    >
      <p className="anount-to-convert-info">{`${fromCurrency} ${amountToConvert} = `}</p>
      <p className="converted-amount-info">{`${toCurrency} ${convertedAmount}`}</p>
    </div>
  );
};
