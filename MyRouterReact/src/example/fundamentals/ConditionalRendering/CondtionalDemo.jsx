import React from 'react'


function CondtionalDemo(isLoggedIn) {
    if (isLoggedIn = true) {
     return   <h2>You are Logged in.</h2>
    } else {
       return  <h2>You Are Logged Out</h2>
    }
    
}



    // Ternary Operator 


// function CondtionalDemo(isLoggedIn) {
    
//   return isLoggedIn = true ? <h2>You are Logged in.</h2> : <h2>You Are Logged Out</h2>;
// }

export default CondtionalDemo