import React, { useRef, useState } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();

        // Change button text after form submission
        setButtonText("Message Sent");

        // Send the email using EmailJS
        emailjs.sendForm('service_bdfl0ie', 'template_4lmc4or', form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="contactForm">





            <div className="contactFormHeader contact2-container ">
                <div className="container">
                <h1>Start Your Recovery Today</h1>
                <p>If you or someone you love is struggling with both mental health and substance use disorders, don’t wait. Contact Antioch Rehab Center to learn more about our dual diagnosis treatment program and take the first step towards a healthier, addiction-free life.</p>
                <i><p>We'll keep your contact information strictly confidential.</p></i>
                </div>
            </div>

            <section className="container">
                <div className="contact-content">

                    <div className="footer_get_touch_inner">
                        <div className="get_form_inner">
                            <div className="get_form_inner_text">
                                <h3>Get In Touch</h3>
                            </div>
                            <form ref={form} onSubmit={sendEmail}>

                                <div className="inputs">


                                    <div className="input-flex">
                                    <input 
                                        type="text" 
                                        name='name' 
                                        placeholder='First Name' 
                                        required 
                                        pattern="[A-Za-z\s]+"
                                        title="Please enter a valid name using only letters." 
                                    /> 
                                        <input 
                                        type="text" 
                                        name='name' 
                                        placeholder='Last Name (optional)' 
                                    /> 
                                    </div>
                                    <br/>

                                    <div className="input-flex">
                                        <input 
                                            type="email" 
                                            name='email' 
                                            placeholder='Email' 
                                            required 
                                        /> 

                                        <input 
                                            type="tel" 
                                            name='phone' 
                                            placeholder='Phone' 
                                            pattern="[0-9]*" 
                                            maxLength="15" 
                                            required 
                                            title="Please enter a valid phone number." 
                                        /> 
                                    </div>
                                    <br/>
                                    <input 
                                        type="text" 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required 
                                    /> <br/>
                                </div>
                                <div>
                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
                                        cols="30" 
                                        rows="10" 
                                        required
                                    ></textarea>

                            <div className="disclaimer">
                              <p>Antioch Rehab needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                  <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                              </LinkRoll></p>
                            </div>


                                    <input type="submit" value={buttonText} />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="google-map">
                        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1800%20Vine%20St.%20Los%20Angeles%20Ca%2090028+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                    </div>

                </div>


                <div className="contact-cards-container">
                <div className="get_form_inner2">
                    <h2>CALL</h2>
                    <p><AiOutlinePhone /><a href="tel:3234525661"> +1 323 452-5661</a></p>
                </div>

                <div className="get_form_inner2">
                    <h2>EMAIL</h2>
                    <p><AiOutlineMail /> info@antiochrehab.com </p><br />
                </div>

                <div className="get_form_inner2 no-border">
                    <h2>LOCATION</h2>
                    <p><BsFillPinMapFill /> 3720 Sunset Ln., Suite B, Antioch CA 94509</p>
                </div>
            </div>



            </section>




        </div>
    );
}

export default ContactForm;
