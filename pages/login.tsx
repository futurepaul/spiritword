import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormError from "../components/FormError";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const [submitError, setSubmitError] = useState(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = async (data: LoginForm) => {
    setSubmitError(undefined);
    console.log("logging in...");
    const { email, password } = data;

    const res = await fetch(`/api/login`, {
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();
    const { error, user } = response;
    if (error) {
      setSubmitError({ message: error });
    } else if (user) {
      router.push(`/admin`);
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <h1>Login</h1>
        <div className="spacer" />
        <FormError error={submitError} />
        <div className="spacer" />
        <form onSubmit={handleSubmit(loginUser)}>
          <label htmlFor="email">Email</label>
          <FormError error={errors.email} />
          <input
            name="email"
            {...register("email", {
              required: "Please enter an email address",
            })}
            autoComplete="email"
          />
          <div className="spacer" />
          <label htmlFor="password">Password</label>
          <FormError error={errors.password} />
          <input
            name="password"
            {...register("password", {
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters",
              },
            })}
            type="password"
          />
          <div className="spacer" />
          <input type="submit" value="Login" />
        </form>
        <div className="spacer" />
        <div className="footer">
          <span>First time?&nbsp;</span>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        .spacer {
          height: 1rem;
        }
        .wrapper {
          background-color: white;
          padding: 1rem;
          margin-top: 1rem;
        }
        .footer {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
