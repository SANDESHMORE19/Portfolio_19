import React from 'react'
import './about.css';
import Lottie from 'lottie-react';
import animation_Data from '../assets/Animation - 1704167619943.json';
// import pdf from '../assets'
// import FontAwesomeIcon from '../assets/code-solid.svg';

export const About = ({mode}) => {

  const HandleResume = () => {
    
    const resumePath = '../';

    
    const link = document.createElement('a');
    link.href = resumePath;

    
    link.download = 'your_resume.pdf';

  
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className={`about${mode === 'dark' ? 'dark' : 'light'}`}>
    <section className='innerabout'>
    <h1 className={`h1${mode === 'dark' ? 'dark' : 'light'}`} >HI, I'M <span className={`name${mode === 'dark' ? 'dark' : 'light'}`}>SANDESH MORE</span> </h1>

    <p className={`p${mode === 'dark' ? 'dark' : 'light'}`}>A <span className={`domain${mode === 'dark' ? 'dark' : 'light'}`}>front end </span>  developer</p>
    <section>
    <p className={`desc${mode === 'dark' ? 'dark' : 'light'}`}>A dedicated front-end developer with a passion for crafting visually stunning and highly interactive user interfaces. 
    Proficient in HTML, CSS, and JavaScript, I specialize in turning design concepts into seamless and engaging web experiences.</p>
    </section>
    
    <button class="button-13" role="button" onClick={HandleResume}>
  <span class="text">My_Resume</span>
  <span class="button-13-background"></span>
  <span class="button-13-border"></span>

  
  <svg  className='resumebutton'>
    <filter id="remove-black-button-13" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                -1 -1 -1 0 1" result="black-pixels"></feColorMatrix>
      <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
    </filter>
  </svg>
</button>
    </section>
    <section className='animation'>
      <Lottie animationData={animation_Data}/>
    </section>
        
    </section>
  )
}
