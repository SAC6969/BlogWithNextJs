import React from 'react';
import { useState } from 'react';
import styles from '@/styles/Contact.module.css'
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name," ",email," ",phone," ",desc);
        const data = {name,email,phone,desc}
        fetch('http://localhost:3000/api/contact/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Success:',data);
        })
        .catch((error)=>{
            console.log('Error:',error);
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Contact Us</h1>
            <form>
            <div class={styles.mb3}>
                <label for="name" className={styles.formLabel}>Enter your name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="form-control" name="name" id="name" aria-describedby="emailHelp" />
            </div>
            <div class={styles.mb3}>
                <label for="email" className={styles.formLabel}>Email address</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control" email="email" id="email" aria-describedby="emailHelp" />
            </div>
            <div class={styles.mb3}>
                <label for="phone"  className={styles.formLabel}>Enter phone number</label>
                <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name='phone' class="form-control" id="phone" aria-describedby="emailHelp" />
            </div>
            <div class={styles.mb3}>
                <label for="desc" className={styles.formLabel}>Comments</label>
                <textarea class="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Leave a comment here" name='desc' id="desc"></textarea>
            </div>
            <button type="submit" onClick={handleSubmit} className={styles.btn}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;