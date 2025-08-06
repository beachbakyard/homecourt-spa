import React, { useState } from 'react';

interface TournamentSelectorProps {
  onDivisionSelect: (division: 'junior' | 'adult') => void;
}

const TournamentSelector: React.FC<TournamentSelectorProps> = ({ onDivisionSelect }) => {
  const [selectedDivision, setSelectedDivision] = useState<'junior' | 'adult' | null>(null);

  const handleDivisionSelect = (division: 'junior' | 'adult') => {
    setSelectedDivision(division);
    onDivisionSelect(division);
    
    // Smooth scroll to registration form
    setTimeout(() => {
      const registrationSection = document.getElementById('registration-section');
      if (registrationSection) {
        registrationSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-night-sky mb-4">
          Choose Your Division
        </h2>
        <p className="text-lg font-body text-night-sky/70 mb-8">
          Select the tournament division that's right for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Junior Division */}
        <div 
          className={`bg-beach-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border-2 ${
            selectedDivision === 'junior' 
              ? 'border-sunset-orange shadow-xl transform -translate-y-1' 
              : 'border-transparent hover:border-sunset-orange/50 hover:shadow-xl hover:transform hover:-translate-y-1'
          }`}
          onClick={() => handleDivisionSelect('junior')}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🧒</div>
            <h3 className="text-2xl font-headline font-bold text-night-sky mb-3">
              Junior Division
            </h3>
            <div className="text-lg font-semibold text-sunset-orange mb-4">18U & Under</div>
            
            <div className="space-y-3 text-left font-body text-sm text-night-sky/80">
              <div className="flex justify-between">
                <span>Entry Fee:</span>
                <span className="font-semibold text-sunset-orange">$60/team</span>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <span>King/Queen of Court</span>
              </div>
              <div className="flex justify-between">
                <span>Teams per Court:</span>
                <span>5 teams max</span>
              </div>
              <div className="flex justify-between">
                <span>Guaranteed Rounds:</span>
                <span>At least 5</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-sunset-orange/10 rounded-lg">
              <p className="text-sm font-body text-night-sky/70 font-medium">
                🎯 College prep • Junior nationals training • Skill development focus
              </p>
            </div>

            <button 
              className={`w-full mt-6 py-3 px-6 rounded-lg font-headline font-bold text-lg transition-colors duration-300 ${
                selectedDivision === 'junior'
                  ? 'bg-sunset-orange text-beach-white'
                  : 'bg-sunset-orange/20 text-sunset-orange hover:bg-sunset-orange hover:text-beach-white'
              }`}
            >
              {selectedDivision === 'junior' ? '✓ Junior Selected' : 'Select Junior'}
            </button>
          </div>
        </div>

        {/* Adult/Open Division */}
        <div 
          className={`bg-beach-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border-2 ${
            selectedDivision === 'adult' 
              ? 'border-teal-ocean shadow-xl transform -translate-y-1' 
              : 'border-transparent hover:border-teal-ocean/50 hover:shadow-xl hover:transform hover:-translate-y-1'
          }`}
          onClick={() => handleDivisionSelect('adult')}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-2xl font-headline font-bold text-night-sky mb-3">
              Adult / Open Division
            </h3>
            <div className="text-lg font-semibold text-teal-ocean mb-4">All Ages Welcome</div>
            
            <div className="space-y-3 text-left font-body text-sm text-night-sky/80">
              <div className="flex justify-between">
                <span>Entry Fee:</span>
                <span className="font-semibold text-teal-ocean">$50/team</span>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <span>King of the Court</span>
              </div>
              <div className="flex justify-between">
                <span>Teams per Court:</span>
                <span>5 teams max</span>
              </div>
              <div className="flex justify-between">
                <span>Guaranteed Rounds:</span>
                <span>At least 5</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-teal-ocean/10 rounded-lg">
              <p className="text-sm font-body text-night-sky/70 font-medium">
                ⚡ Competitive play • High-level competition • Maximum action
              </p>
            </div>

            <button 
              className={`w-full mt-6 py-3 px-6 rounded-lg font-headline font-bold text-lg transition-colors duration-300 ${
                selectedDivision === 'adult'
                  ? 'bg-teal-ocean text-beach-white'
                  : 'bg-teal-ocean/20 text-teal-ocean hover:bg-teal-ocean hover:text-beach-white'
              }`}
            >
              {selectedDivision === 'adult' ? '✓ Adult Selected' : 'Select Adult'}
            </button>
          </div>
        </div>
      </div>

      {selectedDivision && (
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-sand-yellow/20 px-4 py-2 rounded-full">
            <span className="text-2xl">🏐</span>
            <span className="font-body text-night-sky font-medium">
              Scroll down to register for {selectedDivision === 'junior' ? 'Junior' : 'Adult'} division!
            </span>
            <span className="text-2xl">⬇️</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentSelector;