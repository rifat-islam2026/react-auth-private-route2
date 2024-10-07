import { Link } from "react-router-dom"

function Home() {
  return (
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
              <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome to react auth private route!</h1>
                  <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <Link to="/register" className="btn btn-primary">Please register now!</Link>
              </div>
          </div>
      </div>
  )
}

export default Home
