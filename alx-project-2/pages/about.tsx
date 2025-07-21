import Header from "../components/layout/Header"
import Button from "../components/common/Button"
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
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Click me</Button>

            <Button size="small" shape="rounded-full" className="bg-indigo-600 text-white hover:bg-indigo-700">
            Small Button
            </Button>

            <Button 
            size="large" 
            shape="rounded-sm" 
            className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
            Large Button
            </Button>
          </div>
        </div>
      </section>

      
    </main>
  )
}