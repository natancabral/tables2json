"use strict";

function t2j( element ){

  if( !element ) return;

    let head = [];
    let data = [];

  const table = element;
  const rows = table.rows.length;
    let cells = 0;
    let text = '';

  for( var r = 0; r < rows; r++ ){
    cells || (cells = table.rows[0].cells.length);
    let simpleRow = [];
    for( var c = 0; c < cells; c++ ){
      text = table.rows[r].cells[c].textContent;
      if( r === 0 ) {
        head.push(text);
      }else {
        simpleRow.push(text);
      }
    }
    simpleRow.length && data.push(simpleRow);
  }

  return {
    headers: head,
    datas: [],
    rows: data,
  };

  // console.log(head, data);
  // console.log(table.rows);
  // console.log(table.rows.length);
  // console.log(table.rows[0].cells);
  // console.log(table.rows[0].cells[0].textContent);
  // console.log(table.rows[0].cells[0].cellIndex);
  // console.log(table.rows[0].innerHTML);

}

function one( idElement ){
  return t2j( document.getElementById(idElement) );
}

function all(){  
  
    let all = [];

  const table = document.getElementsByTagName('table');
  const rows = table.length;

  for( var r = 0; r < rows; r++ ){
    all.push( t2j(table[r]) );
  }
  
  return all;

}

const tables2json = {
  t2j: t2j,  
  one: one,
  all: all,
}

module.exports = tables2json;
module.exports.oneTable2json = one;
module.exports.allTables2json = all;