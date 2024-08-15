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

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleInputFocus(event) {
    const { name } = event.target;

    setIsInputEmpty((prevState) => ({ ...prevState, [name]: false }));
    setIsEmailInvalid(false);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (formData.firstName === "") {
      setIsInputEmpty((prevState) => ({ ...prevState, firstName: true }));
    }
    if (formData.lastName === "") {
      setIsInputEmpty((prevState) => ({ ...prevState, lastName: true }));
    }
    if (formData.password === "") {
      setIsInputEmpty((prevState) => ({ ...prevState, password: true }));
    }

    if (formData.email !== "") {
      if (!emailRegex.test(formData.email)) {
        setIsEmailInvalid(true);
      }
    } else {
      setIsInputEmpty((prevState) => ({ ...prevState, email: true }));
    }
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
        className="bg mb-2 w-full rounded-[5px] bg-green py-[15px] text-[15px] font-semibold uppercase leading-[26px] tracking-[1px] text-white shadow-button transition-colors hover:bg-[#77E2B3]"
      >
        Claim your free trial
      </button>
      {/* submit button */}
    </form>
  );
}
export default Form;
