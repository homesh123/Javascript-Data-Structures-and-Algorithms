const Person1 = {
    name:'homesh',
    age :10
}

const Person2 = {
    name:'Aayan',
    age :4
}


function printPerson(x){
    console.log(this.name +"- "+ this.age + " "+ x);
}

printPerson.call(Person1,'Call'); //homesh- 10 Call


printPerson.apply(Person1,['Apply']); //homesh- 10 Apply


var callLaterPrintPerson =  printPerson.bind(Person2,'bind')
callLaterPrintPerson();  // Aayan- 4 bind