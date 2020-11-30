const year = process.env.YEAR ?? "2020";
const day = process.env.DAY ?? "01";
const part = process.env.PART ?? "1";

console.log(`Year ${year} Day ${day} Part ${part}`);

(async () => {
  const module = await import(`./years/${year}/days/${day}/parts/${part}`);
  module.default();
})();
