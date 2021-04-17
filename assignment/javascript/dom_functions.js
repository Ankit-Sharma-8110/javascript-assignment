let divTag = document.createElement('div');
divTag.style.padding = "30px";
divTag.style.margin = "30px";
divTag.style.backgroundColor = "red";
divTag.style.color = "white";

let h1Tag = document.createElement('h1');
let array = ['ankit','rishabh','aditi','uma','akshay','abhay','diksha','sahil','ajay','aprita','shalini']
array.forEach(item => {
     h1Tag.append(`Hello, I'm ${item}`);
});
divTag.append(h1Tag);
document.body.append(divTag);