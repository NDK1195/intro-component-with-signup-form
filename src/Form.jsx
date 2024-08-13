import { useState } from "react";
import Input from "./Input";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isInputEmpty, setIsInputEmpty] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputFocus(event) {
    const { name } = event.target;

    setIsInputEmpty({ ...isInputEmpty, [name]: false });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;

    if (formData.firstName === "") {
      setIsInputEmpty({ ...isInputEmpty, firstName: true });
    }
    if (formData.lastName === "") {
      setIsInputEmpty({ ...isInputEmpty, lastName: true });
    }
    if (formData.email === "") {
      setIsInputEmpty({ ...isInputEmpty, email: true });
    }
    if (formData.password === "") {
      setIsInputEmpty({ ...isInputEmpty, password: true });
    }

    if (!emailRegex.test(formData.email)) {
      setIsEmailInvalid(true);
    }

    console.log("🚀 ~ Form ~ isInputEmpty:", isInputEmpty);

    console.log("🚀 ~ Form ~ formData:", formData);
    setFormData({ ...formData, [name]: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col gap-4 lg:gap-5">
        {/* input  */}
        <Input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          isInputEmpty={isInputEmpty}
          isEmailInvalid={isEmailInvalid}
        />
        {/* input  */}
        {/* input  */}
        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          isInputEmpty={isInputEmpty}
          isEmailInvalid={isEmailInvalid}
        />
        {/* input  */}
        {/* input  */}
        <Input
          placeholder="Email Address"
          type="text"
          name="email"
          value={formData.email}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          isInputEmpty={isInputEmpty}
          isEmailInvalid={isEmailInvalid}
        />
        {/* input  */}
        {/* input  */}
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          isInputEmpty={isInputEmpty}
          isEmailInvalid={isEmailInvalid}
        />
        {/* input  */}
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="shadow-button bg mb-2 w-full rounded-[5px] bg-green py-[15px] text-[15px] font-semibold uppercase leading-[26px] tracking-[1px] text-white transition-colors hover:bg-[#77E2B3]"
      >
        Claim your free trial
      </button>
      {/* submit button */}

      {/* terms and services */}
      <p className="px-4 text-center text-[11px] font-medium leading-[21px] text-grayish-blue lg:leading-[26px]">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="font-bold text-red">
          Terms and Services
        </a>
      </p>
      {/* terms and services */}
    </form>
  );
}
export default Form;
