import Header from "../components/layout/Header"
import Card from "../components/common/Card"
import PostModal from "../components/common/PostModal"
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Card A", content: "Card Content A" },
    { id: 2, title: "Card B", content: "Card Content B" },
    { id: 3, title: "Card C", content: "Card Content C" }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [nextId, setNextId] = useState(4);

  const handleCreatePost = (title: string, content: string) => {
    const newPost: Post = {
      id: nextId,
      title,
      content
    };
    setPosts([...posts, newPost]);
    setNextId(nextId + 1);
  };

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
            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create New Post
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-8">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </section>

      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleCreatePost}
      />
    </main>
  );
}