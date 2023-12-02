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
 
  const validarEmail = (email) => {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length > 5 && validarEmail(user.email)){
      setShow(true)
      setError(false)
    }else {
      setError(true)
      
    }
  }
 

  return (
    <div className={styles.formContainer}>
      {(!show ? (
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>Nombre Completo</label>
          <input
            type="text"
            value={user.name}
            onChange={(event) =>
              setUser({ ...user, name: event.target.value.trimStart() })
            }
          />
          <label className={styles.label}>Email</label>
          <input
            type="text"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value.trimStart() })
            }
          />
          <button type='submit'className={styles.button}>Enviar</button>
        </form>
      ) : (
        show && <Contact name={user.name} email={user.email} />
      ))}
  
      {error && (
        <h5 className={styles.error}>
          Por favor, verifique su información nuevamente.
        </h5>
      )}
  
      {show ? (
        <div className={styles.resultContainer}>
          <h3>Gracias, {user.name}. Te contactaremos cuanto antes vía email.</h3>
          <h3>
            Te sugerimos estar pendiente de este email que registraste: {user.email}
          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default Form