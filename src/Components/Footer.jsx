import React from 'react'
import styles from '../Styles/Footer.module.css'
import imageDH from '../assets/DH.png';
import imageF from '../assets/icofacebook.png'
import imageI from '../assets/icoinstagram.png'
import imageW from '../assets/icowhatsapp.png'
import imageT from '../assets/icotiktok.png'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentNombres}>
        <h3>Made with magic ✨</h3>
      </div>

      <div className={styles.footerContentImagenes}>
        <img src={imageDH} alt="imageDH" className={styles.logoDigital} />
        <div>
          <img src={imageF} alt="imageF"className={styles.iconoSocial}/>
          <img src={imageI} alt="imageI"className={styles.iconoSocial}/>
          <img src={imageW} alt="imageW"className={styles.iconoSocial}/>
          <img src={imageT} alt="imageT"className={styles.iconoSocial}/>
        </div>  
      </div>
      
        
    </footer>
  )
}

export default Footer