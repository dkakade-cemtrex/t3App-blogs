import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Author from '../../components/Author'
import Category from '../../components/Category'
import TopHeading from '../../components/components/TopHeading/TopHeading'
import { formatDate } from '../../utils/date'
import { trpc } from '../../utils/trpc'
import Image from 'next/image'
import CommentFrom from '../../components/components/CommentForm'
import CommentReply from '../../components/components/Comment'
import Comment from '../../components/components/Comment'


export default function PostDetails() {

  const router = useRouter()
  const { id } = router.query
  let uid = 0
  if (typeof (id) === 'string') {
    uid = parseInt(id)
  }

  const pDataSchema = {
    "id": 0, "image": "",
    "title": "", "content": "", "Category": {
      "id": 0,
      "name": ""
    },
    "user": {
      "name": "",
      "id": "",
      "email": "",
      "emailVerified": null,
      "image": "",
      "password": "",
      "bio": ""
    },
    "date_updated": ""
  }

  const post = trpc.post.details.useQuery({ id: uid });
  const pData = post.isSuccess ? post.data : pDataSchema

  const relatablePosts = trpc.post.byCategory.useQuery({ id: pData.Category?.id });
  const relatable = relatablePosts.isSuccess ? relatablePosts.data : []

  const rpData = relatable.slice(-4)




  return (
    <>
      <div id="fh5co-content" className="fh5co-no-pd-top">
        <div className="container">
          <TopHeading pageName={'Blog Details'} />
          <div className="row">
            <div className="col-md-9 col-padded-right">
              <div className="row">
                <div className="col-md-12">

                  <div className="fh5co-blog animate-box">
                    <div className="title title-pin text-center">
                      <span className="posted-on">{formatDate(pData.date_updated.toString())}</span>
                      <h3>{pData.title}</h3>
                      <span className="category">{
                        pData.Category &&
                        pData.Category.name
                      }</span>
                    </div>
                    <img className="img-responsive" src={`/${pData.image}`} />
                    <div className="blog-text text-center">
                      <p>{pData.content}</p>
                      <ul className="fh5co-social-icons">
                        <li>Share:</li>
                        <li><a href="#"><i className="icon-twitter-with-circle"></i></a></li>
                        <li><a href="#"><i className="icon-facebook-with-circle"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin-with-circle"></i></a></li>
                        <li><a href="#"><i className="icon-dribbble-with-circle"></i></a></li>
                      </ul>
                    </div>
                    {/* <span className='text-slate-500'>{comments?.length} comments</span> */}
                  </div>
                </div>

                <div className="col-md-12 mb-20">
                  <CommentFrom uid={uid} cid={null}/>
                </div>

                <Comment uid={uid} id={null}/>

                {/* {comments && comments.map((comment, index) => (
                  <div key={index} className="col-md-12 mb-14">
                    <div className='col-md-2'>
                      <img className="img-responsive h-20 w-20 rounded-full" src='../images/user-2.jpg' />
                    </div>
                    <div className='col-md-10'>
                      {comment.user.name}<br />
                      {comment.body}
                      <br />
                      {comment.replies.length > 0 &&
                        <span onClick={()=>showReply()} className='cursor-pointer'>{comment.replies.length} Replies </span>
                      }
                      <span onClick={()=>handleClick(index+1)} className="cursor-pointer"> Reply</span>
                      <br />
                      {replyClick === index+1 &&
                        <CommentFrom uid={uid} cid={comment.id}/>
                      }
                      <br />
                      {reply && 
                        <CommentReply id={comment.id}/>
                      }
                    </div>
                  </div>
                ))
                } */}

                
                {
                  rpData && rpData.map((post, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="fh5co-blog animate-box">
                        <div className="title text-center">
                          <span className="posted-on">{formatDate(post.date_updated.toDateString())}</span>
                          <h3 className="truncate">{post.title}</h3>
                          <span className="category">Lifestyle</span>
                        </div>
                        <a href="#"><Image className="img-responsive h-96" src={`/${post.image}`} height={100} width={100} alt="" /></a>
                        <div className="blog-text text-center">
                          <p className="truncate">{post.content}</p>
                          <ul className="fh5co-social-icons">
                            <li>Share:</li>
                            <li><a href="#"><i className="icon-twitter-with-circle"></i></a></li>
                            <li><a href="#"><i className="icon-facebook-with-circle"></i></a></li>
                            <li><a href="#"><i className="icon-linkedin-with-circle"></i></a></li>
                            <li><a href="#"><i className="icon-dribbble-with-circle"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>

            <aside id="sidebar">
              <div className="col-md-3">
                <Author {...pData.user} />
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





