# tables2json

Convert an HTML tables node to a javascript object or array.


## Install

```bash
npm install tables2json
```

## Require / Import

```js
  const { oneTable2json, allTables2json } = require("tables2json");
  // import { oneTable2json, allTables2json } from "tables2json";
```
```js
  const tables2json = require("tables2json");
  // import tables2json from "tables2json";
```

## Use

```js
  const { oneTable2json, allTables2json } = require("tables2json");
  // get element by id
  const table = oneTable2json('table_id'); // object
  // get all tables
  const tables = allTables2json(); // array
  // print
  console.log( table, tables );
```

```js
  const tables2json = require("tables2json");
  // get element by id
  const table = tables2json.one('table_id'); // object
  // get all tables
  const tables = tables2json.all(); // array
  // print
  console.log( table, tables );
```

```js
  // return 
  {
    headers: [],
    rows: [],
  }
  // usable to pdfkit-table
  // https://www.npmjs.com/package/pdfkit-table
  // https://github.com/natancabral/pdfkit-table#readme
```

## Changelogs

### 0.0.5

+ void when table content is empty

### 0.0.1

+ initial functions
+ **Thank you, contributors!**

## License

Copyright (c) Natan Cabral
Licensed under the MIT license.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/natancabral.png?s=100" width="100"/>
    </td>
    <td>
      Natan Cabral<br />
      <a href="mailto:natancabral@hotmail.com">natancabral@hotmail.com</a><br />
      <a href="https://github.com/natancabral/">https://github.com/natancabral/</a>
    </td>
  </tr>
</table>
