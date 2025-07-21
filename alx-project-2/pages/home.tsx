import Header from "../components/layout/Header"
import Card from "../components/common/Card"
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to Our Platform</span>
              <span className="block text-indigo-600">Your Journey Begins Here</span>
            </h1>
           
          </div>
        </div>
      </section>
      <section className="py-20 border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-8">
          <Card title="Card A" content="Card Content A" />
          <Card title="Card B" content="Card Content B" />
          <Card title="Card C" content="Card Content C" />
        </div>
      </section>
      
    </main>
  )
}