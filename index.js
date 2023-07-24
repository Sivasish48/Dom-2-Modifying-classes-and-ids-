// 1. modifying attributes like classes and ids

// 1.1 setAttribute() method . It sets attribute to the specific cases or element. As it name is veryu much self explanatory.

setAtrribute('id','main-heading');

// 1.2 removeAttribute() method . It removes the attribute which was set. 

removeAttribute('id');

// 1.3 getAttribute(). There is this way to access any attribute.
// First just declare the variable and name the attribute which is seeked to get accessed.


// 1.4 It was an example for id....
const tittle = document.querySelector('#main-heading');

console.log(tittle.getAttribute('id'));

// 1.5 Let us see with classes with different method of its own.

li.classList.add('list-items');
// Here 'li' is the tag . classlist is the variable and list-items is the class that we are seeking to add with add() which used add a class in dom.


// 1.6  remove the class by using remove() method.

li.classList.remove('list-items');
// OR 
remove();

// 1.7  contains() method is used to check the partivular availability of the class.

console.log(li.classList.conatins('list-items'));

// contains() method gives the assurance of availability of that particular class in a bolean. that is tru or false.