import React from 'react';
import styles from '@/styles/Home.module.css'
import blogStyle from '@/styles/Blog.module.css'
import { useEffect ,useState} from 'react';
import Link from 'next/link';
import * as fs from 'fs';

//step1: collect all file from blog data;
//step2: iterate the data

const Blog = (props) => {
    console.log(props);
    const [blogs, setBlogs] = useState(props.allBlogs);
    // useEffect(() => {
        
    // }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Latest Blogs</h2>
                {
                    blogs.map((blogItem)=>{
                        return <div key={blogItem.title} className={blogStyle.content}>
                            <Link href={`/blogpost/${blogItem.slug}`}>
                            <h3 className={blogStyle.blogItem}>{blogItem.title}</h3></Link>
                            <p className={blogStyle.p}>{blogItem.metadesc}</p>
                        </div>
                    })
                }
            </main>
        </div>
    );
};



export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/'+item),'utf-8');
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: {allBlogs}, // will be passed to the page component as props
    }
}

// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blog')
//     let allBlogs = await data.json();
//     return {
//       props: {allBlogs}, // will be passed to the page component as props
//     }
// }

export default Blog;