import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Blogpost.module.css'
import { useEffect,useState } from 'react';
import * as fs from 'fs';

// find the corresponding slug data
const slug = (props) => {
    const [blog, setBlog] = useState(props.blog);

    function createMarkup() {
        return {__html: blog.content};
    }

    return (
        <div>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr></hr>
                <br></br>
                {blog && <div dangerouslySetInnerHTML={createMarkup()}></div>}
                
            </main>
        </div>
    );
};

export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: 'how-to-learn-javascript' } }, 
        { params: { slug: 'how-to-learn-nextjs' } },
        { params: { slug: 'how-to-learn-reactjs' } },
        { params: { slug: 'how-to-learn-nodejs' } }
      ],
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context){
    const {slug} = context.params;
    let myblog =await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
    let blog = JSON.parse(myblog);
    return{
        props: {blog: blog}
    }
}

export default slug;