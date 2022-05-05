import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [apiData, setapiData] = useState([])
    const [showErr, setshowErr] = useState('')
    const [showPassErr, setshowPassErr] = useState('')
    const [showEmailErr, setshowEmailErr] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => (res.json())).then(
            res => setapiData(res)
        )
    })

    const login = () => {
        if (password != "12345678") {
            setshowPassErr('Please enter valid password')
        }
        else{
            let count = 0
            apiData.map((item:any) => {
                if(email.toLowerCase() == item?.email.toLowerCase()){
                    
                    count++
                    
                }
            })

            if(count == 0){
                setshowEmailErr('Please enter valid email id')
                toast.error('Please provide valid details')
            }
            else{
                setshowEmailErr('')
                toast.success('Logged In Successfully')

            }
        }


    }


    return (
        <section className="section-content py-5">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="my-4">
                            <div className="title">Already a partner?</div>
                            <div className="details">
                                <div className="pb-28">Welcome back! Please login to access all the benefits that come with being a partner.</div>
                                <div>Did you know that partners receive automated commission payments, access to marketing resources ane more? You never need to worry about lead time for paymets. Not to mention our seamless integrations, like Salesforce, Crossbeam
                                    and more!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="assets/img/bg.png" className="img-fluid bg-img" />
                        <div className="d-flex my-4">
                            <div className="col-4">
                                <div className="reg shadow text-center">
                                    <div className="reg-title">Register</div>
                                    <div className="become">Become a partner.</div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="sign shadow">
                                    <div className="sign-title">Sign in.</div>

                                    <div className="mb-3 row justify-content-center align-items-center">
                                        <label htmlFor="staticEmail" className="col-sm-3 custom" >Email</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control custom-form text-white" value={email} onChange={(e) => {setemail(e.target.value); setshowEmailErr('')}} />

                                            {showEmailErr ?
                                                <div className='text-danger'>{showEmailErr}</div>
                                                :
                                                null

                                            }
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="inputPassword" className="col-sm-3 custom">Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control custom-form text-white" value={password} onChange={(e) => {setpassword(e.target.value); setshowPassErr('')}} />
                                            {showPassErr ?
                                                <div className='text-danger'>{showPassErr}</div>
                                                :
                                                null

                                            }
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-5">
                                        <div className="forgot">Forgot password?</div>

                                        <div className="">
                                            <button type="button" className="btn btn-login" onClick={login}>LOG IN</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;
