import React from 'react';
import {useState} from "react";
import {createContact} from "../../http/contactAPI";
import './form.css';
import redCartoon4 from "../../assets/redCartoon4.svg";
import goodie1 from "../../assets/goodie1.svg";
import redCartoon3 from "../../assets/redCartoon3.svg";
import location from "../../assets/location.svg";
import ellipse31 from "../../assets/ellipse31.svg"
import {cloud1,
    cloud2,
    cloud3,
    cloud4,
    cloud5,
    cloud6,
    cloud7,
    cloud8,
    cloud9,
    cloud10 } from "../../assets/clouds";


const Form = () => {
    const cloudImages = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validate = () => {
        if (name.length > 0  && email.length > 0 && message.length > 0) {
          return true;
        }
    };

    const handleSubmit = (event) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)
        createContact(formData)
    }

    return(
    <div className="feedbackForm">
        <div className="images">
            <div className="clouds">
                {cloudImages.map((cloud, index) => (
                    <img key={index} id={`cloud${index}`} src={cloud} alt="Cloud" />
                ))}
            </div>
            <div className="backgroundImages">
                <img alt="img" className="circle" src={ellipse31}/>
            </div>
            <div className="mainImages">
                <img alt="img" className="location" src={location}/>
            </div>
            <div className="smiles">
                <img alt="img" className="redCartoon4" src={redCartoon4}/>
                <img alt="img" className="redCartoon3" src={redCartoon3}/>
                <img alt="img" className="goodie1" src={goodie1}/>
            </div>
        </div>
        <div className="inputForm">
             <h1>Reach out to us!</h1>
            <form onSubmit={handleSubmit}>

                <input id="name" type="name" value={name} placeholder="Your name*" onChange={(e) => { setName(e.target.value) }}/>
                <input id="email" type="email" value={email} placeholder="Your e-mail*" onChange={(e) => { setEmail(e.target.value) }}/>
                <textarea id="message" value={message} placeholder="Your message*" onChange={(e) => { setMessage(e.target.value) }}/>
                <button type='submit' disabled={!validate()} >Share Contact</button>
            </form>
        </div>
    </div>
    )
};

export default Form;