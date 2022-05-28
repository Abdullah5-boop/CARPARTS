import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useAuthState, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContex } from "../../App";
import auth from "../../Firebase.init";

const FirebaseHook = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const email = user?.email





    const handleSignOut = () => {

        signOut(auth).then(() => {
            console.log("Sign-out successful.")
            // setuser('')

        }).catch((error) => {

        });
    }





    const provider = new GoogleAuthProvider();
    const GoogleSignin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result?.user;
                console.log(user)

                console.log("user-3", user)
                // if (user) {
                //     const type = "user";
                //     const firebaseuser = { email: user?.email, type: type }
                //     console.log("this is firebase object", firebaseuser)
                //     fetch("https://shielded-beyond-16866.herokuapp.com/register",
                //         {
                //             headers: {

                //                 'Content-Type': 'application/json'
                //             },
                //             method: "PUT",
                //             body: JSON.stringify(firebaseuser)
                //         })
                //         .then(res => res.json())
                //         .then(data => {
                //             console.log("user-4", data)
                //             if (data?.acknowledged) {
                //                 fetch("https://shielded-beyond-16866.herokuapp.com/registerstorage",
                //                     {
                //                         headers: {

                //                             'Content-Type': 'application/json'
                //                         },
                //                         method: "PUT",
                //                         body: JSON.stringify(firebaseuser)
                //                     })
                //                     .then(res => res.json())
                //                     .then(data => {
                //                         console.log(data)
                //                         if (data?.success) {
                //                             console.log('Already exist ')
                //                         }
                //                         else {
                //                             console.log('Not exist exist ')

                //                             fetch("https://shielded-beyond-16866.herokuapp.com/postregisterstorage",
                //                                 {
                //                                     headers: {

                //                                         'Content-Type': 'application/json'
                //                                     },
                //                                     method: "PUT",
                //                                     body: JSON.stringify(firebaseuser)
                //                                 })
                //                                 .then(res => res.json())
                //                                 .then(data => console.log(data))
                //                                 .catch(error => console.log(error))
                //                         }
                //                     })
                //                     .catch(error => console.log(error))
                //                 console.log('you are in end the user-4 if')
                //             }


                //         })
                //         .catch(error => console.log(error))
                // }
                if (user) {

                    AddfirebaseUser(user)
                }

            }).catch((error) => {

            });
    }






    const AddfirebaseUser = (user) => {
        if (user) {
            const type = "user";
            const firebaseuser = { email: user?.email, type: type }
            console.log("this is firebase object", firebaseuser)
            fetch("https://shielded-beyond-16866.herokuapp.com/register",
                {
                    headers: {

                        'Content-Type': 'application/json'
                    },
                    method: "PUT",
                    body: JSON.stringify(firebaseuser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("user-4", data)
                    if (data?.acknowledged) {
                        fetch("https://shielded-beyond-16866.herokuapp.com/registerstorage",
                            {
                                headers: {

                                    'Content-Type': 'application/json'
                                },
                                method: "PUT",
                                body: JSON.stringify(firebaseuser)
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data?.success) {
                                    console.log('Already exist ')
                                }
                                else {
                                    console.log('Not exist exist ')

                                    fetch("https://shielded-beyond-16866.herokuapp.com/postregisterstorage",
                                        {
                                            headers: {

                                                'Content-Type': 'application/json'
                                            },
                                            method: "PUT",
                                            body: JSON.stringify(firebaseuser)
                                        })
                                        .then(res => res.json())
                                        .then(data => console.log(data))
                                        .catch(error => console.log(error))
                                }
                            })
                            .catch(error => console.log(error))
                        console.log('you are in end the user-4 if')
                    }


                })
                .catch(error => console.log(error))
        }

    }







    const handleforgetpassword = () => {
        //    const [sendPasswordResetEmail, sending, error]=useSendPasswordResetEmail(auth)
    }
    return { handleSignOut, GoogleSignin, handleforgetpassword, AddfirebaseUser }

}
export default FirebaseHook;