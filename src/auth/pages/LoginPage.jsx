import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();
    const onLogin = () => {
        console.log("onLogin")
        navigate('/marvel',{
            replace: true
        });
    }
  return (
    <>
        <div className="px-5 py-2">
            <h2>Login</h2>
            <hr />
            <button onClick={ onLogin } className="btn btn-primary" >Login</button>
        </div>
    </>
  )
}
