import React, { SetStateAction } from 'react'

type props = {
    totalPosts: number,
    postsPerPage : number,
    setCurrentPage: any,
}

export default function Pagination({ totalPosts, postsPerPage, setCurrentPage }: props) {
    const pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>
                    <span>
                        {
                            pages.map((page, index) => {
                                return <button className="border-solid" key={index} onClick={() => setCurrentPage(page)}> {page} &#8729; </button>
                            })
                        }
                    </span>
                </h2>
            </div>
        </div>
    )
}
