import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import NewsCard from '../../component/NewsCard';
import { getData } from '../../api/newsApi';
const News = () => {
    const[news,setNews] = useState([])
    const[page,setPage] = useState(1);
    const[totalPages,setTotalPages] = useState(null);
    const[loading,setLoading] = useState(false);
    

        const fetchData = async (pageNum)=>{
            try {
                setLoading(true);
                const {articles:newArticles,total} =  await getData(pageNum);
               if(totalPages == null){
                setTotalPages(Math.ceil(total/10));
               }
               setNews((prev)=>[...prev,...newArticles])
                
            } catch (error) {
                console.error("failed to fetch news:",error)
            }finally {
      setLoading(false);
    }

           
        }

        useEffect(()=>{
            fetchData(1);

        },[])
      

        const handleLoadMore = ()=>{
            const nextPage  = page +1;
            if(totalPages && nextPage > totalPages) return;

            setPage(nextPage);
            fetchData(nextPage);
        }


          

    console.log(news);
    return (
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-center '>
                <div className='flex items-center relative mt-12 '>
                    <input type="text" className='border-white border-2 my-4 text-lg text-white rounded-full px-2 pl-3 outline-0 py-1 placeholder:text-sm placeholder:font-semibold md:py-2 md:w-[400px] ' placeholder='search for latest ' />
                    <IoMdSearch className='text-white text-2xl transform absolute right-0 mr-4 cursor-pointer' />
                </div>
            </div>
            {/* News section */}
            <section>
                <h3 class="text-4xl py-8 font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent mb-3">
                    Latest News
                </h3>     
                
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                    {
                        news.map((e,article_id)=>(

                            <NewsCard key={article_id} data = {e}/>
                        ))
                    }


                   
                </div>
                
                  </section>
        </div>
    )
}

export default News