import { PostProps } from '@/interfaces';

export default function PostCard({ userId, title, content }: PostProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex items-center mb-4">
        <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
        <div>
          <span className="text-sm text-gray-500">User {userId}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 line-clamp-3">{content}</p>
    </div>
  );
}