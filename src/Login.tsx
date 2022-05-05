import React, { useEffect, useState } from 'react';


function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [apiData, setapiData] = useState([])
    const [showErr, setshowErr] = useState('')
    const [showPassErr, setshowPassErr] = useState('')
    const [showEmailErr, setshowEmailErr] = useState('')
    const [showToastMessage, setshowToastMessage] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => (res.json())).then(
            res => setapiData(res)
        )
    })

    const login = () => {
        if (password != "12345678") {
            setshowPassErr('Please enter valid password')
        }
        else {
            let count = 0
            apiData.map((item: any) => {
                if (email.toLowerCase() == item?.email.toLowerCase()) {

                    count++

                }
            })

            if (count == 0) {
                setshowEmailErr('Please enter valid email id')
                setshowToastMessage('Please provide valid details')
            }
            else {
                setshowEmailErr('')
                setemail('')
                setpassword('')
                setshowToastMessage('Logged In Successfully')
            }

            setTimeout(() => {
                setshowToastMessage('')
            }, 3000);
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
                                            <input type="text" className="form-control custom-form text-white" value={email} onChange={(e) => { setemail(e.target.value); setshowEmailErr('') }} />

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
                                            <input type="password" className="form-control custom-form text-white" value={password} onChange={(e) => { setpassword(e.target.value); setshowPassErr('') }} />
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
            {
                showToastMessage ?
                    <div className='position-fixed bottom-0 start-50  p-6 mb-4'>
                        <div style={{height: '60px'}} className={`toast align-items-center show text-white ${showEmailErr || showPassErr ? 'bg-danger' : 'bg-primary'}`} role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex align-items-center h-100">
                                <div className="toast-body">
                                    {showToastMessage}
                                </div>
                                <button type="button" className="btn-close me-2 m-auto btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }

        </section>

    );
}

export default Login;
