import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValiDate } from "../utils/CheckValidDate";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [login, setLogIn] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const toggle = () => {
    setLogIn(!login);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
      }
      return () => unsubscribe();
    });
  }, [dispatch, navigate]);

  const handleChange = () => {
    const message = checkValiDate(
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    if (message) {
      setError(message);
      return;
    }

    if (!login) {
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      ).then((userCredential) => {
        const user = userCredential?.user;
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
          })
        );
      });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div>
      <div className="w-full sm:w-1/2 md:w-1/3 mx-auto my-16">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-full border border-gray-400 p-3 mb-4"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="w-full border border-gray-400 p-3 mb-4"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          {error && <p className="text-red-500 p-1">{error}</p>}
          <button
            type="button"
            className="bg-[#00453a] hover:bg-[#999964] text-white w-full p-3"
            onClick={handleChange}
          >
            {login ? `Sign In` : `Sign Up`}
          </button>
          <p className="mt-3 cursor-pointer w-1/3" onClick={toggle}>
            {login ? `create an account` : `login to your account`}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
