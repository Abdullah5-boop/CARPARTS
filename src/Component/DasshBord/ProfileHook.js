import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";

const ProfileHook = () => {
    const [user]=useAuthState(auth)
    const email=user?.email;
    const { isLoading, error, data: Order, refetch } = useQuery('ProfileHook', () =>
        fetch(`http://localhost:5000/profile/${email}`).then(res =>
            res.json()
        )
    )

    return { Order, isLoading, error, refetch };

}
export default ProfileHook;