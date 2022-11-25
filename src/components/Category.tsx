import Link from 'next/link'
import React from 'react'
import { trpc } from '../utils/trpc';

export default function Category() {
    const category = trpc.category.getAll.useQuery();
    const catData = category.isSuccess ? category.data : []

    return (
        <>
            <ul className="category">
                {
                    catData && catData.map((cat, index) => (
                        <li key={index + 1}>
                            <Link href={`/blogs/category/${cat.id}`}>
                                <i className="icon-check"></i>{cat.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
