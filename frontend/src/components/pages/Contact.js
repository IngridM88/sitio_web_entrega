import React from "react";
import 'react-bootstrap-icons'
import "../styles/pages/contact.css";


const Contact = (props)=> {
    return (
        <body>
       
        <div class="contactbigbox" > 
        <div class="iconsbox" > 
        <div class="contacticon" ><a href="" ><i class="bi bi-instagram"/></a></div>
        
        <div class="contacticon" ><a href="" ><i class="bi bi-pinterest"/></a></div> 
        <div class="contacticon" ><a href="" ><i class="bi bi-facebook"/></a></div> 
        <div class="imgbox" ><a href="" ><img src="./img/in_printsm.jpg" alt="inprint logo" /></a></div> </div> 
        <div class="contactform" > 
        <h2>Send me a message !</h2> 
        <form action="" > <label for="Name" >Name / Company :</label> <br/> <input type="text" /> <br/> <label for="E-mail" >E-mail :</label> <br/> <input type="text" /> <br/> <textarea name="message" id="" cols="50" rows="7" placeholder="Message..." ></textarea> <br/> <input type="submit" value="Send" /> </form> </div> 
        </div> 
       
        </body>
        );
}

export default Contact;