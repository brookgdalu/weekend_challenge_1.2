$(document).ready(function(){


//form submit

var $form = $('#EmployeeInfo'); //html form element label name and ids go here
var $FirstName = $('#FirstName');
var $LastName = $('#LastName');
var $EmployeeNumber = $('#EmployeeNumber'); 
var $Title = $('#Title');
var $Rating = $('#Rating');
var $Salary = $('#Salary');

var $Employees = $('#Employees'); 

$form.on('submit', function(e){
    e.preventDefault();
var employee = new Employee(
    $FirstName.val(), 
    $LastName.val(), 
    $EmployeeNumber.val(), 
    $Title.val(),
    $Rating.val(), 
    $Salary.val()
);

    appendEmployee(employee)


});

//constructor for employee
var Employee = function(firstName, lastName, empNum, title, score, salary){

    this.firstName = firstName;
    this.lastName = lastName;
    this.empNum = empNum;
    this.title = title; 
    this.score = score; 
    this.salary = salary;
}



//function to append 

function appendEmployee(emp){
    var $li = $('<li>'); 
$li.attr('class', 'score' + emp.score); // gives color to scores

$li.text(
      emp.firstName + ' ' + emp.lastName + ', ' +
      "Employee Number " + emp.empNum + ', ' + "Employee Title " + emp.title + ', ' +
      "Employee Review Score " + emp.score + ', ' +
      "Employee Salary " + "$" + emp.salary + '.'
    );
    var $button = $('<button>'); 
    $button.text('Terminate Employee'); 
    $button.attr('class', 'js-delete btn btn-danger'); 


    $li.append($button); 

  
    $Employees.append($li); 
}

//Delete employee

$Employees.on('click', '.js-delete', function(e){
    e.preventDefault();
    $(this).parent().remove();
})




}); 



































// function showInput() {
//     var message_entered =  document.getElementById("user_input").value;
//     document.getElementById('display').innerHTML = message_entered;
// //alert(message_entered); 

// }

// $.fn.serializeObject = function () {
//     var o = {};
//     var a = this.serializeArray();
//     $.each(a, function () {
//         if (o[this.name] !== undefined) {
//             if (!o[this.name].push) {
//                 o[this.name] = [o[this.name]];
//             }
//             o[this.name].push(this.value || '');
//         } else {
//             o[this.name] = this.value || '';
//         }
//     });
//     return o;
// };

// $(function () {
//     $('form').submit(function () {
//         $('#result').text(JSON.stringify($('form').serializeObject()));
//         return false;
//     });
// });