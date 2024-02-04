import React, { useState } from 'react'

function PhoneOtp() {
    const [phoneNumber,setphoneNuber]=useState();
    const [showotp,setshowotp]=useState(false);
    const handlephonesubmit=(e)=>{
        e.preventDefault();
        const regex=/[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert('Invalid Phone Number');
            return;

        }
        setshowotp(true);

    }
  return (
    <div>
       {!showotp?(
 <form onSubmit={handlephonesubmit} >
 <input placeholder='Enter phone humber' type="text" value={phoneNumber} onChange={(e)=>{setphoneNuber(e.target.value)}} />
 <button type='submit'>Submit</button>
</form>
       ):(
        <div>
            OTP sent to this number {phoneNumber}
        </div>
       )}
       
    </div>
  )
}

export default PhoneOtp