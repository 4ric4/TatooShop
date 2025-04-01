import React,{useState,useEffect} from 'react';
import { useInView} from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import{fadeIn} from '../variants';

const Skills = () => {

  const [fullBody, setFullBody] = useState(0)
  const [anime, setAnime] = useState(0)
  const [cobertura, setCobertura] = useState(0)
  const [tracoLivre, setTracoLivre] = useState(0)


  const {ref,inView} = useInView({
    threshold:0.2,
  });

    useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 100) {
          setFullBody(fullBody + 1);
        }
        if (anime < 70) {
          setAnime(anime + 1);
        }
        if (cobertura < 60) {
          setCobertura(cobertura + 1);
        }
        if (tracoLivre < 30) {
          setTracoLivre(tracoLivre + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setAnime(0);
      setCobertura(0);
      setTracoLivre(0);
    }
  }, [inView, fullBody, anime, tracoLivre, cobertura]);
  
  const styles = {
    path:{
      stroke: '#111111',
    },
    trail:{
      stroke: '#eeeeee',
    },
    text:{
      fill: '#111111',
      fontSize: '24px',
    },
  }
  
  
  return <motion.section 
      ref={ref}
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}} 

      className='section font-primary'>
    <div className='container mx-auto'>
      <div className=' flex flex-col xl:flex-row
      justify-between items-center gap-y-12'>
        <div className=' w-[150px] lg:w-[275px]
        flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1}  
          value={anime} 
          styles={styles}
          text={`${anime}%`}
          />

          <div className='uppercase font-light tracking-[1.2px] text-center'>Tattoo Realism</div>
          
        </div>
        <div className=' w-[150px] lg:w-[275px]
        flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1}  
          value={fullBody} 
          styles={styles}
          text={`${fullBody}%`}
          />

          <div className='uppercase font-light tracking-[1.2px] text-center'>Tattoo Anime</div>
          
        </div>
        <div className=' w-[150px] lg:w-[275px]
        flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1}  
          value={cobertura} 
          styles={styles}
          text={`${cobertura}%`}
          />

          <div className='uppercase font-light tracking-[1.2px] text-center'>Cobertura</div>
          
        </div>
        <div className=' w-[150px] lg:w-[275px]
        flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1}  
          value={tracoLivre} 
          styles={styles}
          text={`${tracoLivre}%`}
          />

          <div className='uppercase font-light tracking-[1.2px] text-center'>Traço Livre</div>
          
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Skills;
