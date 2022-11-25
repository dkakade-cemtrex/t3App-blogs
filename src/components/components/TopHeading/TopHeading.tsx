import React from 'react'

export default function TopHeading( {pageName} ) {
    return (
        <>
            <div className="row animate-box">
                <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                    <h2><span>{ pageName }</span></h2>
                </div>
            </div>
        </>
    )
}
