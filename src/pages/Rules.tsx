import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rules: React.FC = () => {
  const [activeSection, setActiveSection] = useState('fivb');

  const sections = [
    { id: 'fivb', name: 'FIVB Rules', icon: '🌍' },
    { id: 'tournament', name: 'Tournament Format', icon: '🏆' },
    { id: 'conduct', name: 'Player Conduct', icon: '🤝' },
    { id: 'registration', name: 'Registration', icon: '📝' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tournament Rules
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-200">
            Comprehensive rules and guidelines for Home Court Series beach volleyball tournaments
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{section.icon}</span>
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* FIVB Rules */}
            {activeSection === 'fivb' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">FIVB Beach Volleyball Rules</h2>
                  <p className="text-lg text-gray-600">
                    Home Court Series tournaments follow official FIVB (Fédération Internationale de Volleyball) 
                    beach volleyball rules to ensure authentic competitive play.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Court Dimensions & Equipment</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Court size: 16m x 8m (52.5ft x 26.25ft) playing area</li>
                      <li>• Free zone: minimum 3m (9.84ft) on all sides</li>
                      <li>• Net height: 2.43m (7'11⅝") for men, 2.24m (7'4⅛") for women</li>
                      <li>• Ball: Mikasa VLS300 or equivalent FIVB-approved beach volleyball</li>
                      <li>• Sand depth: minimum 40cm (15.75") of fine, clean sand</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Basic Game Rules</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Teams: 2 players per team (no substitutions allowed)</li>
                      <li>• Scoring: Rally point system to 21 points (must win by 2)</li>
                      <li>• Sets: Best 2 out of 3 sets (3rd set played to 15 points)</li>
                      <li>• Contacts: Maximum 3 team contacts to return the ball</li>
                      <li>• Service: Underhand or overhand, from behind baseline</li>
                      <li>• Side changes: Every 7 points in sets to 21, every 5 points in sets to 15</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">Beach-Specific Rules</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Block counts as first team contact</li>
                      <li>• Open hand dinks/tips are illegal</li>
                      <li>• Hard-driven attacks may be received with fingers if ball is contacted cleanly</li>
                      <li>• Setting must be perpendicular to shoulders or travel to setter's partner</li>
                      <li>• Players may cross under the net if it doesn't interfere with opponent's play</li>
                      <li>• Double contact allowed on hard-driven attacks and first team contact</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Common Violations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Four hits or more by one team</li>
                      <li>• Player touches the ball twice consecutively (except on block and first contact)</li>
                      <li>• Ball touches the ground outside boundaries</li>
                      <li>• Net contact by player during active play</li>
                      <li>• Reaching over net to attack (unless ball has crossed the plane)</li>
                      <li>• Open hand attack or tip from above net height</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tournament Format */}
            {activeSection === 'tournament' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">King of the Court Tournament Format</h2>
                  <p className="text-lg text-gray-600">
                    Our signature format maximizes playing time while ensuring competitive balance and minimal downtime.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Tournament Structure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Court Assignment</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 5 teams assigned per court</li>
                          <li>• Teams ranked by skill level</li>
                          <li>• Balanced court placement</li>
                          <li>• Random initial seeding</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Match Duration</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 25-minute rounds</li>
                          <li>• Minimum 5 rounds guaranteed</li>
                          <li>• Total tournament: under 3 hours</li>
                          <li>• Continuous play format</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">King of the Court Mechanics</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">Winner Stays</h4>
                          <p className="text-gray-700">Winning team remains on court and chooses next opponent</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">Point Accumulation</h4>
                          <p className="text-gray-700">Teams earn points for wins and bonus points for consecutive wins</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">Court Rotation</h4>
                          <p className="text-gray-700">All teams get equal opportunity to play against each other</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-3">Scoring System</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-green-600">3 pts</div>
                            <div className="text-sm text-gray-600">Match Win</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">+1 pt</div>
                            <div className="text-sm text-gray-600">2nd Consecutive Win</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-600">+2 pts</div>
                            <div className="text-sm text-gray-600">3rd+ Consecutive Win</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-600">+5 pts</div>
                            <div className="text-sm text-gray-600">Court Champion</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">Match Format</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Matches played to 15 points (must win by 2, cap at 17)</li>
                      <li>• Rally scoring system (point awarded on every serve)</li>
                      <li>• Switch sides every 8 points</li>
                      <li>• 30-second timeout per team per match</li>
                      <li>• No technical timeouts (except for injury or equipment)</li>
                      <li>• Self-officiated matches with tournament supervision</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Playoff Structure</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Top 2 teams from each court advance to playoffs</li>
                      <li>• Single elimination bracket for championship</li>
                      <li>• Championship matches: best 2 out of 3 sets to 21</li>
                      <li>• Consolation bracket for 3rd place</li>
                      <li>• All playoffs officiated by certified referees</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Player Conduct */}
            {activeSection === 'conduct' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Player Conduct & Sportsmanship</h2>
                  <p className="text-lg text-gray-600">
                    Home Court Series maintains the highest standards of sportsmanship and fair play.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Expected Behavior</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Respect opponents, teammates, officials, and spectators</li>
                      <li>• Honor the integrity of the game through honest play</li>
                      <li>• Accept referee decisions gracefully</li>
                      <li>• Shake hands with opponents before and after matches</li>
                      <li>• Help with court maintenance and equipment setup</li>
                      <li>• Support fellow players and maintain positive energy</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Self-Officiating Standards</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Make honest calls on your own team's violations</li>
                      <li>• Communicate clearly with opponents on disputed calls</li>
                      <li>• Give opponents the benefit of the doubt on close calls</li>
                      <li>• Resolve disputes calmly and fairly</li>
                      <li>• Call for tournament director if agreement cannot be reached</li>
                      <li>• Maintain game flow and avoid excessive delays</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">Prohibited Conduct</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Verbal abuse, profanity, or inappropriate language</li>
                      <li>• Physical aggression or unsporting behavior</li>
                      <li>• Arguing excessively with opponents or officials</li>
                      <li>• Intentional rule violations or cheating</li>
                      <li>• Consumption of alcohol during tournament play</li>
                      <li>• Disruptive behavior toward other courts or spectators</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Disciplinary Actions</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg text-yellow-600 mb-2">Warning</h4>
                          <p className="text-gray-700">First offense or minor violation</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg text-orange-600 mb-2">Point Penalty</h4>
                          <p className="text-gray-700">Repeated minor violations</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg text-red-600 mb-2">Disqualification</h4>
                          <p className="text-gray-700">Serious violations or repeated offenses</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Appeal Process</h4>
                        <p className="text-gray-700">
                          Players may appeal disciplinary decisions to the tournament director. 
                          All appeals must be submitted within 15 minutes of the incident. 
                          The tournament director's decision is final.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Registration Rules */}
            {activeSection === 'registration' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration & Tournament Policies</h2>
                  <p className="text-lg text-gray-600">
                    Important information about registration, fees, cancellations, and tournament policies.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Registration Requirements</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-lg mb-2">Player Requirements</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Minimum age: 16 years (junior division available)</li>
                            <li>• Signed waiver required for all participants</li>
                            <li>• Current photo ID must be available</li>
                            <li>• Medical clearance if returning from injury</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Team Formation</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Teams must register together</li>
                            <li>• No gender restrictions (mixed teams allowed)</li>
                            <li>• Substitutions only allowed before tournament starts</li>
                            <li>• Partner changes require tournament director approval</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Entry Fees & Payment</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">Open Division</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Entry Fee:</span>
                              <span className="font-bold">$50 per team</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Registration Deadline:</span>
                              <span>48 hours before tournament</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">Junior Division</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Entry Fee:</span>
                              <span className="font-bold">$60 per team</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Registration Deadline:</span>
                              <span>48 hours before tournament</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Payment Options</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Online payment via credit card or PayPal</li>
                          <li>• Cash payments accepted at check-in (exact change preferred)</li>
                          <li>• Team checks accepted (must clear before tournament)</li>
                          <li>• Venmo and CashApp accepted for online registration</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">Cancellation & Refund Policy</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                          <h4 className="font-bold text-lg text-green-600 mb-2">48+ Hours</h4>
                          <p className="text-gray-700">100% refund</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <h4 className="font-bold text-lg text-yellow-600 mb-2">24-48 Hours</h4>
                          <p className="text-gray-700">50% refund</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <h4 className="font-bold text-lg text-red-600 mb-2">Under 24 Hours</h4>
                          <p className="text-gray-700">No refund</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Weather Policy</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Tournaments continue in light rain unless conditions become unsafe</li>
                          <li>• Lightning or severe weather results in immediate suspension</li>
                          <li>• Full refund if tournament cancelled due to weather</li>
                          <li>• Partial refund if tournament shortened due to weather (prorated)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Equipment & Facilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">What's Provided</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Professional sand courts</li>
                          <li>• Regulation net systems</li>
                          <li>• Official tournament volleyballs</li>
                          <li>• Scorecards and pencils</li>
                          <li>• First aid station</li>
                          <li>• Restroom facilities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Player Responsibilities</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Appropriate athletic attire</li>
                          <li>• Water and personal hydration</li>
                          <li>• Sunscreen and sun protection</li>
                          <li>• Towels for sand removal</li>
                          <li>• Any personal medical supplies</li>
                          <li>• Parking fees (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Reference</h2>
              <p className="text-lg text-gray-600">Essential information at a glance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-2">⏰</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Check-in Time</h3>
                <p className="text-gray-600">45 minutes before start</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-2">🏐</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Match Format</h3>
                <p className="text-gray-600">Sets to 15 points</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-2">👥</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Teams per Court</h3>
                <p className="text-gray-600">5 teams maximum</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-2">⏳</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Tournament Length</h3>
                <p className="text-gray-600">Under 3 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Now that you know the rules, register for our next tournament and experience 
            the best beach volleyball competition in Texas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/tournaments"
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Register for Tournament
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;