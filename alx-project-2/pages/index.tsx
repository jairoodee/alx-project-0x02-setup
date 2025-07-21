import Header from "../components/layout/Header"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Header />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Our Application
      </h1>
      <p className="text-xl text-gray-600">
        Let's Begin building amazing things!
      </p>
    </main>
  )
}