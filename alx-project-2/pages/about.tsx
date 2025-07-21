import Header from "../components/layout/Header"
export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">About Us</span>
              <span className="block text-indigo-600">Our Story & Mission</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Learn more about who we are, what we do, and why we do it.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Company</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  We are dedicated to creating innovative solutions that help businesses grow and succeed in the digital age.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of cutting-edge technology solutions that empower businesses worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Innovation and Excellence</li>
                  <li>Customer Focus</li>
                  <li>Team Collaboration</li>
                  <li>Integrity and Ethics</li>
                  <li>Sustainability and Growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-4">
                {/* Placeholder for team member image */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-4">
                {/* Placeholder for team member image */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-4">
                {/* Placeholder for team member image */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                Have questions or want to learn more? We'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-indigo-600 mr-2">📍</span>
                  <span>123 Business Street, Tech City, 12345</span>
                </div>
                <div className="flex items-center">
                  <span className="text-indigo-600 mr-2">📧</span>
                  <span>contact@company.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-indigo-600 mr-2">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}