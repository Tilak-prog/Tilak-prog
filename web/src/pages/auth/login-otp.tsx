import className from "classnames";
import Link from "next/link";
import React from "react";
import Leftarrow from "../../../public/left-arrow.svg";
import Logo from "../../component/logo";
import Button from "../../component/ui/Buttons/button";
import Input from "../../component/ui/Inputs/inputs";
import styles from "../../styles/login.module.scss";

export default function Login_2() {
  return (
    <div className={styles.container}>
      <Logo className=" relative inset left-5 top-10" />
      <div className="grid grid-cols-2 relative top-16">
        <div className="col-span-2">
          <Link href="/auth/login">
            <Leftarrow
              className={className(
                "relative cursor-pointer right-20 top-8 mb-1 "
              )}
            />
          </Link>
          <h1 className="font-bold text-3xl text-opacity-100 font-roboto  ">
            Login using OTP
          </h1>
        </div>
      </div>

      <div className="relative top-20">
        <Input
          required
          type="number"
          label="enter mobile no."
          name="number"
          id="number"
          onChange={() => {}}
        />
        <Button primary className="my-3">
          <span className="text-xs relative pl-2 left-36">Submit</span>
        </Button>
      </div>
    </div>
  );
}
