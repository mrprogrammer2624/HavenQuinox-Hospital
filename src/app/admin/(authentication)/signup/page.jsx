"use client";
import clsx from "clsx";
import {
  HQButton,
  HQSelect,
  HQInput,
  HQInputPassword,
  HQAvatar,
  HQInputFile,
} from "@/components";
import styles from "../authentication.module.css";
import { Icons, gender } from "@/utility";
import { Signup } from "@/hook/Admin/signup.hook";

const SignUpForm = () => {
  const {
    buttonLoader,
    handleImageChange,
    adminData,
    handleGenderChange,
    handleSubmit,
    admin,
  } = Signup();

  return (
    <div className="ma-auto w-full authentication-right">
      <div className={clsx(styles.authenticationTitle, "w-full")}>
        <h2 className="mb-1 title-color fw-700">Welcome Haven Quinox</h2>
        <p className="mb-0 h5 fw-400 text-gray">
          Please Create your HavenQuinox Hospital Account to continue
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5 ma-auto">
            {/* <HQAvatar
              single
              size={150}
              parentAvatar={"ma-auto"}
              img={getPath.originalImagePath}
              alt="Uploaded Image"
            /> */}
            <HQInputFile handleChange={handleImageChange}>
              <span className="flex">{Icons.camera}</span>photos
            </HQInputFile>
          </div>
          <div className="flex w-full gap-12">
            <HQInput
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter First Name"
              HQInputLabelClassName={styles.label}
              label="first name"
              value={admin.fname}
              handleChange={adminData}
            />
            <HQInput
              type="text"
              id="lName"
              name="lname"
              placeholder="Enter Last Name"
              HQInputLabelClassName={styles.label}
              label="last name"
              value={admin.lname}
              handleChange={adminData}
            />
          </div>
          <HQInput
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            HQInputLabelClassName={styles.label}
            label="email"
            value={admin.email}
            handleChange={adminData}
          />
          <HQInput
            type="number"
            id="phoneNo"
            name="phoneNo"
            placeholder="enter mobile number"
            HQInputLabelClassName={styles.label}
            label="mobile number"
            value={admin.phoneNo}
            handleChange={adminData}
          />
          <div className="flex w-full gap-12">
            <HQInput
              type="text"
              id="city"
              name="city"
              placeholder="enter City"
              HQInputLabelClassName={styles.label}
              label="Enter City"
              value={admin.city}
              handleChange={adminData}
            />
            <HQSelect
              id="gender"
              name="gender"
              placeholder="enter gender"
              HQSelectLabelClassName={styles.label}
              HQSelectContainerClassName={"w-full"}
              label="gender"
              options={gender}
              handleChange={handleGenderChange}
            />
          </div>
          <HQInputPassword
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            HQInputLabelClassName={styles.label}
            label="password"
            value={admin.password}
            handleChange={adminData}
          />
          <HQInputPassword
            type="password"
            id="ReenterPassword"
            name="cPass"
            placeholder="Re Enter password"
            label="Re Enter password"
            HQInputLabelClassName={styles.label}
            value={admin.cPass}
            handleChange={adminData}
          />
        </div>
        <HQButton
          customClass={"mt-5"}
          type="default"
          htmlType="submit"
          loading={buttonLoader}
          block
        >
          Sign Up
        </HQButton>
      </form>
    </div>
  );
};

export default SignUpForm;
