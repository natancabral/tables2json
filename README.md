# tables2json

Convert an HTML tables node to a javascript object or array.


## Install

```bash
npm install tables2json
```

## Use

```js
  const { oneTable2json, allTables2json } = require("tables2json");
```
```js
  const tables2json = require("tables2json");
```
```js
  // require
  // get element by id
  const table = tables2json.one('table_id'); // object
  // get all tables
  const tables = tables2json.all(); // array
  // print
  console.log( table, tables );
```

## Changelogs

### 0.1.1

+ initial functions
+ **Thank you, contributors!**

## License

The MIT License.

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

## Thank you

- Javascript ;)