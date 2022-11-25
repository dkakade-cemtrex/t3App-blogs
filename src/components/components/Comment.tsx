import React, { useState } from 'react'
import { trpc } from '../../utils/trpc'
import CommentFrom from '../../components/components/CommentForm'


export default function Comment({ id, uid }: { id: number | null, uid: number }) {
  let comments: any[] = []
  const commentsData = trpc.comment.byPost.useQuery({ id: uid });
  if (id) {
    comments = commentsData.isSuccess ? commentsData.data.filter(commentsData => commentsData.commentId === id) : []
  }
  else {
    comments = commentsData.isSuccess ? commentsData.data.filter(commentsData => commentsData.commentId === null) : []
  }

  const [replyClick, setReplyClick] = useState(0)
  const [reply, setReply] = useState(0)

  const handleClick = (index: number) => {
    setReplyClick(index)
  }

  const showReply = (x: number) => {
    setReply(x)
  }


  return (
    <div>
      {comments && comments.map((comment, index) => (
        <div key={comment.id} className="col-md-12 mb-14">
          <div className='col-md-2'>
            <div>
              <img className="img-responsive h-20 w-20 rounded-full" src='../images/user-2.jpg' />
            </div>
          </div>
          <div className='col-md-10'>
            {comment.user.name}<br />
            {comment.body}
            <br />
            {comment.replies.length > 0 &&
              <span onClick={() => showReply(comment.id)} className='cursor-pointer'>{comment.replies.length} Replies </span>
            }
            <span onClick={() => handleClick(index + 1)} className="cursor-pointer"> Reply</span>

            {replyClick === index + 1 &&
              <CommentFrom uid={uid} cid={comment.id} />
            }
            <br />
            {reply === comment.id &&
              <Comment id={comment.id} uid={uid} />
            }
          </div>
        </div>
      ))
      }
    </div>
  )
}
