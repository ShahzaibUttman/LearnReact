import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState();
  const[isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/');
      console.log('New Blog Added')
    });
  }


  return (
    <div className="create">
      <h2 className="create h2">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Write Blog Here</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <label>Author: </label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}>
          <option value="Ali Haider">Ali Haider</option>
          <option value="Sudais Khattak">Sudais Khattak</option>
          <option value="Sameer Ali">Sameer Ali</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding a Blog...</button> }
      </form>
    </div>
  );
};

export default Create;

