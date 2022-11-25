import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import { formatDate } from "../utils/date";
import Category from "../components/Category";

const Home: NextPage = () => {

  const post = trpc.post.getAll.useQuery();

  const first_post = post.isSuccess ? post.data[0] : {
    "id": 0,
    "image":"",
    "title":"",
    "content":""
  }

  const second_post = post.isSuccess ? post.data.slice(1, 3) : []

  const latest_posts = post.isSuccess ? post.data.slice(3, 7) : []

  const full_post = post.isSuccess ? post.data.slice(7, 8) : []

  const other_posts = post.isSuccess ? post.data.slice(8, 13) : []

  return (
    <>
      <aside id="fh5co-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-8">

              <div className="relative overflow-hidden">
                <Link href={`blogs/${first_post?.id}`}>
                  <img src={`../${first_post?.image}`} alt="Avatar" className="object-cover w-full h-[600px]" />
                  <div className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center leading-4">
                    <h1 className="truncate">{first_post?.title}</h1>
                    <h2 className="truncate">{first_post?.content}</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              {second_post && second_post.map((post, index) => (
                <Link key={index} href={`blogs/${post.id}`} className="featured text-center animate-box" style={{ backgroundImage: `url(${`../${post.image}`})` }}>
                  <div className="desc">
                    <span className="date">{formatDate(post.date_updated.toDateString())}</span>
                    <h3 className="truncate">{post.title}</h3>
                    <span className="category">{post.Category?.name}</span>
                  </div>
                </Link>
              ))
              }
              {/* <a href="#" className="featured text-center animate-box" style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
                <div className="desc">
                  <span className="date">Dec 25, 2016</span>
                  <h3>Most Beautiful Website in 2016</h3>
                  <span className="category">Inspirational</span>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </aside>

      <div id="fh5co-blog-popular">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
              <h2><span>Latest Posts</span></h2>
            </div>
          </div>
          <div className="row">

            {latest_posts && latest_posts.map((post, index) => (
              <div className="col-md-3" key={index}>
                <div className="fh5co-blog animate-box">
                  <Link href={`blogs/${post.id}`}><img className="img-responsive h-72" src={`../${post.image}`} alt="" /></Link>
                  <div className="blog-text">
                    <h3 className="truncate"><Link href={`blogs/${post.id}`}>{post.title}</Link></h3>
                  </div>
                </div>
              </div>
            ))
            }

          </div>
        </div>
      </div>

      <div id="fh5co-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-padded-right">
              <div className="row">

                {full_post && full_post.map((post, index) => (
                  <div className="col-md-12" key={index}>
                    <div className="fh5co-blog animate-box">
                      <div className="title title-pin text-center">
                        <span className="posted-on">{formatDate(post.date_updated.toDateString())}</span>
                        <h3><Link href={`blogs/${post.id}`}>{post.title}</Link></h3>
                        <span className="category">{post.Category?.name}</span>
                      </div>
                      <Link href={`blogs/${post.id}`}><img className="img-responsive" src={`../${post.image}`} alt="" /></Link>
                      <div className="blog-text text-center">
                        <p>{post.content}</p>
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


                {other_posts && other_posts.map((post, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="fh5co-blog animate-box">
                      <div className="title text-center">
                        <span className="posted-on">{formatDate(post.date_updated.toDateString())}</span>
                        <h3 className="truncate"><Link href={`blogs/${post.id}`}>{post.title}</Link></h3>
                        <span className="category">{post?.Category?.name}</span>
                      </div>
                      <Link href={`blogs/${post.id}`}><img className="img-responsive h-96" src={`../${post.image}`} alt="" /></Link>
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
                  {latest_posts && latest_posts.map((post, index) => (

                    <div className="blog-entry" key={index}>
                      <Link href={`/blogs/${post.id}`}>
                        <img src="images/blog-1.jpg" className="img-responsive" alt="" />
                        <div className="desc">
                          <span className="date">{formatDate(post.date_updated.toDateString())}</span>
                          <h3>{ post.title }</h3>
                        </div>
                      </Link>
                    </div>
                  ))
                  }

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
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
