const sortLongString = (str) => {
  const maxLength = 20;
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)} View more...`;
  }
  return str;
};

export default sortLongString;
