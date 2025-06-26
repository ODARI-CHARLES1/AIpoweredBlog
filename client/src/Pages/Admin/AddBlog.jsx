import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import { useAppContexts } from '../../Hooks/useApp';
import { toast } from 'react-toastify';
import { parse } from 'marked'; // Ensure `marked` is installed
import LoadingEffect from '../../Components/LoadingSpinner';

const AddBlog = () => {
  const { axios } = useAppContexts();
  const [isAdding, setIsAdding] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const description = quillRef.current?.root?.innerHTML || '';

      const blog = {
        title,
        subTitle,
        description,
        category,
        isPublished,
      };

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const { data } = await axios.post('/api/blog/add', formData);

      if (data.success) {
        toast.success('Blog Added Successfully');
        setImage(false);
        setTitle('');
        setSubTitle('');
        setIsPublished(false);
        quillRef.current.root.innerHTML = '';
        setCategory('Startup');
      } else {
        toast.error(data.message || 'Failed to add blog.');
      }
    } catch (error) {
      toast.error(error.message || 'Unexpected error');
    } finally {
      setIsAdding(false);
    }
  };

  const generateContent = async (e) => {
    e.preventDefault();
    if (!title) return toast.error('Please Enter a Title');
    try {
      setLoading(true);
      const { data } = await axios.post('/api/blog/generate', { prompt: title +'provide in a well structure format for blogs'});

      if (data.success && data.responseContent) {
        quillRef.current.root.innerHTML = parse(data.responseContent);
      } else {
        toast.error(data.message || 'No content received');
      }
    } catch (error) {
      toast.error(error.message || 'Error generating content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  return (
    <form
      onSubmit={onsubmitHandler}
      className="relative flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full p-4 md:p-10 shadow rounded">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload area icon"
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-3xl border border-r-gray-300 p-2 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4">Blog SubTitle</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-3xl border border-r-gray-300 p-2 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}></div>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="w-8 h-8 rounded-full border-2 border-t-white animate-spin"></div>
            </div>
          )}
          <button
            className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
            disabled={loading}
            type="button"
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>

        <p className="mt-4">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          name="category"
          id="category"
          className="mt-2 py-2 border text-gray-500 border-gray-300 outline-none rounded"
        >
          <option value="">Select Category</option>
          {blogCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="flex gap-4 mt-4">
          <p>Publish</p>
          <input
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
