import React from 'react'

const ContactPage = () => {
    return (
        <div className='contact-wrapper'>
            <form className='contact-form'>
                <b><div className='contact-banner'>Send us a message</div><br/></b>
                <b><div className='contact-section'></div></b><br/>
                <label for='name' className='form-label'>Name</label><br/>
                <input type='text' id='name-text' name='name' /><br/>
                <label for='email' className='form-label'>Email</label><br/>
                <input type='text' name='email' id='email-text' /><br/>
                <label for='message' className='form-label'>Comment or Message</label><br/>
                <input type='text' name='message' id='message-text' multiple='true' placeholder='' />
                <button type='submit' 
            </form>
        </div>
    )
}

export default ContactPage
