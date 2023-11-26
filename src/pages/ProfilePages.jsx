import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProfileForms from "../components/AuthComponents/ProfileForms";
import useInput from "../hooks/useInput";
import { getUser, getUserData, updateProfile } from "../utils/SupabaseAuth"
import ReactLoading from "react-loading";


const ProfilePages = () => {
  const [name, handleName] = useInput('');
  const [user, handleUser] = useInput('');
  const [phone, handlePhone] = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [initializing, setInitializing] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getUserLogin = async () => {
      const { user, error } = await getUser();
      const { profiles, errorUser } = await getUserData(user.id)

      setUserData(user)
      if (error) {
        console.error("Error", error)
        Swal.fire({
          title: 'Oops!',
          text: `Something went wrong`,
          icon: 'warning'
        })
        navigate('/')
      }
      if (profiles[0].username && !errorUser) {
        navigate('/admin')
      }
      setInitializing(false)
    };
    getUserLogin()

  }, [])
  const submitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (!name || !user || !phone) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields!',
      })
      setIsLoading(false)
      return;
    }
    const { data, error } = await updateProfile(userData.id, user, name, phone)
    if (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error}`
      })
    } else {
      if (data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Profile has been updated successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(function () {
            navigate("/admin")
          }, 1000);
        })
      }
    }
    // console.log("submit")
    setIsLoading(false)

  }

  if (initializing) {
    return (
      <section className="bg-category-img h-screen bg-center bg-cover bg-no-repeat rotate-180">
        <div className="bg-black/25 backdrop-blur-md h-full flex justify-center items-center">
          <ReactLoading type={'spin'} color={'#4fa94d'} height={'5%'} width={'5%'} />
        </div>

      </section>
    )
  }

  return (
    <section className="bg-category-img bg-center bg-cover bg-no-repeat rotate-180 bg-white/25">
      <div className="bg-black/25 rotate-180">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <ProfileForms name={name} nameHandler={handleName} phone={phone} phoneHandler={handlePhone} submitHandler={submitHandler} userHandler={handleUser} username={user} isLoading={isLoading} />
        </div>
      </div>
    </section>
  )
}

export default ProfilePages
