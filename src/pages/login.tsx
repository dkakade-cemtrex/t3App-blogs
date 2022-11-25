
import { signIn } from 'next-auth/react'
import React, { FormEventHandler } from 'react'
import { useState } from 'react'
import TopHeading from '../components/components/TopHeading/TopHeading'

export default function Login() {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const [errorMsg, setError] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const user = await signIn('credentials', {
            email: userInfo.email,
            password: userInfo.password,
        });
        setError(user?.error ? user.error : "")
    }
    return (
        <>
            <div id="fh5co-contact" className="fh5co-no-pd-top">
                <div className="container">
                    <TopHeading pageName={'Login'} />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-3 col-padded-right">
                            <form onSubmit={handleSubmit}>
                                <div className="col-md-9 field mb-6">
                                    <label>Email</label>
                                    <input value={userInfo.email}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })
                                        }
                                        type="email" name="FName" id="email" className="form-control" required />
                                </div>
                                <br />
                                <div className="col-md-9 field mb-6">
                                    <label>Password</label>
                                    <input value={userInfo.password}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })
                                        }
                                        type="password" name="password" id="password" className="form-control" required />
                                </div>
                                {errorMsg &&
                                <div className="col-md-9 field mb-6">
                                    <p className="text-red-500">{errorMsg}</p>
                                </div>
                            }
                                <div className="col-md-9 field">
                                    <input type="submit" id="submit" className="btn btn-primary" value="Login" />
                                </div>

                            </form>
                        </div>

                        {/* <aside id="sidebar">
                            <div className="col-md-3">
                                <div className="side animate-box">
                                    <div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
                                        <h2><span>About Me</span></h2>
                                    </div>
                                    <div className="fh5co-staff">
                                        <img src="images/user-2.jpg" alt="Free HTML5 Templates by FreeHTML5.co" />
                                        <h3>Jean Smith</h3>
                                        <strong className="role">CEO, Founder</strong>
                                        <p>Quos quia provident conse culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita.</p>
                                        <ul className="fh5co-social-icons">
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-dribbble"></i></a></li>
                                            <li><a href="#"><i className="icon-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside> */}

                    </div>
                </div>
            </div>
        </>
    )
}

