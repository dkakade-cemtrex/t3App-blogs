import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import Category from '../../components/Category';
import Pagination from '../../components/components/Pagination';
import TopHeading from '../../components/components/TopHeading/TopHeading'
import { formatDate } from '../../utils/date';
import { trpc } from '../../utils/trpc';


export default function Blog() {
	const post = trpc.post.getAll.useQuery();
	const postData = post.isSuccess ? post.data : []

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);
	const lastPageIndex = currentPage * postsPerPage;
	const firstPageIndex = lastPageIndex - postsPerPage

	const pData = postData.slice(firstPageIndex,lastPageIndex)

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
											<Link href={`blogs/${post.id}`}><img className="img-responsive h-96" src={`../${post.image}`} alt=""/></Link>
											<div className="blog-text text-center">
												<p  className="truncate">{post.content}</p>
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

								<Pagination totalPosts={postData.length}
								postsPerPage = {postsPerPage}
								setCurrentPage={setCurrentPage}
								/>

							</div>
						</div>

						<aside id="sidebar">
							<div className="col-md-3">
								{/* <div className="side animate-box">
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
								</div> */}
								{/* <div className="side animate-box">
									<div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
										<h2><span>Latest Posts</span></h2>
									</div>
									<div className="blog-entry">
										<a href="#">
											<img src="images/blog-1.jpg" className="img-responsive" alt="" />
											<div className="desc">
												<span className="date">Dec. 25, 2016</span>
												<h3>Most Beautiful Site in 2016</h3>
											</div>
										</a>
									</div>
									<div className="blog-entry">
										<a href="#">
											<img src="images/blog-2.jpg" className="img-responsive" alt="" />
											<div className="desc">
												<span className="date">Dec. 25, 2016</span>
												<h3>Most Beautiful Site in 2016</h3>
											</div>
										</a>
									</div>
									<div className="blog-entry">
										<a href="#">
											<img src="images/blog-1.jpg" className="img-responsive" alt="" />
											<div className="desc">
												<span className="date">Dec. 25, 2016</span>
												<h3>Most Beautiful Site in 2016</h3>
											</div>
										</a>
									</div>
								</div> */}
								<div className="side animate-box">
									<div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
										<h2><span>Category</span></h2>
									</div>
									<Category />
								</div>
								{/* <div className="side animate-box">
									<div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
										<h2><span>Intagram</span></h2>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="insta" style={{ backgroundImage: 'url(images/insta-1.jpg)' }}>

											</div>
										</div>
									</div>
								</div> */}
							</div>
						</aside>

					</div>
				</div>
			</div>
		</>
	)
}



