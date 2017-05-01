//main template

const template = Handlebars.templates['main'];
const templateData = template(data);
document.getElementById("root").innerHTML += templateData;
