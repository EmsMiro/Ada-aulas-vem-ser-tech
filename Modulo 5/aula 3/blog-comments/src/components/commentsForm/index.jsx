import '../commentsForm/style.css'
import React, { useState } from 'react';
import ComentsComponent from '../comentsPost';

const CommentForm = () => {
  const [commenterName, setCommenterName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleNameChange = (event) => {
    setCommenterName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    // Construindo o novo componente de comentário com os dados do formulário
    const newCommentComponent = (
      <ComentsComponent
        commenterName={commenterName}
        commentDate={currentDate}
        commentText={commentText}
      />
    );

    // Aqui você pode fazer o que quiser com o novo componente de comentário,
    // como adicioná-lo a uma lista de comentários ou renderizá-lo diretamente
    console.log('Novo comentário:', newCommentComponent);

    // Limpando os campos do formulário após o envio
    setCommenterName('');
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='input-name'>
        <label>
          <p>Seu nome:</p>
          <input type="text" value={commenterName} onChange={handleNameChange} />
        </label>
      </div>
      <div className='input-comment'>
        <label>
        <p>Comentário:</p>
          <textarea value={commentText} onChange={handleCommentChange} />
        </label>
      </div>
      <button type="submit" className='btn-send'>Enviar</button>
    </form>
  );
};

export default CommentForm;
