import React from 'react'
import TopHeading from '../components/components/TopHeading/TopHeading'

export default function contact() {
  return (
    <>
    <div id="fh5co-contact" className="fh5co-no-pd-top">
		<div className="container">
        <TopHeading pageName={'Contact Us'}/>
			<div className="row">
				<div className="col-md-9 col-padded-right">
					<form action="#">
						<div className="form-group row">
							<div className="col-md-6 field">
								<label>First Name</label>
								<input type="text" name="FName" id="firstname" className="form-control"/>
							</div>
							<div className="col-md-6 field">
								<label>Last Name</label>
								<input type="text" name="FName" id="lastname" className="form-control"/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-md-6 field">
								<label>Email</label>
								<input type="text" name="FName" id="email" className="form-control"/>
							</div>
							<div className="col-md-6 field">
								<label>Phone</label>
								<input type="text" name="FName" id="phone" className="form-control"/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-md-12 field">
								<label>Message</label>
								<textarea name="message" id="message" className="form-control"></textarea>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-md-12 field">
								<input type="submit" id="submit" className="btn btn-primary" value="Send Message"/>
							</div>
						</div>
					</form>
				</div>
				
				<aside id="sidebar">
					<div className="col-md-3">
						<div className="side animate-box">
							<div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
								<h2><span>About Me</span></h2>
							</div>
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
				</aside>

			</div>
		</div>
	</div>
    </>
  )
}
