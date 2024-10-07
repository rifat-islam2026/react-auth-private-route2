import { useContext } from "react";
import { AuthContext } from "../../authProviders/AuthProvider";

function UserInfo() {
    const { user } = useContext(AuthContext);

  return (
      <div className="flex justify-center py-10">
          {
              user && <p
                  className="border-red-600 border-2 bg-lime-400 p-10 -md"
              >User email : {user.email}</p>

          }
    </div>
  )
}

export default UserInfo
