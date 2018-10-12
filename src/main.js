import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import $ from 'jquery';
import DocSearch from './DocSearch.js';
import Doctor from './Doctor.js';
import DocProfile from './DocProfile';

$(document).ready(function(){
  $(".docForm").submit(function(event){
    event.preventDefault();
  let userIssue = $("input[name='userIssue'").val();
  let userDocName = $("input[name='userDocName'").val();
  let userLattitude = 45.5122;
  let userLongitude = -122.6587;
  let userRange = 25;

  let docQuery = new DocSearch();

  let promise = docQuery.docQuery(userIssue, userDocName, userLattitude, userLongitude, userRange);
  promise.then(function(response){
    let body = JSON.parse(response);
    let docReturn = body.data;
    console.log(docReturn);
    if(docReturn.length > 0){
      $(".displayData").text("");
      displayData(docReturn);
    } else {
      $(".displayData").text("Sorry, no doctors met your criteria.");
    }
  })
  function displayData(docReturn) {
    for(let i=0; i < docReturn.length; i++){
      let doctor = new Doctor(docReturn[i]);
      $(".displayData").append(`<li class='doctorEntry'><div class="card" width:200px><div class="card-body"><img src="${doctor.pictureURL}" alt="photo of ${doctor.docName}" width:180px>
      <h5 class="card-title">${doctor.docName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${doctor.docTitle}</h6><ul>` +
      `<li>Languages: ${doctor.languages}</li><li>Address: ${doctor.address}</li>` + `<li>Phone Number: ${doctor.number}</li><li>Accepting New Patients: ${doctor.accepts}</li></ul></div></div></li>`);

        }
      }
    })
  });
