import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-ocean via-sunset-orange to-sand-yellow text-night-sky py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">
            Home Court Series
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-headline text-night-sky/80">
            Premier Beach Volleyball Tournaments
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-body">
            FIVB-Style King of the Court tournaments featuring maximum competition 
            with minimal downtime. Join us for high-level play in the Dallas-Fort Worth area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/tournaments"
              className="bg-sand-yellow text-night-sky px-8 py-4 rounded-lg font-headline font-bold text-lg hover:bg-sunset-orange hover:text-beach-white transition-colors duration-300"
            >
              Open Tournaments
            </Link>
            <Link
              to="/juniors"
              className="bg-sunset-orange text-beach-white px-8 py-4 rounded-lg font-headline font-bold text-lg hover:bg-teal-ocean transition-colors duration-300"
            >
              Junior Tournaments
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-beach-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-night-sky mb-4">Why Choose Home Court Series?</h2>
            <p className="text-xl font-body text-night-sky/70">Experience the best beach volleyball competition in Texas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-ocean/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-headline font-bold text-night-sky mb-4">High-Level Competition</h3>
              <p className="font-body text-night-sky/70">
                FIVB-style King of the Court format ensures maximum playing time and competitive matches
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sunset-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-headline font-bold text-night-sky mb-4">Minimal Downtime</h3>
              <p className="font-body text-night-sky/70">
                Efficient tournament structure guarantees at least 5 rounds of play in under 3 hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sand-yellow/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-headline font-bold text-night-sky mb-4">Prime Location</h3>
              <p className="font-body text-night-sky/70">
                Beach Bakyard in Plano offers professional-quality sand courts and facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Tournament Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Open Division</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Entry Fee:</span>
                    <span>$50 per team</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Format:</span>
                    <span>King of the Court</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Teams per Court:</span>
                    <span>5 teams</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Schedule:</span>
                    <span>Friday nights in August</span>
                  </div>
                </div>
                <Link
                  to="/tournaments"
                  className="block w-full text-center bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Register for Open
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Junior Division</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Entry Fee:</span>
                    <span>$60 per team</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Format:</span>
                    <span>King/Queen of the Court</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Teams per Court:</span>
                    <span>5 teams</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Schedule:</span>
                    <span>Friday nights in August</span>
                  </div>
                </div>
                <Link
                  to="/juniors"
                  className="block w-full text-center bg-green-600 text-white py-3 mt-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Register for Juniors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Compete?</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Join the premier beach volleyball tournament series in the Dallas-Fort Worth area. 
            Register today and experience high-level competition!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/schedule"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book Private Lessons
            </Link>
            <Link
              to="/rules"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
            >
              View Tournament Rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;