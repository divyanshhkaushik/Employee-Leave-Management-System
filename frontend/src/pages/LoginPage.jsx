import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import Footer from '../components/Footer.jsx'
import logo from '../assets/elms-logo.svg'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in both email and password.')
      return
    }

    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      handleNavigate()
    }, 700)
  }

  return (
    <div id="top" className="flex min-h-screen flex-col bg-[#F4F7F2]">
      <main className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-md rounded-[24px] border border-white/80 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(38,62,50,0.12)] sm:px-10 sm:py-10">
          <div className="mb-7 flex justify-center">
            <img className="h-14 w-[160px] object-contain" src={logo} alt="ELMS" />
          </div>

          <div className="mb-7 text-center">
            <p className="text-sm font-semibold text-[#263E32]">Welcome back</p>
            <h2 className="mt-1 text-3xl font-bold text-[#263E32]">Login to your account</h2>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <p role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#263E32]">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8B80]" size={19} />
                <input type="email" id="email" placeholder="name@orgnization.com" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#D9E1DC] bg-[#FBFCFA] pl-12 pr-4 text-sm text-[#263E32] outline-none transition placeholder:text-[#9DA9A2] focus:border-[#284F3E] focus:ring-4 focus:ring-[#284F3E]/10"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-[#263E32]">
                  Password
                </label>
                <a href="#forgot-password" className="text-sm font-semibold text-[#BA714B] hover:text-[#965638]">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8B80]" size={19} />
                <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#D9E1DC] bg-[#FBFCFA] pl-12 pr-12 text-sm text-[#263E32] outline-none transition placeholder:text-[#9DA9A2] focus:border-[#284F3E] focus:ring-4 focus:ring-[#284F3E]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#718078] hover:bg-[#EDF2EE] hover:text-[#263E32]"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 h-12 w-full rounded-xl bg-[#284F3E] text-sm font-bold text-white shadow-[0_10px_24px_rgba(40,79,62,0.20)] transition hover:bg-[#1F4032] focus:outline-none focus:ring-4 focus:ring-[#284F3E]/20 disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <p className="mt-6 text-center text-sm text-[#6F7F76]">
              Need help?{' '}
              <a href="mailto:admin@elms.com" className="font-semibold text-[#263E32] underline decoration-[#BA714B]/50 underline-offset-4 hover:text-[#BA714B]">
                Contact Administration
              </a>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LoginPage
