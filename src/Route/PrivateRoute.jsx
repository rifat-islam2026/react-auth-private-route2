import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authProviders/AuthProvider";



function PrivateRoute({children}) {
    const {user,loading}=useContext(AuthContext)
    if (user) {
        return children;
    }
    if (loading) {
        return (
            <div className="text-center py-10">
                <span className="loading loading-dots loading-md"></span>
           </div>
        );
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute
