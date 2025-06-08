import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogCard = ({blog}) => {
     const {title,description,category,image,_id}=blog;
     const navigate=useNavigate()
     useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:false, 
      mirror:true,
    });
    AOS.refresh();
  }, []);
  return (
        <div data-aos="fade-left" onClick={()=>navigate(`blog/${_id}`)} className='w-full roundeng-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300'>
            <div>
                <img src={image} alt="image" />
                <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>
                <div className='p-5'>
                    <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
                   <p className="mb-3 text-xs text-gray-600"
                     dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
                    ></p>

                </div>
            </div>
        </div>
  )
}

export default BlogCard