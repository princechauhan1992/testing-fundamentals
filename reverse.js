//Test reverse string function

function reverse(str) {
  let result = "";
  if (!str) {
    return str;
  }

  if (typeof str != "string") {
    throw new Error("Invalid input");
  }

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

module.exports = reverse;
