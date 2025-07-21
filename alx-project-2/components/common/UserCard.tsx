import { UserProps } from '@/interfaces';

export default function UserCard({ user }: { user: UserProps }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-200 mr-3"></div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-600">{user.company.name}</p>
          <p className="text-sm text-gray-500">{user.company.catchPhrase}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">📍</span>
            <span className="text-sm text-gray-600">
              {user.address.city}, {user.address.street}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">📞</span>
            <span className="text-sm text-gray-600">{user.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">📧</span>
            <span className="text-sm text-gray-600">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
