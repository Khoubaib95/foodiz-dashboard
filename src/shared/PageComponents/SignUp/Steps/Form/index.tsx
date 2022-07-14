import TextField from "../../../../Components/TextField";
import Link from "next/link";

function SigUpForm({ formik }: any) {
  return (
    <form onSubmit={formik.handleSubmit} className="max-w-4xl p-8 mx-auto">
      <TextField
        id="fname"
        name="fname"
        type="text"
        label="Last name"
        autoComplete="given-name"
        value={formik.values.fname}
        onChange={formik.handleChange}
        error={
          formik.touched.fname && Boolean(formik.errors.fname)
            ? formik.errors.fname
            : ""
        }
      />
      <TextField
        id="lname"
        name="lname"
        type="text"
        label="Last name"
        autoComplete="family-name"
        value={formik.values.lname}
        onChange={formik.handleChange}
        error={
          formik.touched.lname && Boolean(formik.errors.lname)
            ? formik.errors.lname
            : ""
        }
      />
      <TextField
        id="email"
        name="email"
        type="text"
        label="Email"
        placeholder="name@foodizboard.com"
        required
        value={formik.values.email}
        onChange={formik.handleChange}
        error={
          formik.touched.email && Boolean(formik.errors.email)
            ? formik.errors.email
            : ""
        }
      />
      <TextField
        id="password"
        name="password"
        type={formik.values.showPassword ? "text" : "password"}
        label="Password"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        error={
          formik.touched.password && Boolean(formik.errors.password)
            ? formik.errors.password
            : ""
        }
      />
      <div className="flex items-center h-5 mt-4">
        <input
          id="terms"
          type="checkbox"
          value={formik.values.showPassword}
          defaultChecked={formik.values.showPassword}
          name="showPassword"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          onChange={formik.handleChange}
        />
        <label
          htmlFor="terms"
          className="ml-2 block text-sm font-medium text-gray-700"
        >
          Show password
        </label>
      </div>
      <div className="flex items-center h-5 mt-4">
        <input
          id="terms"
          type="checkbox"
          value={formik.values.agreeTerms}
          defaultChecked={formik.values.agreeTerms}
          name="agreeTerms"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
          onChange={formik.handleChange}
        />
        <label
          htmlFor="terms"
          className="ml-2 block text-sm font-medium text-gray-700"
        >
          I agree with the
          <a
            href="#"
            className="ml-1 text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
    </form>
  );
}

export default SigUpForm;
