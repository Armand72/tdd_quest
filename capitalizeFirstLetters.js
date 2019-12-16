function capitalizeFirstLetters(input) {
  let output = input
    .split(" ")
    .map(output => output.charAt(0).toUpperCase() + output.substring(1))
    .join(" ");
  return output;
}

module.exports = capitalizeFirstLetters;
