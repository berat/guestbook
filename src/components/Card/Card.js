const Card = ({ comments, setComments }) => {
  if (comments.length === 0) return <article>Hadi bir yorum gönder</article>;

  const remove = (id) => {
    const tempComments = comments.filter((item) => item.id !== id);
    setComments(tempComments);
  };

  return comments.map(({ id, name, comment }) => (
    <article>
      <header>
        <b>{name}</b> <button onClick={() => remove(id)}>sil</button>
      </header>
      <p>{comment}</p>
    </article>
  ));
};

export default Card;
