import React, { ChangeEvent } from 'react'
import TopHeading from '../components/components/TopHeading/TopHeading'
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Category } from '@prisma/client';
import Image from 'next/image'
import axios from 'axios';

export default function AddPost() {
    const categories = trpc.category.getAll.useQuery();
    const catg = categories.isSuccess ? categories.data : []

    const mutation = trpc.post.addPost.useMutation();
    const { data: sessionData } = useSession();

    type values = {
        title: string;
        content: string;
        published: boolean;
        image: any;
        categoryId: string;
        email: string;
    }

    const initialValues: values = {
        title: '',
        content: '',
        published: false,
        image: null,
        categoryId: '',
        email: sessionData?.user?.email ? sessionData?.user?.email : '',
    }



    const onSubmit = async (values: values) => {
        const formData = new FormData();
        formData.append("email", sessionData?.user?.email ? sessionData?.user?.email : '');
        formData.append("title", values.title);
        formData.append("category", values.categoryId);
        formData.append("content", values.content);
        formData.append("published", "false");
        formData.append("image", values.image);

        const  data = await axios(
            {
                method: "post",
                url: "/api/imageUpload",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                //handle success
                console.log("response",response);
            })
            .catch(function (response) {
                //handle error
                console.log("response",response);
            });
    }

    const Schema = z.object({
        title: z.string(),
        content: z.string(),
        categoryId: z.string()
    });


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: toFormikValidationSchema(Schema),
        enableReinitialize: true
    })

    return (
        <>
            <div id="fh5co-contact" className="fh5co-no-pd-top">
                <div className="container">
                    <TopHeading pageName={'Add Blog'} />
                    <div className="row">
                        <div className="col-md-9 col-md-offset-2 col-padded-right">
                            {mutation.error && <p>Something went wrong! <br /> {mutation.error.message}</p>}
                            <div className="text-blue-500 col-md-11 mb-6">
                                {mutation.data ? <p>{mutation.data.submit}</p> : <p></p>}
                            </div>

                            <form onSubmit={formik.handleSubmit}>
                                <div className="col-md-11 field mb-6">
                                    <label>Category</label>
                                    <select className="form-control" name='categoryId'
                                        onChange={formik.handleChange}
                                        value={formik.values.categoryId}
                                        onBlur={formik.handleBlur} >
                                        <option value='' key=''>--Select Category--</option>
                                        {catg &&
                                            catg.map((category: Category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))
                                        }
                                    </select>
                                    {formik.errors.categoryId && formik.touched.categoryId &&
                                        <span className='text-red-500'>{formik.errors.categoryId}
                                            {formik.values.categoryId}
                                        </span>
                                    }
                                </div>

                                <div className="col-md-11 field mb-6">
                                    <label>Title</label>
                                    <input
                                        onChange={formik.handleChange} value={formik.values.title}
                                        onBlur={formik.handleBlur}
                                        type="text" name="title" id="title" className="form-control" />
                                    {formik.errors.title && formik.touched.title &&
                                        <span className='text-red-500'>{formik.errors.title}</span>
                                    }
                                </div>
                                <br />
                                <div className="col-md-11 field mb-6">
                                    <label>Image</label>
                                    <input
                                        onChange={(event) => {
                                            formik.setFieldValue('image',
                                                event.target.files ? event.target.files[0] : {}
                                            )

                                        }}
                                        type="file" name="image" id="image" className="form-control" />

                                    {/* <Image src={formik.values.image}
                                        alt=""
                                        className="img-thumbnail mt-2"
                                        height={200}
                                        width={200} /> */}
                                </div>
                                <div className="col-md-11 field mb-6">
                                    <label>Content</label>
                                    <textarea
                                        onChange={formik.handleChange} value={formik.values.content}
                                        onBlur={formik.handleBlur}
                                        name="content" id="content" className="form-control"></textarea>
                                    {formik.errors.content && formik.touched.content &&
                                        <span className='text-red-500'>{formik.errors.content}</span>
                                    }
                                </div>

                                <div className="col-md-9 field">
                                    <button type="submit" className="btn btn-primary"
                                        disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
                                        Add Blog
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


