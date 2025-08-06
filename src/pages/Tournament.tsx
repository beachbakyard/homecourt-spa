import React, { useState } from 'react';
import TournamentSelector from '../components/Common/TournamentSelector';
import EnhancedRegistrationForm from '../components/Common/EnhancedRegistrationForm';
import { juniorConfig, openConfig } from '../types/tournament';

const Tournament: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<'junior' | 'adult' | null>(null);

  // You can add your Google Apps Script URL here
  const webAppUrl = process.env.REACT_APP_WEBAPP_URL; // Set in .env file

  const handleDivisionSelect = (division: 'junior' | 'adult') => {
    setSelectedDivision(division);
  };

  return (
    <div className="min-h-screen">
      {/* Tournament Hype Hero Section */}
      <section className="bg-gradient-to-br from-teal-ocean via-sunset-orange to-sand-yellow text-night-sky py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-4xl md:text-6xl mb-6">🏐</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-headline font-bold mb-4 md:mb-6 leading-tight">
            HOME COURT SERIES
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mb-6 font-headline text-night-sky/90 leading-relaxed">
            FIVB King of the Court Tournament
          </h2>
          
          {/* Hype Messaging */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-beach-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-headline text-lg font-bold text-night-sky">
                  "It's not a club."
                </p>
              </div>
              <div className="bg-beach-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-headline text-lg font-bold text-night-sky">
                  "Family &gt; everything."
                </p>
              </div>
              <div className="bg-beach-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-headline text-lg font-bold text-night-sky">
                  "Play like legends. Train like misfits."
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-body">
            🔥 Maximum competition, minimal downtime • 5 teams per court • At least 5 rounds guaranteed • Under 3 hours
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-night-sky/80 font-body">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Fast-Paced Action</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">Elite Competition</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌊</span>
              <span className="font-semibold">Beach Bakyard</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="text-3xl mb-2">⬇️</div>
            <p className="font-body text-night-sky/70">Choose Your Division</p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">🏐</div>
          <div className="absolute top-40 right-20 text-4xl">🔥</div>
          <div className="absolute bottom-20 left-20 text-5xl">⚡</div>
          <div className="absolute bottom-40 right-10 text-3xl">🏆</div>
        </div>
      </section>

      {/* Tournament Division Selector */}
      <section className="py-12 bg-cream">
        <TournamentSelector onDivisionSelect={handleDivisionSelect} />
      </section>

      {/* Registration Form */}
      {selectedDivision && (
        <section className="py-12 bg-beach-white" id="registration-section">
          <EnhancedRegistrationForm 
            division={selectedDivision}
            config={selectedDivision === 'junior' ? juniorConfig : openConfig}
            webAppUrl={webAppUrl}
          />
        </section>
      )}

      {/* Tournament Format Explanation */}
      <section className="py-16 bg-night-sky text-beach-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-8">
              🏐 King of the Court Format
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-beach-white/10 rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold mb-4">How It Works</h3>
                <ul className="space-y-3 text-left font-body">
                  <li>• 5 teams per court maximum</li>
                  <li>• Winner stays, loser rotates out</li>
                  <li>• Points only scored from "king" side</li>
                  <li>• Fast-paced matches, minimal downtime</li>
                </ul>
              </div>
              
              <div className="bg-beach-white/10 rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold mb-4">Guaranteed</h3>
                <ul className="space-y-3 text-left font-body">
                  <li>• At least 5 rounds of play</li>
                  <li>• Tournament finished in under 3 hours</li>
                  <li>• High-level competitive matches</li>
                  <li>• FIVB rules and regulations</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-ocean to-sunset-orange p-6 rounded-lg">
              <h3 className="text-2xl font-headline font-bold mb-4">
                🌟 Past Champions & Results
              </h3>
              <div className="bg-beach-white/20 p-4 rounded-lg backdrop-blur-sm">
                <iframe 
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSampleSpreadsheetId/pubhtml" 
                  width="100%" 
                  height="400" 
                  frameBorder="0"
                  className="rounded-lg"
                  title="Tournament Results"
                >
                </iframe>
                <p className="text-sm mt-2 font-body opacity-75">
                  Live tournament results and past champions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Details */}
      <section className="py-16 bg-sand-yellow/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-night-sky">
              📍 Tournament Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-beach-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-headline font-bold mb-4 text-teal-ocean">
                  🌊 Beach Bakyard
                </h3>
                <div className="space-y-3 font-body">
                  <p><strong>Address:</strong> 3001 Los Rios Blvd, Plano, TX 75074</p>
                  <p><strong>Schedule:</strong> Friday nights in August 2025</p>
                  <p><strong>Facilities:</strong> Professional sand courts, amenities, parking</p>
                  <p><strong>Contact:</strong> homecourtsignup@beachbakyard.com</p>
                </div>
              </div>
              
              <div className="bg-beach-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-headline font-bold mb-4 text-sunset-orange">
                  💰 Payment & Registration
                </h3>
                <div className="space-y-3 font-body">
                  <p><strong>Junior (18U):</strong> $60 per team</p>
                  <p><strong>Adult/Open:</strong> $50 per team</p>
                  <p><strong>Payment:</strong> Venmo @daytonscott or cash</p>
                  <p><strong>Deadline:</strong> Payment due by Wednesday</p>
                  <div className="bg-sunset-orange/10 p-3 rounded-lg mt-4">
                    <p className="font-semibold text-sunset-orange">
                      ⚠️ Spot not reserved until payment received!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournament;