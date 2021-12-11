import Table from 'cli-table';
// instantiate
const table = new Table({
  head: ['TH 1 label', 'TH 2 label'],
  colWidths: [20, 40]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(['First value', 'Second value'], ['First value', 'Second value']);

console.log(table.toString());
