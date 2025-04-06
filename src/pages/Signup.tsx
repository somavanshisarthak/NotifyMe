
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "@/components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    // Redirect to homepage after successful signup
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-muted-foreground">Join VibeSpace to discover and create amazing events</p>
        </div>

        <AuthForm type="signup" onSuccess={handleSuccess} />

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-vibePurple-600 hover:text-vibePurple-800 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
