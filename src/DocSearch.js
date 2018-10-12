export default class DocSearch {
  docQuery(userIssue, userDocName, userLattitude, userLongitude, userRange) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?user_key=761832f536a36be21ad4d944dc8699bb&query=${userIssue}&location=${userLattitude}, ${userLongitude}, ${userRange}&last_name=${userDocName}`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
