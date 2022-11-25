import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

export default function layout({ children }) {
    return (
        <>
            <div id="page">
                <Header />
                {children}
                <Footer/>
            </div>
            <div className="gototop js-top">
                <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
            </div>

        </>
    )
}
