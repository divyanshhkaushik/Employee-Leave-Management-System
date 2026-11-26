import React from 'react'
import Heading from '../components/Heading.jsx'
import Footer from '../components/Footer.jsx'
import Cards from '../components/Cards.jsx'
import landingImg from '../assets/landing-page-img.svg'
import { useNavigate } from 'react-router-dom'
import LoginPage from './LoginPage.jsx'

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Heading />

      <main className="flex flex-1 items-center bg-gradient-to-br from-[#FAFAF6] to-[#C8D6CC] px-5 py-12 sm:px-12 lg:px-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          <section className="flex max-w-xl flex-col items-start">
            <h2 className="text-4xl font-bold leading-tight text-[#263E32] sm:text-5xl lg:text-6xl">
              For the days you need to step away
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#52665B] sm:text-lg">
              Take Leave, track leaves and all.
            </p>

            <button
              type="button"
              className="mt-8 h-12 rounded-lg border border-[#284F3E] bg-[#284F3E] px-8 text-base font-semibold text-white cursor-pointer transition-colors hover:bg-[#1F4032]"
             onClick={handleNavigate}>
              Login
            </button>
          </section>

          <div className="flex items-center justify-center lg:justify-end">
            <img
              className="h-auto w-full max-w-[620px]"
              src={landingImg}
              alt="Employee managing leave requests"
            />
          </div>
        </div>
      </main>

      <Cards />

      <Footer />
    </div>
  )
}

export default LandingPage
