import { FAST_INTERVAL, SLOW_INTERVAL } from "@/env";

export default {
  data: () => ({
    slow: 0,
    fast: 0,
    now: Date.now(),
    slowInterval: null,
    fastInterval: null,
    interval: []
  }),
  mounted() {
    this.interval = [
      setInterval(async () => {
        this.slow += 1;
      }, SLOW_INTERVAL),
      setInterval(async () => {
        this.fast += 1;
      }, FAST_INTERVAL),
      setInterval(async () => {
        this.now += 1000;
      }, 1000)
    ];
  },
  destroyed() {
    this.interval.forEach(interval => {
      clearInterval(interval);
    });
    this.interval = [];
  }
};
