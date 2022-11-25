import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-4 fh5co-widget">
                            <h4>Paper</h4>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        </div>
                        <div className="col-md-4 col-md-push-1">
                            <h4>Links</h4>
                            <ul className="fh5co-footer-links">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/blogs">Blogs</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-md-push-1">
                            <h4>Contact Information</h4>
                            <ul className="fh5co-footer-links">
                                <li>2nd floor Silver Oak Plaza <br />Amravati</li>
                                <li>+ 1235 2355 98</li>
                                <li>info@info.com</li>
                            </ul>
                        </div>

                    </div>

                   

                </div>
            </footer>
        </>
    )
}
