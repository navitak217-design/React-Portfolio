'use client'
import bg from "./images/bg.jpg";
import "./App.css";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
   { name: 'Home', href: 'bg-white' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white" >
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="text-4xl font-bold text-indigo-600">
              Nk<span className="text-gray-900">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-indigo-500 rounded-2xl p-1 pl-4 pr-4 hover:drop-shadow-[0_0_8px_#60a5fa] duration-1000 transition duration-800 font-medium  text-2xl "
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
          <Dialog.Panel className="fixed inset-0 bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-indigo-600">Nk<span className="text-gray-900">.</span></span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="mt-6 flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-indigo-500 rounded-2xl p-1 pl-4 pr-4 hover:drop-shadow-[0_0_8px_#60a5fa] duration-1000 transition duration-800 font-medium  text-2xl"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Section */}
<main
  className="hero pt-20 flex items-center justify-center"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
        <div className="mx-auto max-w-2xl text-center py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white sm:text-6xl">Hi, I’m <span style={{color:"#4f46e5", textShadow:"0 0 15px rgba(99,102,241,0.7)"}}>Naveeta </span>Kumari</h1>
          <p className="mt-6 text-lg text-white">
   I am a Web Developer, having strong command in frontend. But also posses basic skills of backend.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="/resume.pdf"
              className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition"
            >
              
  Download CV
            </a>
            <a
              href="#about"
              className="rounded-md px-6 py-3 text-indigo-600 font-semibold border border-indigo-600 hover:bg-indigo-50 transition"
            >
           Get Started
            </a> 
          </div>
        </div>
      </main>
    </div>
  )
}
