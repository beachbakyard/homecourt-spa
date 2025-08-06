import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Home Court Series
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-200">
            Discover the story behind the Dallas-Fort Worth area's premier beach volleyball tournament series
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To provide the highest quality beach volleyball tournament experience in Texas, combining 
                professional-level competition with an inclusive community atmosphere that welcomes players 
                of all skill levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-blue-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Maintaining the highest standards in tournament organization and competition quality
                </p>
              </div>
              
              <div className="text-center bg-green-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Building a welcoming environment where players can grow and connect with fellow athletes
                </p>
              </div>
              
              <div className="text-center bg-yellow-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our tournament format to maximize competition and minimize wait times
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-blue-600 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Founded in 2019, Home Court Series began with a simple vision: create beach volleyball 
                      tournaments that prioritize player experience and competitive integrity. Starting with 
                      just a handful of teams, we recognized the need for well-organized, high-level competition 
                      in the Dallas-Fort Worth area.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-green-600 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Growth & Innovation</h3>
                    <p className="text-green-100 leading-relaxed">
                      Over the years, we've refined our King of the Court format to ensure maximum playing time 
                      and competitive balance. Our partnership with Beach Bakyard in Plano has provided us with 
                      world-class facilities, and we've expanded to include both open and junior divisions.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-yellow-600 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
                    <p className="text-yellow-100 leading-relaxed">
                      Today, Home Court Series stands as the premier beach volleyball tournament organization 
                      in Texas. We continue to innovate while staying true to our core values of excellence, 
                      community, and competitive integrity. Our future includes expansion to new locations 
                      and continued development of the sport we love.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
              <p className="text-xl text-gray-600">
                Meet the passionate individuals who make Home Court Series possible
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tournament Director</h3>
                <p className="text-blue-600 font-semibold mb-2">Leadership & Vision</p>
                <p className="text-gray-600 text-sm">
                  Oversees all tournament operations, rule implementation, and strategic direction for the series.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Event Coordinator</h3>
                <p className="text-green-600 font-semibold mb-2">Operations & Logistics</p>
                <p className="text-gray-600 text-sm">
                  Manages registrations, scheduling, and ensures smooth tournament day operations.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Head Referee</h3>
                <p className="text-yellow-600 font-semibold mb-2">Rules & Fair Play</p>
                <p className="text-gray-600 text-sm">
                  Ensures FIVB rules compliance and maintains the integrity of competition across all matches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">What Sets Us Apart</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">FIVB Standards</h3>
                <p className="text-blue-200">
                  All tournaments follow official FIVB beach volleyball rules, ensuring authentic competitive experience 
                  that prepares players for higher levels of competition.
                </p>
              </div>
              
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">King of the Court</h3>
                <p className="text-blue-200">
                  Our signature format guarantees maximum playing time with minimal downtime, featuring 5 teams 
                  per court and at least 5 rounds of play in under 3 hours.
                </p>
              </div>
              
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Professional Facilities</h3>
                <p className="text-blue-200">
                  Partnership with Beach Bakyard provides access to regulation sand courts, professional net systems, 
                  and all necessary amenities for world-class tournament experience.
                </p>
              </div>
              
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Inclusive Community</h3>
                <p className="text-blue-200">
                  From junior players to seasoned veterans, our tournaments welcome all skill levels while maintaining 
                  competitive integrity and sportsmanship.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/tournaments"
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Join Our Tournaments
              </Link>
              <Link
                to="/rules"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                View Tournament Rules
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;