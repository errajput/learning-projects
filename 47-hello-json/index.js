const data = [
  { id: 1, name: 'Ram' },
  { id: 2, name: 'Rohan' },
];

// JSON
// - key will be in double quotes
// - value can be string(double quote), number, boolean

// 1- stringify --> convert JS Datatype to JSON Data
const stringData = JSON.stringify(data);
// JSON.stringify(data, null, 4); -- to add space in output

// O/P - [{"id":1,"name":"Ram"},{"id":2,"name":"Rohan"}]
console.log(stringData);

// 2- parse --> converts JSON data to JS data type
const jsonData = '[{"id":1,"name":"Ram"},{"id":2,"name":"Rohan"}]';
const parsedData = JSON.parse(jsonData);

// O/P - [ { id: 1, name: 'Ram' }, { id: 2, name: 'Rohan' } ]
console.log(parsedData);
