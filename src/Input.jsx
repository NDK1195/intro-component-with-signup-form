import PropTypes from "prop-types";
function Input({
  placeholder,
  type,
  name,
  value,
  handleInputChange,
  handleInputFocus,
  isInputEmpty,
  isEmailInvalid,
}) {
  let errorText = "";

  if (isInputEmpty[name]) {
    errorText = `${placeholder} cannot be empty`;
  }

  if (isEmailInvalid[name]) {
    errorText = "Looks like this is not an email";
  }
  console.log(isInputEmpty[name], isEmailInvalid[name]);

  return (
    <div className="relative">
      {/* input */}
      <input
        type={type}
        className={`w-full rounded-[5px] border-[1px] py-[14px] pl-[19.41px] text-sm font-semibold leading-[26px] tracking-[0.25px] text-dark-blue opacity-75 outline-none placeholder:text-dark-blue focus:border-blue focus:opacity-100 lg:pl-8 ${isInputEmpty[name] || isEmailInvalid[name] ? "border-red" : "border-[#DEDEDE]"}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {/* input */}

      {/* error text */}
      <p className="mt-[6px] text-right text-[11px] font-medium italic leading-none text-red">
        {errorText}
      </p>
      {/* error text */}

      {/* error icon */}
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-7 top-4 ${isInputEmpty[name] || isEmailInvalid[name] ? "block" : "hidden"}`}
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#FF7979" cx="12" cy="12" r="12" />
          <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
          <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
        </g>
      </svg>
      {/* error icon */}
    </div>
  );
}

Input.propTypes = {
  handleInputChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
export default Input;
