
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "@/components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    // Redirect to homepage after successful login
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Log in to your VibeSpace account</p>
        </div>

        <AuthForm type="login" onSuccess={handleSuccess} />

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-vibePurple-600 hover:text-vibePurple-800 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
