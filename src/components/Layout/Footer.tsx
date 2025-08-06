import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Home Court Series</h3>
            <p className="text-gray-400 text-sm">
              Premier beach volleyball tournaments in the Dallas-Fort Worth area.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/tournaments" className="block text-gray-400 hover:text-white">
                Tournaments
              </Link>
              <Link to="/juniors" className="block text-gray-400 hover:text-white">
                Juniors
              </Link>
              <Link to="/schedule" className="block text-gray-400 hover:text-white">
                Schedule
              </Link>
              <Link to="/rules" className="block text-gray-400 hover:text-white">
                Rules
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Beach Bakyard</p>
              <p>3001 Los Rios Blvd</p>
              <p>Plano, TX 75074</p>
              <p>homecourtsignup@beachbakyard.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Payment</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Venmo: @Daytonscott</p>
              <p>Cash payments accepted</p>
              <p className="text-yellow-400">Payment due by Wednesday</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Home Court Series. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;