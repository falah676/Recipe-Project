import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import RegisterForms from "../components/AuthComponents/RegisterForms"
import { getUser, signUp } from "../utils/SupabaseAuth"
import ReactLoading from 'react-loading'
import { InternetContext } from "../context/CulinerContext"
import useInput from "../hooks/useInput"


const RegisterPage = () => {
    const [email, handleEmail] = useInput('')
    const [pass, handlePass] = useInput('')
    const [confirmPass, handleConfirmPass] = useInput('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [initializing, setInitializing] = useState(true)
    const checkInternet = useContext(InternetContext)
    useEffect(() => {
        const getUserLogin = async () => {
            const { user } = await getUser();
            if (checkInternet) {
                if (user) {
                    navigate('/admin')
                }
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Sorry, we currently do not have Internet access.',
                })
            }
            setInitializing(false)
        };
        getUserLogin()

    }, [checkInternet])


    // const check = async(e) => {
    //     e.preventDefault()
    //     const {data, error} = await signUp(email, pass)
    //     console.log(data);
    //     console.log(error);
    // }

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (checkInternet) {
            if (!email || !pass || !confirmPass) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields!',
                })
                setIsLoading(false)
                return;
            }
            if (pass.length <= 6) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password must be at least 7 characters!',
                })
                setIsLoading(false)
                return;
            }
            if (pass !== confirmPass) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password does not match!',
                })
                setIsLoading(false)
            } else {
                const { data, error } = await signUp(email, pass);
                if (data) {
                    Swal.fire({
                        title: "Sign Up is Success",
                        text: "Please check your email for email verification",
                        icon: "success"
                    });
                    setIsLoading(false)
                    navigate('/admin')
                } else {
                    Swal.fire({
                        title: "Sign Up is Failed",
                        text: error.message,
                        icon: "error"
                    });
                    setIsLoading(false)
                }
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry, we currently do not have Internet access.',
            })
            setIsLoading(false)
        }
    }

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
                    <RegisterForms isLoading={isLoading} submitHandler={submitHandler} EmailHandler={handleEmail} email={email} PasswordHandler={handlePass} pass={pass} confirmPass={confirmPass} ConfirmPassHandler={handleConfirmPass} />
                </div>
            </div>
        </section>
    )
}

export default RegisterPage
