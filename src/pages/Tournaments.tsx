import React from 'react';
import RegistrationForm from '../components/Common/RegistrationForm';
import { openConfig } from '../types/tournament';

const Tournaments: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Open Tournaments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FIVB-Style King of the Court tournaments designed for competitive adult players. 
            Experience high-level beach volleyball with minimal downtime and maximum competition.
          </p>
        </div>

        {/* King of the Court Rules Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">King of the Court Format</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Tournament Structure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    5 teams per court maximum
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    At least 5 rounds guaranteed per team
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Tournament completed in under 3 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    FIVB rules and regulations apply
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Scoring System</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Points only scored from "king" side
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Winner stays, loser rotates out
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    First team to designated points wins
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Maximum playing time per match
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tournament Schedule */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">August 2025 Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { date: 'August 2', status: 'Open' },
                { date: 'August 9', status: 'Open' },
                { date: 'August 16', status: 'Open' },
                { date: 'August 23', status: 'Open' },
                { date: 'August 30', status: 'Open' }
              ].map((event) => (
                <div key={event.date} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.date}, 2025</h3>
                  <p className="text-gray-600 mb-3">Friday Evening</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-2xl font-bold text-blue-600">$50</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">Tournament Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Beach Bakyard</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    3001 Los Rios Blvd, Plano, TX 75074
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    homecourtsignup@beachbakyard.com
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Facility Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Professional-grade sand courts
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Full amenities and changing rooms
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    On-site food and beverages
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Ample parking available
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Participating Courts */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Participating Home Courts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Beach Bakyard',
                'Sandy Pickle',
                'MadSand Volleyball',
                'Sports Garden DFW',
                'The Strand',
                'TCU Beach Volleyball',
                'Game On Sports Complex',
                'Private Courts'
              ].map((court) => (
                <div key={court} className="bg-gray-100 rounded-lg p-4 text-center font-medium text-gray-700 hover:bg-blue-100 transition-colors duration-300">
                  {court}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <RegistrationForm isJunior={false} config={openConfig} />
        
        {/* Important Notes */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-red-800 mb-3">Important Registration Information</h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Registration spots are NOT reserved until payment is received
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Payment must be received by Wednesday before the tournament
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                All players must agree to liability waiver and media release
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Teams should arrive 30 minutes before tournament start time
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;