import InputText from "./FormComponents/InputText";
import InputPassword from "./FormComponents/InputPassword";
import SubmitForm from "./FormComponents/SubmitForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, password);
    console.log("Login form submitted");
  };
  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="w-full max-w-[500px]"
      >
        <fieldset className="flex flex-col items-center">
          <legend className="text-3xl font-semibold text-center">Login</legend>
          <InputText
            name="id"
            displayText="Email or Username"
            value={id}
            setValue={setId}
          />
          <InputPassword
            name="password"
            displayText="Password"
            password={password}
            setPassword={setPassword}
          />
          <SubmitForm value="Login" />
        </fieldset>
      </form>
      <p className="text-lg text-center">
        Don&apos;t have an account?{" "}
        <Link className="font-medium underline" to="../register">
          Register
        </Link>{" "}
        here
      </p>
    </>
  );
};

export default Login;
