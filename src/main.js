import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import $ from 'jquery';
import DocSearch from './DocSearch.js';
import ReturnList from './ReturnList.js';

$(document).ready(function(){
  let userIssue = "heart";
  let userDocName = "";
  let userLattitude = 45.5122;
  let userLongitude = -122.6587;
  let userRange = 25;

  let docQuery = new DocSearch();

  let promise = docQuery.docQuery(userIssue, userDocName, userLattitude, userLongitude, userRange);
  promise.then(function(response){
    let body = JSON.parse(response);
    let docList = new ReturnList(body);
    console.log(docList.doctorArray);
  })
})
