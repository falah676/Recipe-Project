import { supabase } from "../Supabase/Client"

const signUp = async (email, password) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email, password,
            options: {
                emailRedirectTo: 'http://localhost:5173/Recipe-Project/profileUser'
            }
        })
        return { data: data, error: error }
    } catch (e) {
        console.log('Error', e);
    }
}

const signIn = async (email, password) => {
    try {
        const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        return { user, session, error }
    } catch (e) {
        console.log('Error', e);
    }
}

const getUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
}

const getUserData = async (id) => {
    const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
    return { profiles, errorUser:error }
}

const updateProfile = async (id, username, fullName, phone) => {
    const { data, error } = await supabase
        .from('profiles')
        .update({ full_name: fullName, username: username, phone_number: phone })
        .eq('id', id)
        .select()
    return { data, error }
}

const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
}

export {
    updateProfile,
    signUp,
    signIn,
    getUser,
    getUserData,
    signOut,
}