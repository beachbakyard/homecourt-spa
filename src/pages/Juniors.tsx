import React from 'react';
import RegistrationForm from '../components/Common/RegistrationForm';
import { juniorConfig } from '../types/tournament';

const Juniors: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Junior Tournaments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FIVB-Style King/Queen of the Court tournaments designed for developing junior players. 
            Preparation for junior nationals and college volleyball with high-quality, high-level play.
          </p>
        </div>

        {/* Junior-Specific Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Junior Development Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Skill Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    College volleyball preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Junior nationals training
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Advanced technique refinement
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Competitive match experience
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Tournament Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Maximum competition, minimal downtime
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    High-level play in under 3 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Age-appropriate competitive environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Professional coaching insights
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* King/Queen of the Court Format */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">King/Queen of the Court Format</h2>
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
                    FIVB rules with junior modifications
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Scoring System</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Points only scored from "king/queen" side
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Winner stays, loser rotates out
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Adaptive scoring for skill levels
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fair rotation system ensures equal play
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Junior Tournament Schedule */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">August 2025 Junior Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { date: 'August 2', status: 'Open', note: 'All skill levels welcome' },
                { date: 'August 9', status: 'Open', note: 'Beginner friendly' },
                { date: 'August 16', status: 'Open', note: 'Intermediate focus' },
                { date: 'August 23', status: 'Open', note: 'Advanced preparation' },
                { date: 'August 30', status: 'Open', note: 'Championship prep' }
              ].map((event) => (
                <div key={event.date} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.date}, 2025</h3>
                  <p className="text-gray-600 mb-2">Friday Evening</p>
                  <p className="text-sm text-blue-600 mb-3">{event.note}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-2xl font-bold text-green-600">$60</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Requirements */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">Junior Requirements & Safety</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Required Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Parent/Guardian contact information
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Emergency contact details
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Medical information (if applicable)
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Signed liability waiver by parent/guardian
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Safety Measures</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Certified coaches on-site
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    First aid readily available
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Parent/guardian supervision welcomed
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Age-appropriate competition levels
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-blue-100 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Tournament Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Beach Bakyard</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    3001 Los Rios Blvd, Plano, TX 75074
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    homecourtsignup@beachbakyard.com
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Junior-Friendly Amenities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Safe, supervised environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Parent spectator areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Hydration stations
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Youth-appropriate refreshments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <RegistrationForm isJunior={true} config={juniorConfig} />
        
        {/* Important Notes for Juniors */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-red-800 mb-3">Important Junior Tournament Information</h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Parent/Guardian must sign liability waiver for all junior participants
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Registration spots are NOT reserved until payment is received by Wednesday
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Emergency contact information is mandatory for all junior players
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Teams should arrive 30 minutes early for check-in and warm-up
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                Parent/Guardian supervision recommended during tournament
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">Development Opportunities</h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                College recruiting exposure opportunities
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Professional coaching feedback available
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Pathway to junior nationals preparation
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Team building and sportsmanship focus
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juniors;