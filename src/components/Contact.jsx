import React from 'react';



const Contact = ({sectionActive}) => {
    return ( 
        <div className="row section">
            <div className="col-6 contact">
                <h1>Contact</h1>
                <div className={sectionActive ? 'contact-box is-active' : 'contact-box'}>

                    <p className="contact-p">If you have any queries or want to work with me or produce 
                    a personal site<br/> you can reach me with these contact details.</p>

                    <div className="contact-item">
                        <ion-icon name="call"></ion-icon> Mobile: <span>+886 925711860</span>
                        </div>
                    <div className="contact-item">
                        <ion-icon name="business"></ion-icon> Office: <span>(02) 2876-5716</span>
                    </div>
                    <div className="contact-item">
                        <ion-icon name="mail"></ion-icon> Email: <span>darkphoton@krantinebhwani.com</span>
                    </div>

                </div>             
            </div>
            
            <div className="col"></div>
        </div>
    );
}
 
export default Contact;