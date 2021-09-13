import Vue from "vue";
import BigNumber from "bignumber.js";

Vue.filter("toCurrency", function(
  value,
  decimal = 6,
  currency = null,
  rate = null,
  minimumDecimal = 0
) {
  if (!value) {
    return 0;
  }
  value = BigNumber(value);
  if (currency && rate) {
    value = value.times(BigNumber(rate));
  }
  if (currency === "JPY") {
    decimal = 1;
    if (value.toNumber() < 100) {
      decimal = 2;
    }
    if (value.toNumber() < 10) {
      decimal = 3;
    }
  }

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimal,
    minimumFractionDigits: minimumDecimal
  });
  return formatter.format(value.toNumber()).replace("$", "");
});
