import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import $ from 'jquery';
import DocSearch from './DocSearch.js';
import ReturnList from './ReturnList.js';
import DocProfile from './DocProfile';

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
    let docReturn = body.data;
    displayData(docReturn);
  })
  function displayData(docReturn) {
    for(let i=0; i < docReturn.length; i++){
      $(".displayData").append(`<li class='doctorEntry'><div class="card" width: 18rem><div class="card-body">` + `<img src="${docReturn[i].profile.image_url}" alt="photo of ${docReturn[i].profile.first_name} ${docReturn[i].profile.last_name}" style="width: 15rem"> +
      <h5 class="card-title">${docReturn[i].profile.first_name} ${docReturn[i].profile.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${docReturn[i].profile.title}</h6>
      <ul><li>Website:<a href="${docReturn[i].website}" class="card-link">${docReturn[i].website}</a>${docReturn[i].website}</li></ul></div></div></li>`)
    }
  }
})

//
// <li>Languages: ${docReturn[i].practices[0].languages}</li>
// <li>Practices: ${docReturn[i].practices[0].phones[0]}</li>
// <li>Address: ${docReturn[i].practices[0].visit_address}</li>
// <li>Accepting New Patients: ${docReturn.practices[0].accepts_new_patients}</li>
