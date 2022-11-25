import React from 'react'
import TopHeading from '../components/components/TopHeading/TopHeading'

// const pageName = 'About Us'

export default function about() {
  return (
    <>
        <div id="fh5co-content" className="fh5co-no-pd-top">
		<div className="container">
			<TopHeading pageName={'About Us'}/>
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<div className="fh5co-staff">
						<img src="images/user-2.jpg" alt="Free HTML5 Templates by FreeHTML5.co"/>
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
		</div>
	</div>
	<div id="fh5co-blog">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
					<h2><span>My Posts</span></h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="fh5co-blog animate-box">
						<div className="title text-center">
							<span className="posted-on">Nov. 15th 2016</span>
							<h3><a href="#">Modeling &amp; Stylist in USA</a></h3>
							<span className="category">Lifestyle</span>
						</div>
						<a href="#"><img className="img-responsive" src="images/blog-2.jpg" alt=""/></a>
						<div className="blog-text text-center">
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
				<div className="col-md-4">
					<div className="fh5co-blog animate-box">
						<div className="title text-center">
							<span className="posted-on">Nov. 15th 2016</span>
							<h3><a href="#">Modeling &amp; Stylist in USA</a></h3>
							<span className="category">Lifestyle</span>
						</div>
						<a href="#"><img className="img-responsive" src="images/blog-1.jpg" alt=""/></a>
						<div className="blog-text text-center">
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
				<div className="col-md-4">
					<div className="fh5co-blog animate-box">
						<div className="title text-center">
							<span className="posted-on">Nov. 15th 2016</span>
							<h3><a href="#">Modeling &amp; Stylist in USA</a></h3>
							<span className="category">Lifestyle</span>
						</div>
						<a href="#"><img className="img-responsive" src="images/blog-2.jpg" alt=""/></a>
						<div className="blog-text text-center">
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
			</div>
		</div>
	</div>
    </>
  )
}
