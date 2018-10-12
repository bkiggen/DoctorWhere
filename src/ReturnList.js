export default class ReturnList {
  constructor(body) {
    this.docArray = arrayMaker(body);
  }
}



function arrayMaker(body) {
  let docArray = [];
  for(let i=0; i < body.data.length; i++) {
    docArray.push(body.data[i]);
  }
  return docArray;
}
