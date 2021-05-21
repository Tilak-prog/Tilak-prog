import classNames from 'classnames';
import Link from "next/link";
import React from "react";
import useLogin from '../../component/Login/login-hook';
import Logo from "../../component/logo";
import Button from "../../component/ui/Buttons/button";
import Input from "../../component/ui/Inputs/inputs";
import styles from "../../styles/login.module.scss";

export default function Login() {
  const { data, loading, onChange, onSubmit } = useLogin();

  return (
    <div className={styles.container}>
      <Logo className={classNames(" relative left-2 top-8 ")} />
      <h1 className={classNames("font-bold text-3xl text-black-160 text-opacity-100 h-20 relative top-24 font-sans-Roboto tracking-tight pt-2")}>
        Welcome
      </h1>
      <form className={classNames("relative right-20 w-48 pt-14")} onSubmit={onSubmit}>
        <Input
          required
          type="email"
          label="username/email"
          name="email"
          id="email"
          value={data?.email}
          onChange={onChange}
        />
        <Input
          required
          type="password"
          label="password"
          name="password"
          id="password"
          value={data?.password}
          onChange={onChange}
        />

        <div className={classNames("mb-3")}>
          <Link href="/auth/forgot-password">
            <span className={classNames("text-xs relative left-72 -top-2 cursor-pointer font-bold tracking-tight opacity-50")}>
              Forgot Password?
            </span>
          </Link>
        </div>
        <Button primary disabled={loading}>
          <span className={classNames("text-xs relative left-40")}>Login</span>
        </Button>

        <Button secondary className={classNames("my-2")}>
          <Link href="/auth/login-otp">
            <span className={classNames("text-xs relative left-32 text-blue-150 font-bold")}>
              Login using OTP
            </span>
          </Link>
        </Button>
      </form>
    </div>
  );
}
