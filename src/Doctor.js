export default class Doctor {
  constructor(docReturn) {
    this.accepts = accepts(docReturn);
    this.docName = `${docReturn.profile.first_name} ${docReturn.profile.last_name}`;
    this.pictureURL = docReturn.profile.image_url;
    this.docTitle = docReturn.profile.title;
    this.languages = languages(docReturn);
    this.number = docReturn.practices[0].phones[0].number
    this.address = `${docReturn.practices[0].visit_address.street},  ${docReturn.practices[0].visit_address.city}, ${docReturn.practices[0].visit_address.state}, ${docReturn.practices[0].visit_address.zip}`;
    this.website = website(docReturn);
  }
}

function website(docReturn) {
  if(docReturn.practices[0].website !== undefined){
    return `<a href="${docReturn.practices[0].website}">link</a>`
  } else {
    return "none"
  }
}

function accepts(docReturn) {
  if (docReturn.practices[0].accepts_new_patients === true){
    docReturn = "yes";
  } else {
    docReturn = "not currently";
  }
  return docReturn;
}

function languages(array) {
  let languages = array.practices[0].languages;
  let newString = [];
  for(let i=0; i < languages.length; i++) {
    newString.push(languages[i].name);
    return newString;
  }
}
