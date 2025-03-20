'use client'
import Link from 'next/link'
import * as Yup from 'yup'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'

import { useAuth } from '@/hooks/auth'
import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'

interface Values {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const RegisterPage = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const submitForm = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>,
  ) => {
    try {
      await register(values)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('The name field is required.'),
    email: Yup.string()
      .email('Invalid email')
      .required('The email field is required.'),
    password: Yup.string().required('The password field is required.'),
    password_confirmation: Yup.string()
      .required('Please confirm password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  })

  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
      }>
      <Formik
        onSubmit={submitForm}
        validationSchema={RegisterSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        }}>
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="undefined block font-medium text-sm text-gray-700">
              Name
            </label>

            <Field
              id="name"
              name="name"
              className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="name"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="undefined block font-medium text-sm text-gray-700">
              Email
            </label>

            <Field
              id="email"
              name="email"
              type="email"
              className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="email"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="undefined block font-medium text-sm text-gray-700">
              Password
            </label>

            <Field
              id="password"
              name="password"
              type="password"
              className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="password"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="undefined block font-medium text-sm text-gray-700">
              Confirm Password
            </label>

            <Field
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="password_confirmation"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Link
              href="/login"
              className="underline text-sm text-gray-600 hover:text-gray-900">
              Already registered?
            </Link>

            <button
              type="submit"
              className="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-hidden focus:border-gray-900 focus:ring-3 ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </AuthCard>
  )
}

export default RegisterPage
