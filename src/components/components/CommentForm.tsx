import React from 'react'
import { useFormik } from 'formik';
import { z } from 'zod';
import { trpc } from '../../utils/trpc'
import { useSession } from "next-auth/react";
import { toFormikValidationSchema } from 'zod-formik-adapter';

type ids = {
    uid: number,
    cid: number | null
}

export default function CommentFrom({ uid, cid }: ids) {

    const mutation = trpc.comment.add.useMutation();
    const { data: sessionData } = useSession();

    type values = {
        email: string | undefined | null,
        postId: number,
        body: string,
        commentId: number | null,
    }

    const initialValues: values = {
        email: sessionData?.user?.email,
        body: '',
        postId: uid,
        commentId: cid ? cid : null
    }

    const Schema = z.object({
        body: z.string(),
    });

    const onSubmit = (values: values) => {
        mutation.mutate(values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: toFormikValidationSchema(Schema),
        enableReinitialize: true
    })

    return (
        <div className='col-md-12 mb-12'>
            <form onSubmit={formik.handleSubmit}>
                <div className='col-md-2'>
                    <div>
                        <img className="img-responsive h-auto w-auto rounded-full" src='../images/user-2.jpg' />
                    </div>
                </div>
                <div className="col-md-8 field">
                    <textarea
                        onChange={formik.handleChange} value={formik.values.body}
                        name="body" id="commentbody" className="form-control" placeholder='Add a comment'></textarea>
                    {/* {formik.errors.body && formik.touched.body &&
                        <span className='text-red-500'>{formik.errors.body}</span>
                      } */}
                </div>
                <div className="col-md-2 field">
                    <button type="submit" className="btn btn-primary"
                        disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                    >
                        Comment
                    </button>
                </div>
            </form>
        </div>
    )
}
