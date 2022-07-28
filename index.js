"use strict";

if(!global.document){
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var html = '<html></html>';
  global.document = new JSDOM(html).window.document;
}

function t2j(element){

  if(!element) return {};

  let head = [];
  let data = [];

  if(element.length > 100 && typeof element === 'string' && String(element).toLowerCase().indexOf('table') > -1) {

    let htmlObject = global.document.createElement('html');
    htmlObject.innerHTML = element;
    // let element = htmlObject.firstChild;
    element = htmlObject.getElementsByTagName('table')[0]; // Live NodeList of your anchor elements
    // console.log('element', element);
  
  }

  const table = element;
  const rows = table.rows.length;
    let cells = 0;
    let text = '';

  for (var r = 0; r < rows; r++){
    cells || (cells = table.rows[0].cells.length);
    let simpleRow = [];
    for (var c = 0; c < cells; c++){
      const d = table.rows[r].cells[c];
      if(d){
        text = table.rows[r].cells[c].textContent;
        if( r === 0 ) {
          head.push(text);
        }else {
          simpleRow.push(text);
        }  
      }
    }
    simpleRow.length && data.push(simpleRow);
  }

  if(!head.length) return null; // void return;

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

function getElById(idElement) {
  if(idElement.indexOf('#') > -1) {
    idElement = idElement.replace('#', '');
  }
  try {
    return global.document.getElementById(idElement) || false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function getElByTagName(idElement) {
  try {
    return global.document.getElementsByTagName(idElement) || false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function one(idElement){

  // is a table
  if(typeof idElement === 'string' && idElement.length > 100) {
    return t2j(idElement);
  }
  
  // is a id
  try {
    return t2j(getElById(idElement) ||null );
  } catch (error) {
    return '';    
  }
}

function all(){  
  
  let all = [];

  const table = getElByTagName('table');
  const rows = table.length;

  for(var r = 0; r < rows; r++){
    const content = t2j(table[r]);

    // console.log(table[r]);
    // const dom = new JSDOM(`<!DOCTYPE html>${tableSample}`);
    // const words = dom.window.document.querySelector("table").textContent;
    // if (words.indexOf('june') && words.indexOf('july')) {
    //   // calendary
    // } else {
    //   // push
    // }

    content && all.push( content );
  }
  
  return all;

}

const tables2json = {
  t2j, one, all, 
  id: one,
  oneTable2json: one,
  allTables2json: all,
};

module.exports = tables2json;

/*

var s = '<table...>...</table>';
var htmlObject = document.createElement('html');
htmlObject.innerHTML = s;
var table = htmlObject.firstChild;
         
*/
