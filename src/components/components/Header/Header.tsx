import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';


export default function Header() {
    const { data: sessionData } = useSession();

    const router = useRouter();

    return (<>

        <nav className="fh5co-nav" role="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="top-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7 text-left menu-1">
                                    <ul>
                                        <li className={router.pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                                        <li className={router.pathname == "/blogs" ? "active" : ""}>
                                            <Link href="/blogs">Blogs</Link>
                                        </li>
                                        {sessionData &&
                                            <li className={router.pathname == "/profile" ? "active" : ""}><Link href="/profile">Profile</Link></li>
                                        }
                                    </ul>
                                </div>
                                <div className="col-sm-5">
                                    <ul className="fh5co-social-icons">
                                        {sessionData &&
                                            <li className='cursor-pointer' onClick={() => signOut()}>Logout</li>
                                        }
                                        {!sessionData &&
                                            <li className='cursor-pointer' onClick={() => signIn()}>Login</li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center menu-2">
                        <div id="fh5co-logo">
                            <h1>
                                <a href="index.html">
                                    Paper<span>.</span>
                                    <small>Blog </small>
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>

    )
}
