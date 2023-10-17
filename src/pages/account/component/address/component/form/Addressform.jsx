import React from 'react'
import Input from '../../../../../../shared/components/inputs/Input'
const Addressform = ({formname,action,method}) => {
    return (
        <form className="address-container-form" action={action} method={method}>
            <h3 className='pb-4'>{formname}</h3>
            <Input type="text" name="firstname" required="true" label="Firstname" />
            <Input type="text" name="lastname" required="true" label="Lastname" />
            <Input type="text" name="company" required="false" label="Company Name(optional)" />
            <Input type="text" name="country" required="true" label="Country" />
            <Input type="text" name="town" required="true" label="Town/City" />
            <Input type="text" name="state" required="true" label="State/Zone" />
            <Input type="text" name="postcode" required="true" label="Postcode/Zip" />
            <Input type="text" name="phone" required="true" label="Phone" />
            <Input type="email" name="email" required="true" label="Email" />
            <button className='submit-btn'>SAVE ADDRESS</button>
        </form>
    )
}

export default Addressform