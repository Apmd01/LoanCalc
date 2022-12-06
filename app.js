
//listen for when the user submits
document.getElementById('loan-form').addEventListener('submit', function(e) {
 //hide results

 document.getElementById('results').style.display = 'none';

 //show loading gif on submit  
 document.getElementById('loading').style.display = 'block'; 
 
 setTimeout(calcResults, 2000);

e.preventDefault();
}); //id no .(period) //removed calcResults

function calcResults(e){
    
    //variables
    const amount = document.getElementById('amount');
    const interests = document.getElementById('interests');
    const years = document.getElementById('years');
    const monthlyPayments = document.getElementById('monthly');
    const totalPayments = document.getElementById('totalPayments');
    const totalInterests = document.getElementById('totalInterests');

    const principal = parseFloat(amount.value);
    const calculatedInterests = parseFloat(interests.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value);
    
    //monthly payments calc
    const x = Math.pow(1 + calculatedInterests, calculatePayments);
    const monthly = (principal*x*calculatedInterests)/(x-1);

    if(isFinite(monthly)){
        monthlyPayments.value = monthly.toFixed(2); //tofixed = decimal places
        totalPayments.value = (monthly * calculatePayments).toFixed(2);
        totalInterests.value = ((monthly * calculatePayments)-principal).toFixed(2);
        //show results.
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';
    } else {
        displayError('Check numbers inputted')
        
    }
    //e.preventDefault();
};

function displayError(error){

    document.getElementById('results').style.display = 'none';

    //show loading gif on submit  
    document.getElementById('loading').style.display = 'none';

    const divError = document.createElement('div');
    //bootstrap show alert - class alert/ danger colour red.
    
    //getting elements
     const card = document.querySelector('.card');
     const heading = document.querySelector('.heading');
    //adding a class.
    divError.className = 'alert alert-danger';
    //creating a text node + append to div.
    divError.appendChild(document.createTextNode(error)) //wanting to add an element to the divError + creating a text node.

    //inserting the error message on top of the title heading. Going to get the parent and use "insert before".

    card.insertBefore(divError, heading); //what you are looking to add, what element is the insert going before.

    //error removed 
    setTimeout(clearError, 2000);
};

function clearError() { //error removed function 
    document.querySelector('.alert').remove();  
}









//document.querySelector('.form-and-loan').addEventListener('submit', calcResults); //.(period = class)

//document.getElementById('amountTest').addEventListener('submit', confirm);
//console.log(document.getElementById('amountTest').className);
//console.log(document.getElementById('amountTest').id);

// const calcbtn = document.getElementsByClassName('btn btn-dark col-12 mt-6');
// console.log(calcbtn);

// calcbtn.addEventlistener('click', function(e)
// {
//     console.log('hello world');
// })


// console.log(document.getElementsByClassName('btn btn-dark col-12 mt-6'));

// //getting ID to confirm class

// console.log(document.getElementById('calc-button').className);

// function calculateResults(e){
    
//     console.log("calc" + `\nEvent type = ${e.type}`)

//    e.preventDefault();
// }


//document.getElementsByClassName('btn btn-dark col-12 mt-6').addEventListener('submit', calculateResults);
//document.querySelector

//const items = document.getElementsByClassName('btn btn-dark col-12 mt-6');