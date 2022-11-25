import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import React, { FormEventHandler, useState } from 'react'
import TopHeading from '../../components/components/TopHeading/TopHeading'
import { trpc } from '../../utils/trpc';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';


export default function Edit() {

    type values = {
        name: string;
        email: string;
        bio: string;
    }
    const { data: sessionData } = useSession();
    const mutation = trpc.user.editUser.useMutation();

    const post = trpc.user.getUser.useQuery({ email: sessionData?.user?.email ? sessionData?.user?.email : undefined });
    const userPosts = post.isSuccess ? post.data : {
        name: '',
        email: '',
        bio: ''
    }

    const initialValues = {
        name: userPosts?.name ? userPosts?.name : '',
        email: userPosts?.email ? userPosts?.email : '',
        bio: userPosts?.bio ? userPosts?.bio : ''
    }

    const onSubmit = (values: values) => {
        mutation.mutate(values);
    }

    const Schema = z.object({
        name: z.string(),
        email: z.string(),
        bio: z.string(),
      });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:toFormikValidationSchema(Schema),
        enableReinitialize: true
    })

    return (
        <>
            <div id="fh5co-contact" className="fh5co-no-pd-top">
                <div className="container">
                    <TopHeading pageName={'Edit Profile'} />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-3 col-padded-right">
                            {mutation.error && <p>Something went wrong! <br /> {mutation.error.message}</p>}
                            <div className="text-blue-500 col-md-11 mb-6">
                                {mutation.data ? <p>{mutation.data.submit}</p> : <p></p>}
                            </div>

                            <form onSubmit={formik.handleSubmit}>
                                <div className="col-md-9 field mb-6">
                                    <label>Name</label>
                                    <input
                                        onChange={formik.handleChange} value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                        type="text" name="name" id="fname" className="form-control" />
                                    {formik.errors.name && formik.touched.name &&
                                        <span className='text-red-500'>{formik.errors.name}</span>
                                    }
                                </div>
                                <br />
                                <div className="col-md-9 field mb-6">
                                    <label>Email</label>
                                    <input
                                        value={formik.values.email}
                                        type="email" name="email" id="email" className="form-control" readOnly />
                                </div>
                                <br />
                                <div className="col-md-9 field mb-6">
                                    <label>Bio</label>
                                    <textarea
                                        onChange={formik.handleChange} value={formik.values.bio}
                                        onBlur={formik.handleBlur}
                                        name="bio" id="bio" className="form-control" ></textarea>
                                    {formik.errors.bio && formik.touched.bio &&
                                        <span className='text-red-500'>{formik.errors.bio}</span>
                                    }
                                </div>
                                <br />

                                <div className="col-md-9 field">
                                    <input
                                        disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                                        // onClick={formik.submitForm}
                                        type="submit" id="submit" className="btn btn-primary" value="Submit" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
