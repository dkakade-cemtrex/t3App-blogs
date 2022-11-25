import { useRouter } from 'next/router';
import React from 'react'
import TopHeading from '../../../components/components/TopHeading/TopHeading'
import { formatDate } from '../../../utils/date';
import { trpc } from '../../../utils/trpc';
import Link from 'next/link';
import Category from '../../../components/Category';



export default function Blog() {

    const router = useRouter()
    const { id } = router.query

    const uid = parseInt(id)


    const post = trpc.post.byCategory.useQuery({ id: uid });
    const pData = post.isSuccess ? post.data : []

    return (
        <>
            <div id="fh5co-content" className="fh5co-no-pd-top">
                <div className="container">
                    <TopHeading pageName={'Our Blogs'} />
                    <div className="row">
                        <div className="col-md-9 col-padded-right">
                            <div className="row">

                                {pData && pData.map((post, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="fh5co-blog animate-box">
                                            <div className="title text-center">
                                                <span className="posted-on">
                                                    {formatDate(post.date_updated.toDateString())}
                                                </span>
                                                <h3 className="truncate">{post.title}</h3>
                                                <span className="category">{post.Category?.name}</span>
                                            </div>
                                            <Link href={`/blogs/${post.id}`}><img className="img-responsive h-96" src={`../../${post.image}`}  alt="" /></Link>
                                            <div className="blog-text text-center">
                                                <p className="truncate">{post.content}</p>

                                            </div>
                                        </div>
                                    </div>
                                ))
                                }

                            </div>
                        </div>

                        <aside id="sidebar">
                            <div className="col-md-3">


                                <div className="side animate-box">
                                    <div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
                                        <h2><span>Category</span></h2>
                                    </div>
                                    <Category />
                                </div>

                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </>
    )
}
