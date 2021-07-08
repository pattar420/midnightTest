import React from 'react'

const ContactPage = () => {
    return (
        <div className='contact-wrapper'>
            <form className='contact-form'>
                <b><div className='contact-banner'>Send us a message</div><br/></b>
                <b><div className='contact-info-section'></div></b><br/>
                <b><h3 className='form-label'>Name</h3></b><br/>
                <div className='name-input-group'>
                    <div className='another-name-class'>
                        <input type='text' id='first-name-text' name='first-name' />
                        <label htmlFor='first-name' className='sub-label'>First</label>
                        </div>                
                    <div className='another-name-class'>
                        <input type='text' id='last-name-text' name='last-name' />
                        <label htmlFor='last-name' className='sub-label'>Last</label><br/>  
                </div></div>

                <label htmlFor='email' className='form-label'><b><h3>Email</h3></b></label><br/>
                <input type='text' name='email' id='email-text' /><br/>
                <label htmlFor='message' className='form-label'><b><h3>Comment or Message</h3></b></label><br/>
                <textarea name='message' id='message-text' rows='10' cols='30' />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default ContactPage
