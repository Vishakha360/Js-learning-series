const account_id=11445533
let account_email="pawarvishakha360@gmail.com"
var account_password="12345"
account_city="Pune" //please do not use this
let account_state; // its value is undefined
let account_null=null

let $=2,_=4
console.log($+4);//output is 6 

// let 2variable="vishakha"
// let full-name="vishakha"
// let for="vishakha"
// account_id=2 // not allowed because of its type is const
console.log(account_id)

//we can declare multiple variables in one line
let a=2,b=5,c="test"

//redeclaring variables
var d=2,d=6 // this works
// let e=2,e=9 // this will not work




/*
Prefer not to use var :because of issue block scope and functional scope {}
undefined means a variable has been declared but has not yet been assigned a value,
whereas null is an assignment value, meaning that a variable has been declared and given the value of null
*/
console.table([account_id,account_email,account_password,account_city,account_state,account_null,a,b,c,d])