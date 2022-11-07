const NumberWithComma = (number) => {
    if (number === 0) return number;
    if (!number) return;
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  export default NumberWithComma;