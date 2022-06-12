const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const countEmosiIXX = theaterIXX.filter((item) => item.hasil === emosi).length;
  const countEmosiVGC = theaterVGC.filter((item) => item.hasil === emosi).length;
  const total = countEmosiIXX + countEmosiVGC;
  // return `${emosi} ${total}`;
  return `${total}`;
}

module.exports = {
  promiseOutput,
};
