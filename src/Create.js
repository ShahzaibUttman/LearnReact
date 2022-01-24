const Create = () => {
  return (
    <div className="create">
      <h2 className="create h2">Add a New Blog</h2>
      <form> 
        <label>Blog Title</label>
          <input type='text' required/>
          <label>Write Blog Here</label>
          <textarea>
          </textarea>
          <label>Author: </label>
          <select>
            <option value='Sudais'>Sudais Khattak</option>
            <option value='Ali Haider'>Ali Haider</option>
            <option value='Sameer Ali'>Sameer Ali</option>
          </select>
          <button className="button">Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
<div className="create"></div>;
