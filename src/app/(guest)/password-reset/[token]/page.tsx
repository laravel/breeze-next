'use client'

import Link from 'next/link'
import * as Yup from 'yup'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'

import { useAuth } from '@/hooks/auth'
import AuthCard from '@/components/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

interface Values {
  email: string
  password: string
  password_confirmation: string
}

const PasswordResetPage = () => {
  const query = useSearchParams()
  const { resetPassword } = useAuth({ middleware: 'guest' })

  const submitForm = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>,
  ) => {
    try {
      await resetPassword(values)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const ForgotPasswordSchema = Yup.object().shape({
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
        validationSchema={ForgotPasswordSchema}
        initialValues={{
          password: '',
          password_confirmation: '',
          email: query.get('email') ?? '',
        }}>
        <Form className="space-y-4">
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
              disabled
              className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-75 disabled:cursor-not-allowed"
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
            <button
              type="submit"
              className="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-hidden focus:border-gray-900 focus:ring-3 ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
              Reset Password
            </button>
          </div>
        </Form>
      </Formik>
    </AuthCard>
  )
}

export default PasswordResetPage
