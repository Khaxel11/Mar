import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Página no encontrada</p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
