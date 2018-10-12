import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import $ from 'jquery';
import DocSearch from './DocSearch.js';

$(document).ready(function(){
  let userIssue = $(".userIssue").val();
  let userDocName = $(".userDoctorName").val();
  // let userLocation = $(".userLocation").val();

  let promise = docQuery.docQuery();
  promise.then(function(){
    let body = JSON.parse(response);
    console.log(body);
  })
})
