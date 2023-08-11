import { useState, useEffect } from "react";
import InputText from "./FormComponents/InputText";
import InputPassword from "./FormComponents/InputPassword";
import SubmitForm from "./FormComponents/SubmitForm";
import { Link } from "react-router-dom";

const Register = () => {
  const [errors, setErrors] = useState({});

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,}$/;
    if (!usernamePattern.test(username)) {
      const usernameHint = (
        <ul className="ml-[5%] flex flex-col list-inside list-disc">
          <li>Should start with a letter.</li>
          <li>Can include letters, numbers, underscores, and dashes.</li>
          <li>Must be at least 3 characters long.</li>
        </ul>
      );
      setErrors((prevErrors) => ({ ...prevErrors, username: usernameHint }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  }, [username]);

  useEffect(() => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      const emailHint = (
        <ul className="ml-[5%] flex flex-col list-inside list-disc">
          <li>Must be a valid email address format.</li>
        </ul>
      );
      setErrors((prevErrors) => ({ ...prevErrors, email: emailHint }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  }, [email]);

  useEffect(() => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      const passwordHint = (
        <ul className="ml-[5%] flex flex-col list-inside list-disc">
          <li>Must be at least 8 characters long.</li>
          <li>
            Must contain at least one lowercase letter, one uppercase letter,
            one digit, and one special symbol &#40;&#64;, &#36;, &#33;, &#37;,
            &#42;, &#63;, &#38; &#41;.
            {/*(@, $, !, %, *, ?, &)*/}
          </li>
        </ul>
      );
      setErrors((prevErrors) => ({ ...prevErrors, password: passwordHint }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  }, [password]);

  useEffect(() => {
    if (password !== confirmPassword) {
      const confirmPasswordHint = (
        <ul className="ml-[5%] flex flex-col list-inside list-disc">
          <li>Passwords do not match.</li>
        </ul>
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: confirmPasswordHint,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration successful:", username, email, password);
  };

  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="w-full max-w-[500px]"
      >
        <fieldset className="flex flex-col items-center w-full">
          <legend className="text-3xl font-semibold text-center">
            Register
          </legend>
          <InputText
            name="username"
            displayText="Username"
            value={username}
            setValue={setUsername}
          />
          {username && errors.username && (
            <div className="text-red-500 w-4/5">{errors.username}</div>
          )}
          <InputText
            name="email"
            displayText="Email"
            value={email}
            setValue={setEmail}
          />
          {email && errors.email && (
            <div className="text-red-500 w-4/5">{errors.email}</div>
          )}
          <InputPassword
            name="password"
            displayText="Password"
            password={password}
            setPassword={setPassword}
          />
          {password && errors.password && (
            <div className="text-red-500 w-4/5">{errors.password}</div>
          )}
          <InputPassword
            name="confirmPassword"
            displayText="Confirm Password"
            password={confirmPassword}
            setPassword={setConfirmPassword}
          />
          {confirmPassword && errors.confirmPassword && (
            <div className="text-red-500 w-4/5">{errors.confirmPassword}</div>
          )}
          <SubmitForm value="Register" />
        </fieldset>
      </form>
      <p className="text-lg text-center">
        Already have an account?{" "}
        <Link className="font-medium underline" to="../login">
          Login
        </Link>{" "}
        here
      </p>
    </>
  );
};

export default Register;
