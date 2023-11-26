import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import TableComponent from "../components/Admin/TableComponent"
import { InternetContext } from "../context/CulinerContext"
import { getUser, getUserData, signOut } from "../utils/SupabaseAuth"
import ReactLoading from "react-loading";
import { MdLogout } from "react-icons/md";


const AdminPages = () => {
  const navigate = useNavigate()
  const checkInternet = useContext(InternetContext)
  const [initializing, setInitializing] = useState(true)
  const [getProfiles, setProfiles] = useState(null)

  const logoutHandler = async () => {
    const { error } = await signOut();
    if (error) {
      Swal.fire({
        icon: 'error',
        title: error.message,
        showConfirmButton: true,
        confirmButtonText: 'Okay'
      })
    }
    navigate('/login')

  }
  useEffect(() => {
    const getUserLogin = async () => {
      const { user } = await getUser();
      if (!user) {
        navigate('/login')
      }
      if (!checkInternet) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sorry, we currently do not have Internet access.',
        })
      }

      const { profiles, errorUser } = await getUserData(user.id)
      //  check if profiles is loaded then check data in profiles, if !profiles[0].username show sweetalert to warning and then navigate to /profileUser

      if (!profiles[0].username && !errorUser) {
        navigate('/profileUser')
        Swal.fire({
          icon: 'warning',
          title: `Warning`,
          html: `<b>${user.email}</b> is a new account! Please fill out your profile information to continue using the application.`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        })
      }
      if (errorUser) {
        Swal.fire({
          icon: 'errorUser',
          title: 'Oops...',
          text: errorUser.message,
        })
        console.error(errorUser.details, errorUser.hint);
      } else {
        setProfiles(profiles)
      }

      setInitializing(false)
    };
    getUserLogin()

  }, [checkInternet])

  return (
    <section className="h-screen bg-category-img bg-cover  bg-no-repeat">
      <div className="h-full w-full backdrop-brightness-50">
        <div className="flex justify-between p-3">
          {
            getProfiles && getProfiles.map((user) => (
              <h2 key={user.id} className="text-white">Selamat Datang {user.username}!</h2>
            ))
          }

          <button title="Log Out" onClick={logoutHandler} className="cursor-pointer">
            <MdLogout color="white" size={30} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full">
          {
            initializing ?
              <ReactLoading type={'spin'} color={'#4fa94d'} height={'5%'} width={'5%'} />
              :
              checkInternet ?
                <TableComponent />
                :
                <h2 className="text-white">Something went wrong!</h2>
          }
        </div>
      </div>
    </section>
  )
}

export default AdminPages
