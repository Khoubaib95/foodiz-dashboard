import { Footer } from "flowbite-react";
import { HomeIcon } from "@heroicons/react/outline";

const errorInputClass =
  "border-red-500 focus:ring-red-500 focus:border-red-500 ";
const simpleInputClass =
  "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500";
const inputClass = "mt-1 block w-full shadow-sm sm:text-sm rounded-md";

function TextField({
  label,
  name,
  id,
  type,
  value,
  className,
  placeholder = "",
  autoComplete,
  rows = undefined,
  required = false,
  error,
  onChange,
}: any) {
  return (
    <div
      className={`${
        error ? "text-red-700" : "text-gray-700"
      } col-span-6 sm:col-span-3 mt-2`}
    >
      <label htmlFor={id} className="block text-sm font-medium ">
        {label}
      </label>
      <textarea
        onChange={onChange}
        name={name}
        id={id}
        rows={rows}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        value={value}
        className={`${
          error ? errorInputClass : simpleInputClass
        } ${inputClass} ${className}`}
      />
      <p
        className={`h-5 peer-invalid:visible text-red-700 block text-sm font-medium`}
      >
        {error}
      </p>
    </div>
  );
}
export default TextField;
