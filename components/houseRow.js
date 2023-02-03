import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house: { address, country, price } }) => {
  return (
    <tr>
      <td>{address}</td>
      <td>{country}</td>
      {price && (
        <td className={`${price >= 500001 ? "text-primary" : ""}`}>{currencyFormatter.format(price)}</td>
      )}
    </tr>
  );
};

export default HouseRow;
