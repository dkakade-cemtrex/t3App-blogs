import { Post } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'
import TopHeading from '../../components/components/TopHeading/TopHeading'
import { formatDate } from '../../utils/date';
import { trpc } from '../../utils/trpc';

export default function Profile() {

  const { data: sessionData } = useSession();


  const post = trpc.user.getUser.useQuery({ email: sessionData?.user?.email });
  const userPosts = post.isSuccess ? post.data : {
    name: '',
    email: '',
    bio: '',
    post: []
  }

  const user_posts = userPosts?.posts ? userPosts.posts : []

  return (
    <>
      <div id="fh5co-contact" className="fh5co-no-pd-top">
        <div className="container">
          <TopHeading pageName={'Profile'} />
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="fh5co-staff">
                <img src="images/user-2.jpg" alt="Free HTML5 Templates by FreeHTML5.co" />
                <h3>{userPosts?.name}</h3>
                <strong className="role">{userPosts?.email}</strong>
                <p>{userPosts?.bio}</p>
                <ul className="fh5co-social-icons">
                  <li><a href="#"><i className="icon-facebook"></i></a></li>
                  <li><a href="#"><i className="icon-twitter"></i></a></li>
                  <li><a href="#"><i className="icon-dribbble"></i></a></li>
                  <li><a href="#"><i className="icon-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-right">
              <Link href="profile/edit">
                <input type="button" id="editProfile" className="btn btn-primary" value="Edit Profile" />
              </Link>&ensp;
              <Link href="/add-blog">
                <input type="button" id="addBlog" className="btn btn-primary" value="Add Blog" />
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div id="fh5co-blog">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-12 col-md-offset-0 text-center fh5co-heading mb-2">
              <h2><span>Your Blogs</span></h2>
            </div>
          </div>
          <div className="row">

            {user_posts && user_posts.map((post, index:number) => (
              <div className="col-md-4" key={index}>
                <div className="fh5co-blog animate-box">
                  <div className="title text-center">
                    <span className="posted-on">{formatDate(post.date_updated.toDateString())}</span>
                    <h3 className='truncate'><Link href={`blogs/${post.id}`}>{post.title}</Link></h3>
                    <span className="category">{post.Category?.name}</span>
                  </div>
                  <Link href={`blogs/${post.id}`}><img className="img-responsive h-96" src={`../${post.image}`} alt="" /></Link>
                  <div className="blog-text text-center">
                    <p className='truncate'>{post.content}</p>
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
      </div>
    </>
  )
}
