import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormError from "../components/FormError";
import { supabase } from "../lib/initSupabase";

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
}
export default function Signup() {
  const router = useRouter();

  const [submitError, setSubmitError] = useState(undefined);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const signUpUser = async (data: SignupForm) => {
    setSubmitError(undefined);
    console.log("logging in...");
    const { email, password } = data;

    const { error: signUpError, user } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setSubmitError({ message: signUpError.message });
    } else if (user) {
      const email = encodeURIComponent(user.email);
      router.push(`/confirm?email=${email}`);
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <h1>Sign Up</h1>
        <div className="spacer" />
        <FormError error={submitError} />
        <div className="spacer" />
        <form onSubmit={handleSubmit(signUpUser)}>
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <FormError error={errors.confirmPassword} />
          <input
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: {
                matchesPassword: (value: string) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              },
            })}
            type="password"
          />

          <div className="spacer" />
          <input type="submit" value="Sign Up" />
        </form>
        <div className="spacer" />
        <div className="footer">
          <span>Already have an account?&nbsp;</span>
          <Link href="/login">
            <a>Login</a>
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
