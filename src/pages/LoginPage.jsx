import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForms from '../components/AuthComponents/LoginForms'
import { getUser, signIn } from '../utils/SupabaseAuth';
import ReactLoading from 'react-loading'
import { useContext } from 'react';
import { InternetContext } from '../context/CulinerContext';
import Swal from 'sweetalert2';
import useInput from '../hooks/useInput';


const LoginPage = () => {
  const [email, handleEmail] = useInput('');
  const [pass, handlePass] = useInput('');
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const checkInternet = useContext(InternetContext)

  useEffect(() => {
    if (checkInternet) {
      const getUserLogin = async () => {
        const { user, error } = await getUser();
        if (!error) {
          if (user) {
            navigate('/admin')
          }
        }
        setInitializing(false)
      };
      getUserLogin()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sorry, we currently do not have Internet access.',
      })
    }

  }, [checkInternet])


  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (checkInternet) {
      const { error, user, session } = await signIn(email, pass)
      if (!error) {
        if (user && session) {
          navigate('/admin')
          setIsLoading(false)
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
        setIsLoading(false)
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sorry, we currently do not have Internet access.',
      })
      setIsLoading(false)
    }
  };
  if (initializing) {
    return (
      <section className="bg-category-img h-screen bg-center bg-cover bg-no-repeat rotate-180">
        <div className="bg-black/70 backdrop-blur-md h-full flex justify-center items-center">
          <ReactLoading type={'spin'} color={'#4fa94d'} height={'5%'} width={'5%'} />
        </div>

      </section>
    )
  }
  return (
    <section className="bg-category-img bg-center bg-cover bg-no-repeat rotate-180 bg-white/25">
      <div className="bg-black/25 rotate-180">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <LoginForms isLoading={isLoading} submitHandler={submitHandler} EmailHandler={handleEmail} email={email} PasswordHandler={handlePass} pass={pass} />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
