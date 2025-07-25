
import React from 'react' 
import './Contact.css'
const Contact = () => {
    const isloggedIn = false;
 
    if  (isloggedIn) {

    return(
        <h1>welcome back</h1>
    )
}else {
    return(
        <h1>please login</h1>
    )
}
}
export default Contact