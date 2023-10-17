import React from 'react'
import Input from '../../../../../../shared/components/inputs/Input'
import './form.css'
const Userform = ({action,method}) => {
    return (
        <form className="user-form-container" action={action} method={method}>
            <div className="form-group display-grid grid-2 gap-4">
            <Input type="text" name="firstname" required="true" label="Firstname" />
            <Input type="text" name="lastname" required="true" label="Lastname" />
            </div>
            <Input type="text" name="nickname" required="false" label="Display name" />
            <Input type="email" name="email" required="true" label="Email" />
            <fieldset className="form-password-container">
                <legend>Password Change</legend>
            <Input type="password" name="oldpassword" required="true" label="Old Password(leave blank to leave unchanged)" />
            <Input type="password" name="newpassword" required="true" label="New Password(leave blank to leave unchanged)" />
            <Input type="password" name="confirmnewpassword" required="true" label="Confirm New Password" />

            </fieldset>
            <button className='submit-btn'>SAVE ADDRESS</button>
        </form>
    )
}

export default Userform