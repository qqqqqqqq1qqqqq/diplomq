import { fetchComments } from '../../api/comments';
import { useEffect, useState } from 'react';
import './Comments.css';
import Comment from '../Comment/Comment';
import Popup from '../Popup/Popup';
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm';
import commentImg from '../../img/createComment.svg';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentsPopup, setCommentsPopup] = useState(false);

  const handleOpenPopup = () => {
    setCommentsPopup(true);
  };

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const commentsObj = await fetchComments();
    setComments(commentsObj.data);
  };

  return (
    <div
      id='comments'
      className='comments_container'
    >
      <div className='comments_title'>Коментарі</div>
      <div className='comment_create_button'>
        <img
          className='comment_create_button_img'
          onClick={handleOpenPopup}
          src={commentImg}
          alt='comment'
        />
        Залишити коментар
      </div>
      {commentsPopup && (
        <Popup
          setActive={setCommentsPopup}
          title='Створити коментар'
        >
          <CreateCommentForm setActive={setCommentsPopup} />
        </Popup>
      )}
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default Comments;
