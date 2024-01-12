import React, { useState } from "react";
import Contact from '../Routers/Contact'
import styles from '../Styles/Form.module.css'



const Form = () => {
  const [user, setUser ] = useState({
    name: '',
    email: ''
  })
  const [ show, setShow ] = useState(false)
  const [ error, setError] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  const validarEmail = (email) => {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length > 5 && validarEmail(user.email)){
      setShow(true)
      setError(false)
      setFormSubmitted(true)
    }else {
      setError(true)
      setShow(false)
      
    }
  }
 

  return (
    <div className={styles.formContainer}>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(event) => setUser({ ...user, name: event.target.value.trimStart() })}
          />
          <label className={styles.label}>Email</label>
          <input
            type="text"
            value={user.email}
            onChange={(event) => setUser({ ...user, email: event.target.value.trimStart() })}
          />
          <button type='submit' className={styles.button}>Send</button>
        </form>
      )}

      {error && (
        <h5 className={styles.error}>
          Please, verify your information again.
        </h5>
      )}

      {show ? (
        <div className={styles.resultContainer}>
          <h3>Thanks, <span className={styles.datos}>{user.name}</span>. We will contact you by email.</h3>
          
        </div>
      ) : null}
    </div>
  );
}


export default Form