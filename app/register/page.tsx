'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    profession: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.message || 'Registration failed')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-700">SPP</Link>
          <Link href="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-red-700">Join SPP</h2>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="text-green-800 font-semibold">Registration Successful!</p>
            <p className="text-green-700 mt-2">Your application has been submitted for Secretary General approval. You will receive an email once approved.</p>
            <Link href="/" className="text-red-700 hover:underline mt-4 inline-block">← Back to Home</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                placeholder="Your country"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Profession</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                placeholder="Your profession"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
