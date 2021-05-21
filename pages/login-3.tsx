import React from 'react';
import className from 'classnames';
import Button from '../component/ui/Buttons/button';
import Input from '../component/ui/Inputs/inputs';
import Logo from '../component/logo';
import styles from '../styles/login.module.scss';
import Leftarrow from "../../public/left-arrow.svg";

export default function Login_3() {
  return (
    <div className={styles.container}>
      <Logo className=" absolute inset left-5 top-10 " />
      <div className="grid grid-cols-2 gap-1 relative w-80 right-20 top-20">
      <Leftarrow className={className("relative left-12 top-3")}/>
        <h1 className="font-bold text-3xl text-opacity-100 font-roboto ">Enter OTP</h1>
      </div>

      <div className="relative top-24">
      <Input
          required
          type=""
          label=""
          name=""
          id=""
          onChange={() => {}}
        />
        <Button primary className="my-3" >
            <span className="text-xs relative pl-2 left-36">Submit</span>
          </Button>
      </div>
    </div>
  );
};
