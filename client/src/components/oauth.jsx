import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      console.log('CONTINUE WITH data',data);
       navigate("/");
      console.log("result", result);
    } catch (error) {
      console.log("cannot", error);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogle}
        type="button"
        className="bg-red-600 w-full rounded p-3 text-white hover:bg-red-500"
      >
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
}
