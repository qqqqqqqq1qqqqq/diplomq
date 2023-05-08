import './Comment.css';
import { deleteComment } from '../../api/comments';
import deleteImg from '../../img/delete.svg';
import { transformData } from '../../helpers/transformData';

const Comment = ({ comment }) => {
  const date = transformData(comment.createdAt);

  return (
    <div className='comment_wrap'>
      <div className='comment_container_user'>
        <div className='comment_user_data'>{comment.name}</div>
        <div className='comment_user_data'>{comment.surname}</div>
        <div className='comment_user_data comment_user_creation_date'>
          {date}
        </div>
      </div>
      <div className='comment_text_container'>
        <div className='comment_text'>{comment.coment} </div>
        <img
          src={deleteImg}
          className='comment_button_image'
          alt='delete'
          onClick={() => deleteComment(comment.id)}
        />
      </div>
    </div>
  );
};

export default Comment;
