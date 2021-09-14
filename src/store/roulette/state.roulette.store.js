import {
  BETTING,
} from "@/constants/roulette.constant";

export default () => ({
  spin: {
    loading: false,
    number: 0,
  },
  betting: Object.assign({}, BETTING),
});
