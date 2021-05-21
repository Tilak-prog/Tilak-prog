import classNames from "classnames";
import Link from "next/link";
import Logo from "../../component/logo";
import Button from "../../component/ui/Buttons/button";
import Input from "../../component/ui/Inputs/inputs";
import styles from "../../styles/login.module.scss";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <Logo className=" absolute inset left-6 top-8 " />
      <h1 className="font-bold text-xl text-opacity-100 font-roboto h-8 absolute top-24 ">
        Forgot Password
      </h1>
      <form className={classNames("mt-10 w-96")} onSubmit={() => {}} />
      <Input
        required
        type="email"
        label="Enter email"
        name="email"
        id="email"
        value={""}
        onChange={() => {}}
      />
      <div className={classNames("my-3")}>
        <Button primary>
          <span className="text-xs relative  left-32 pl-2">Get password</span>
        </Button>
      </div>
      <Link href="/auth/login">
        <span className="inline-block py-10 px-3 cursor-pointer text-sm">
          Back
        </span>
      </Link>
    </div>
  );
}
