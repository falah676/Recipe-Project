import InputComponent from "./InputComponent"
import ReactLoading from "react-loading"
import PropTypes from "prop-types"
const ProfileForms = ({submitHandler, name, nameHandler, userHandler, username, phone, phoneHandler, isLoading}) => {
  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700 backdrop-blur-lg">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                    <InputComponent id="name" titleInput='Full Name' type='text' value={name} valueHandler={nameHandler} placeholder='full name' />
                    <InputComponent id="user" titleInput='Username' type='text' value={username} valueHandler={userHandler} placeholder='username' />
                    <InputComponent id="phone" placeholder='082131234819' titleInput='Phone Number' value={phone} valueHandler={phoneHandler} type='tel' />
                    {
                        isLoading ?
                            <button type="submit" className="w-full flex justify-center bg-green-600 font-medium rounded-lg text-sm" disabled={true}><ReactLoading type={'bubbles'} color={'#fff'} height={'10%'} width={'10%'} /></button>
                            :
                            <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create an account</button>
                    }
                </form>
            </div>
        </div>
  )
}
ProfileForms.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    nameHandler: PropTypes.func.isRequired,
    userHandler: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    phoneHandler: PropTypes.func.isRequired
}
export default ProfileForms
