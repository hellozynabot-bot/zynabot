import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-white">Zynabot</span>
          </Link>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2025 Zynabot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
