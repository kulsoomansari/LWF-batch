import React from 'react'


let fname = "kulsoom";
let lname = "ansari";
function Netflix(props){
    return(
        <> 
        {/* <h1>Top 5 best Netflix series</h1> */}
        <ol>
<li>Money Heist </li>
<li>Tomorrow </li>
<li>Extra Curricular </li>
 </ol>


<h1>my name is {`${fname} ${lname}`} </h1>

{/* props */}

<h1>props in react js {props.text.name}</h1>
        </>
    )
}

export default Netflix