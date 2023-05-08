import { useState } from 'react';
import './CreateCommentForm.css';
import { createComment } from '../../api/comments';

const CreateCommentForm = ({ setActive }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [coment, setComment] = useState('');

  const handleSelectName = event => {
    setName(event.target.value);
  };

  const handleSelectSurname = event => {
    setSurname(event.target.value);
  };

  const handleSelectEmail = event => {
    setEmail(event.target.value);
  };

  const handleSelectComment = event => {
    setComment(event.target.value);
  };

  const handleCreateComment = async () => {
    createComment({ name, surname, email, coment });
    setActive(false);
    return;
  };

  return (
    <div className='create_comment_form_wrapper'>
      <div className='create_comment_form_container'>
        <div className='create_comment_form_item'>
          <div className='create_comment_form_subtitle'>{`Ім'я`}</div>
          <input
            className='create_comment_form_input'
            type='text'
            value={name}
            onChange={handleSelectName}
            placeholder={`Введіть своє ім'я`}
          />
        </div>
        <div className='create_comment_form_item'>
          <div className='create_comment_form_subtitle'>Прізвище</div>
          <input
            className='create_comment_form_input'
            type='text'
            value={surname}
            onChange={handleSelectSurname}
            placeholder='Введіть своє прізвище'
          />
        </div>
        <div className='create_comment_form_item'>
          <div className='create_comment_form_subtitle'>Пошта</div>
          <input
            className='create_comment_form_input'
            type='text'
            value={email}
            onChange={handleSelectEmail}
            placeholder='Введіть свою пошту'
          />
        </div>
        <div className='create_comment_form_item'>
          <div className='create_comment_form_subtitle'>Коментар</div>
          <textarea
            className='create_comment_form_textarea'
            type='textarea'
            value={coment}
            onChange={handleSelectComment}
            placeholder='Введіть свій коментар'
          />
        </div>
      </div>
      <button
        className='create_comment_form_button'
        onClick={handleCreateComment}
      >
        Залишити коментар
      </button>
    </div>
  );
};

export default CreateCommentForm;
