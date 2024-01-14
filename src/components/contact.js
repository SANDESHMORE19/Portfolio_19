import React from 'react'
import './contact.css';
import Lottie from 'lottie-react';
import animation_Data from '../assets/Animation - 1704400657090.json';
export const Contact = ({ mode}) => {
  return (
    <section className={`contacts${mode === 'dark' ? 'dark' : 'light'}`}>
        <section className='form'>
                <section className='outerform'>
                    <form className='info'>
                    <div className='div'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name'></input>
                    </div>
                   <div className='div'>
                   <label htmlFor='email'>Mail</label>
                    <input type='email' id='email'></input>
                   </div>
                   <div className='div'>
                   <label htmlFor='msg'>Message</label>
                    <input type='text' id='msg'></input>
                   </div>
                   <div className='div'>
                    <button type='submit' className='button-50'>Go!</button>
                   </div>
                   
                   
                    
                    </form>
                </section>
                <section className='design'>
                <Lottie animationData={animation_Data}/>
                </section>
        </section>
    </section>
  )
}
