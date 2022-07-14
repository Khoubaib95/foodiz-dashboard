import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import SingnupForm from "./Steps/Form";
import Complete from "./Steps/Complete";
import ImageCrop from "../../Components/ImageCrop";
import { signUpUserApi } from "../../../api/auth/auth.api";

// Yup Config
const validationSchema = yup.object({
  fname: yup
    .string()
    .min(8, "First name should be of minimum 8 characters length")
    .required("Email is required"),
  lname: yup
    .string()
    .min(8, "First name should be of minimum 8 characters length")
    .required("Password is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  agreeTerms: yup.bool().oneOf([true], "Field must be checked"),
});

//Steps Titles
const steps = ["Personal Information", "Profile Image", "Complete"];

function Form() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { push } = useRouter();
  // Set Formik config
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      image: null,
      showPassword: false,
      agreeTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const setImage = (imageName: string) => (image: any) => {
    formik.setFieldValue(imageName, image);
  };

  const submit = async () => {
    setLoading(true);
    try {
      const { fname, lname, email, password, image } = formik.values;
      const data = await signUpUserApi({
        fname,
        lname,
        email,
        password,
        image,
      });

      setMessage("Account created successfully.");
      setLoading(false);
      setTimeout(() => {
        push("/auth/signin");
      }, 5000);
    } catch (error: any) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <SingnupForm formik={formik} />;
      case 2:
        return <ImageCrop title="Profile Image" setImage={setImage("image")} />;
      case 3:
        return <Complete loading={loading} error={error} message={message} />;
      default:
        <></>;
    }
  };
  const handleClick = (direction: "next" | "last") => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="mx-auto md:w-1/2">
      {/* Stepper */}
      <Stepper
        steps={steps}
        currentStep={currentStep}
        setError={setError}
        setMessage={setMessage}
      />

      <div className="bg-white ml-auto mr-auto mt-10 shadow overflow-hidden sm:rounded-md max-w-lg mx-auto h-full">
        {displayStep(currentStep)}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          isValid={formik.isValid}
          handleSubmit={submit}
        />
      </div>
    </div>
  );
}

export default Form;
