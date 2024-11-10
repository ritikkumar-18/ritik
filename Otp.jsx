import React, { useState } from 'react'
import {BsFillShieldLockFill, BsTelephoneFill} from 'react-icons/bs'
import OtpInput from 'otp-input-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CgSpinner } from 'react-icons/cg'
import { auth } from '../firebase.config'
import { RecaptchaVerifier } from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'
import { FirebaseError } from 'firebase/app'

export const Otp = () => {
     const [otp,setOtp]=useState('');
     const [ph ,setPh] = useState('');
     const [loading,setLoading]= useState(false);
     const [showOtp, setShowOtp]= useState(false);
     const [user,setUser]=useState(null);

     function onCaptchVerify(){
        const auth=getAuth();
        if(!window.recaptchaVerifier ){
           window.recaptchaVerifier = new RecaptchaVerifier( auth,'recaptcha-container', {
          'size': 'invisible',
           'callback': (response) => {
            onSignup()
         },
           'expired-callback': () =>{
            
         }
            });  
        }
     }
       
     function onSignup(){
        setLoading(true)
        onCaptchVerify()

        const appVerifier = window.recaptchaVerifier;

        const formatPh= '+' + ph
        signInWithPhoneNumber(auth, formatPh, appVerifier)
       .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success('OTP sended successfully!');

    })  .catch((error) => {
         console.log(error)
         setLoading(false);
    });
}

    function onOTPverify(){
        setLoading(true)
        window.confirmationResult.confirm(otp).then(async(res)=>{
            console.log(res)
            setUser(res.user)
            setLoading(false)

        }).className(err=>{
            console.log(err)
            setLoading(false)
        })
    

     }

  return (
    <section className='bg-red-400 flex items-center justify-center h-screen'>
        <div>
            <Toaster toastOptions={{ duration:4000 }}/>
            <div id='recaptcha-container'></div>
            {
                user ?(
                    <h2 className='text-center text-white font-medium text-2xl'>
                   👍Login success
                </h2>):(
            
            <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
                <h1 className='text-center leading-normal text-white font-medium text -3xl mb-6'>Welcome to <br/>OTP verify</h1>
                 {showOtp?
                 <>
                <div className='bg-white text-red-400 w-fit mx-auto p-4 rounded-full'>
                    <BsFillShieldLockFill size={30}/>
                </div>

                <label htmlFor='otp'className='font-bold text-2xl text-white text-center'>
                    Enter your OTP 
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                
                  OTPLength={6} 

                  otpType='number'

                  disabled={false}

                  autoFocus className='mr-0 flex-1 py-5 outline-none'>

                  </OtpInput>
                  <button  onClick={onOTPverify} className=' bg-red-500 w-full flex gap-1 items-center justify-center rounded-full shadow-md transition-300 py-2.5 text-white font-bold'>
                   {loading&&
                   
                    <CgSpinner size={20} className='mt-1 animate-spin'/>}
                    <span>Verify OTP</span>
                  </button>
                </> :


                <>
                <div className='bg-white text-red-400 w-fit mx-auto p-4 rounded-full'>
                    <BsTelephoneFill size={30}/>
                </div>

                <label htmlFor=''className='font-bold text-xl text-white text-center mb-4'>
                    Verify your Phone number
                </label>
                <PhoneInput country={'in'} value={ph} onChange={setPh}/>
                
                  <button onClick ={onSignup}className=' bg-red-500 w-full flex gap-1 items-center justify-center rounded-full shadow-md transition-300 py-2.5 text-white font-bold mt-6'>
                   {loading &&
                   
                    <CgSpinner size={20} className='mt-1 animate-spin'/>}
                    <span>Send OTP</span>
                  </button>
                </>}
            </div>
                )}
            
            
            
        </div>
    </section>
  )
}
