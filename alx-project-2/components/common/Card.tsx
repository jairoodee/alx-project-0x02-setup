import { CardProps } from '@/interfaces';

function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

export default Card;
