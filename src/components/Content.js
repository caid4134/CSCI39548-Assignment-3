import { Component } from "react";
import React from "react";

var debiturl;
var crediturl;
var debitresponse;
var debitdata;
var creditresponse;
var creditdata;

function clearTable(){
  let table = document.getElementById('myTable');
  table.innerHTML="";
  //alert("cleared");
}

function buildTable(data){
  var table = document.getElementById('myTable');
  //clears out old items.
  clearTable();
  for (var i = 0; i < data.length; i++){
    var row = `<tr>
          <td>${data[i].date.substr(0, 10)}</td>
          <td>${data[i].description}</td>
          <td>${data[i].amount}</td>
          <td>${data[i].id}</td>
        </tr>`
      table.innerHTML += row;
  }
}

    //should sort them by newest transactions to oldest
    function custom_sort(a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    };

function creditordebit(){
  var input=document.getElementById('cardselect').value;

  if(input=="credit"){
    buildTable(creditdata.sort(custom_sort));
  }
  if(input=="debit"){
    buildTable(debitdata.sort(custom_sort));
  }
  
  //alert(document.getElementById('cardselect').value);


}

class Content extends Component {

  state = {
    loading: true
  }
  async componentDidMount() {
    debiturl = "https://moj-api.herokuapp.com/debits";
    crediturl = "https://moj-api.herokuapp.com/credits";
    debitresponse = await fetch(debiturl);
    debitdata = await debitresponse.json();
    creditresponse = await fetch(crediturl);
    creditdata = await creditresponse.json();
    console.log(debitdata.sort(custom_sort));
    console.log(creditdata.sort(custom_sort));


  }
  

  render() {
    return (
      <div>
        <div>Please select your card type.
          <select onChange={creditordebit} id="cardselect">
          <option value="">-</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <table>
            <thead>
              <tr>
                 <th>Date</th>
                 <th>Transaction</th>
                 <th>Amount</th>
                 <th>ID</th>
               </tr>
             </thead>
             <tbody id="myTable">
             </tbody>
            </table>
        </div>
      </div>
    );
  }
}


export default Content;