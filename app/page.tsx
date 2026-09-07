import Link from 'next/link'
import { FiUsers, FiFileText, FiSettings, FiGlobe } from 'react-icons/fi'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-700">SPP</h1>
          <div className="space-x-4">
            <Link href="/register" className="text-blue-600 hover:text-blue-800">Register</Link>
            <Link href="/login" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Sudanese Professionals Parliament</h2>
          <p className="text-xl mb-8">Drafting the Future of Sudan</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">A multilingual, inclusive platform for professionals to participate in democratic discourse and shape Sudan&apos;s future</p>
          <Link href="/register" className="bg-white text-red-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 inline-block">
            Join Now
          </Link>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <FiUsers className="w-12 h-12 mx-auto text-red-700 mb-4" />
              <h4 className="font-bold text-lg mb-2">Inclusive</h4>
              <p className="text-gray-600">Open to all professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <FiGlobe className="w-12 h-12 mx-auto text-red-700 mb-4" />
              <h4 className="font-bold text-lg mb-2">Multilingual</h4>
              <p className="text-gray-600">English, Arabic, French</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <FiFileText className="w-12 h-12 mx-auto text-red-700 mb-4" />
              <h4 className="font-bold text-lg mb-2">Legislative</h4>
              <p className="text-gray-600">Voting & discourse</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <FiSettings className="w-12 h-12 mx-auto text-red-700 mb-4" />
              <h4 className="font-bold text-lg mb-2">Transparent</h4>
              <p className="text-gray-600">Democratic governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4 text-red-700">Member Registration</h4>
              <p className="text-gray-700">Easy registration with name, email, country, and profession. Subject to Secretary General approval for access to the virtual parliament.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4 text-red-700">Cabinet Management</h4>
              <p className="text-gray-700">Dynamic cabinet grid showcasing ministry leadership and organizational structure.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4 text-red-700">Legislative Vault</h4>
              <p className="text-gray-700">Searchable repository of bills, proposals, and voting records with member commentary.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4 text-red-700">Admin Panel</h4>
              <p className="text-gray-700">Comprehensive administration tools for email settings, ads management, and member oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Sudanese Professionals Parliament. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="hover:text-red-400">Privacy</Link>
            <Link href="#" className="hover:text-red-400">Terms</Link>
            <Link href="#" className="hover:text-red-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
