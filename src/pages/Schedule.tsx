import React, { useState } from 'react';

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  skillLevel: string;
  lessonType: string;
  preferredDate: string;
  preferredTime: string;
  duration: string;
  specialRequests: string;
}

const Schedule: React.FC = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    skillLevel: '',
    lessonType: '',
    preferredDate: '',
    preferredTime: '',
    duration: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const skillLevels = [
    'Beginner (New to beach volleyball)',
    'Intermediate (Some experience)',
    'Advanced (Competitive player)',
    'Elite (Tournament level)'
  ];

  const lessonTypes = [
    'Individual Lesson',
    'Partner Lesson (2 people)',
    'Small Group (3-4 people)',
    'Team Training (5+ people)'
  ];

  const durations = [
    '60 minutes - $80',
    '90 minutes - $110',
    '120 minutes - $140'
  ];

  const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.skillLevel) newErrors.skillLevel = 'Skill level is required';
    if (!formData.lessonType) newErrors.lessonType = 'Lesson type is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const emailSubject = encodeURIComponent('Private Beach Volleyball Lesson Request');
    const emailBody = encodeURIComponent(
      `Private Lesson Booking Request\n\n` +
      `Student Information:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Skill Level: ${formData.skillLevel}\n\n` +
      `Lesson Details:\n` +
      `Type: ${formData.lessonType}\n` +
      `Duration: ${formData.duration}\n` +
      `Preferred Date: ${formData.preferredDate}\n` +
      `Preferred Time: ${formData.preferredTime}\n\n` +
      `Special Requests:\n${formData.specialRequests || 'None'}\n\n` +
      `Please confirm availability and provide payment instructions.`
    );

    window.location.href = `mailto:homecourtsignup@beachbakyard.com?subject=${emailSubject}&body=${emailBody}`;
    alert('Lesson request email prepared! Please send to complete your booking request.');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Private Lessons</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your beach volleyball skills to the next level with personalized coaching 
            from experienced professionals. Available for all skill levels.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lesson Information */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Lesson Options</h2>
                <div className="space-y-4">
                  <div className="border-b border-blue-200 pb-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Individual Lesson</h3>
                    <p className="text-sm text-gray-600">One-on-one personalized coaching</p>
                    <p className="text-blue-600 font-medium">$80/hour</p>
                  </div>
                  <div className="border-b border-blue-200 pb-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Partner Lesson</h3>
                    <p className="text-sm text-gray-600">Perfect for duos wanting to improve together</p>
                    <p className="text-blue-600 font-medium">$110/90min</p>
                  </div>
                  <div className="border-b border-blue-200 pb-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Small Group</h3>
                    <p className="text-sm text-gray-600">3-4 people, great for friends or teammates</p>
                    <p className="text-blue-600 font-medium">$140/2hrs</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-2">Team Training</h3>
                    <p className="text-sm text-gray-600">5+ people, team-focused sessions</p>
                    <p className="text-blue-600 font-medium">Custom pricing</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">What You'll Learn</h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Proper serving techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Passing and setting fundamentals
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Attacking and blocking strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Court positioning and movement
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Game strategy and tactics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Mental preparation and focus
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-yellow-800 mb-4">Location & Contact</h2>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Beach Bakyard - 3001 Los Rios Blvd, Plano, TX
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    homecourtsignup@beachbakyard.com
                  </p>
                  <p className="text-yellow-700 font-medium mt-4">
                    Professional coaches available 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Book Your Lesson</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Skill Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="skillLevel"
                        value={formData.skillLevel}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.skillLevel ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Skill Level</option>
                        {skillLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                      {errors.skillLevel && <p className="text-red-500 text-sm mt-1">{errors.skillLevel}</p>}
                    </div>
                  </div>

                  {/* Lesson Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lesson Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="lessonType"
                        value={formData.lessonType}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.lessonType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Lesson Type</option>
                        {lessonTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.lessonType && <p className="text-red-500 text-sm mt-1">{errors.lessonType}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.duration ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Duration</option>
                        {durations.map(duration => (
                          <option key={duration} value={duration}>{duration}</option>
                        ))}
                      </select>
                      {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Goals
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your specific goals, areas you'd like to focus on, or any special requirements..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Important Information */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Important Information</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Lessons are subject to weather conditions</li>
                      <li>• 24-hour cancellation policy applies</li>
                      <li>• Payment is due at time of lesson</li>
                      <li>• Please arrive 10 minutes early for warm-up</li>
                    </ul>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
                  >
                    Request Lesson Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Coach Profiles Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Your Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-800">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium mb-3">Head Coach</p>
              <p className="text-sm text-gray-600">
                10+ years of professional beach volleyball experience. Former AVP tour player 
                specializing in advanced technique and competition preparation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-800">SA</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah Adams</h3>
              <p className="text-green-600 font-medium mb-3">Skills Coach</p>
              <p className="text-sm text-gray-600">
                Former college volleyball All-American with expertise in fundamentals 
                and junior development. Passionate about teaching proper technique.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-800">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mike Johnson</h3>
              <p className="text-yellow-600 font-medium mb-3">Strategy Coach</p>
              <p className="text-sm text-gray-600">
                Elite-level tactical coach focusing on game strategy, mental preparation, 
                and competitive mindset development for tournament players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;