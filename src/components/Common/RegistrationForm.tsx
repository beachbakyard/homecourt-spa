import React, { useState } from 'react';
import { JuniorFormFields, TournamentConfig } from '../../types/tournament';

interface RegistrationFormProps {
  isJunior: boolean;
  config: TournamentConfig;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isJunior, config }) => {
  const [formData, setFormData] = useState<JuniorFormFields>({
    player1Name: '',
    player1Email: '',
    player1Phone: '',
    player2Name: '',
    player2Email: '',
    player2Phone: '',
    homeCourt: '',
    eventDate: '',
    waiver: false,
    parentGuardian: '',
    emergencyContact: '',
    medicalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Define form fields based on tournament type
  const juniorFields = [
    { key: 'player1Name', label: 'Player 1 Name', type: 'text', required: true },
    { key: 'player1Email', label: 'Player 1 Email', type: 'email', required: true },
    { key: 'player1Phone', label: 'Player 1 Phone', type: 'tel', required: true },
    { key: 'player2Name', label: 'Player 2 Name', type: 'text', required: true },
    { key: 'player2Email', label: 'Player 2 Email', type: 'email', required: true },
    { key: 'player2Phone', label: 'Player 2 Phone', type: 'tel', required: true },
    { key: 'parentGuardian', label: 'Parent/Guardian Contact', type: 'text', required: true },
    { key: 'emergencyContact', label: 'Emergency Contact', type: 'tel', required: true },
    { key: 'medicalInfo', label: 'Medical Information (if any)', type: 'textarea', required: false },
  ];

  const openFields = [
    { key: 'player1Name', label: 'Player 1 Name', type: 'text', required: true },
    { key: 'player1Email', label: 'Player 1 Email', type: 'email', required: true },
    { key: 'player1Phone', label: 'Player 1 Phone', type: 'tel', required: true },
    { key: 'player2Name', label: 'Player 2 Name', type: 'text', required: true },
    { key: 'player2Email', label: 'Player 2 Email', type: 'email', required: true },
    { key: 'player2Phone', label: 'Player 2 Phone', type: 'tel', required: true },
  ];

  // Use conditional logic as specified by user
  const formFields = isJunior ? juniorFields : openFields;

  const homeCourtOptions = [
    'Beach Bakyard',
    'Sandy Pickle',
    'MadSand Volleyball',
    'Sports Garden DFW',
    'The Strand',
    'TCU Beach Volleyball',
    'Game On Sports Complex',
    'Private Court'
  ];

  const eventDates = [
    'August 2, 2025',
    'August 9, 2025',
    'August 16, 2025',
    'August 23, 2025',
    'August 30, 2025'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    formFields.forEach(field => {
      if (field.required && !formData[field.key as keyof JuniorFormFields]) {
        newErrors[field.key] = `${field.label} is required`;
      }
    });

    if (!formData.homeCourt) {
      newErrors.homeCourt = 'Home Court is required';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event Date is required';
    }

    if (!formData.waiver) {
      newErrors.waiver = 'You must agree to the waiver';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.player1Email && !emailRegex.test(formData.player1Email)) {
      newErrors.player1Email = 'Invalid email format';
    }
    if (formData.player2Email && !emailRegex.test(formData.player2Email)) {
      newErrors.player2Email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Generate email
    const emailSubject = encodeURIComponent(
      `${isJunior ? 'Junior' : 'Open'} Home Court Series Registration - ${formData.eventDate}`
    );
    
    let emailBody = `${isJunior ? 'Junior' : 'Open'} Home Court Series Team Registration\n\n`;
    emailBody += `Event Date: ${formData.eventDate}\n`;
    emailBody += `Home Court: ${formData.homeCourt}\n\n`;
    
    emailBody += `Player 1: ${formData.player1Name}\n`;
    emailBody += `Email: ${formData.player1Email}\n`;
    emailBody += `Phone: ${formData.player1Phone}\n\n`;
    
    emailBody += `Player 2: ${formData.player2Name}\n`;
    emailBody += `Email: ${formData.player2Email}\n`;
    emailBody += `Phone: ${formData.player2Phone}\n\n`;

    if (isJunior) {
      emailBody += `Parent/Guardian: ${formData.parentGuardian}\n`;
      emailBody += `Emergency Contact: ${formData.emergencyContact}\n`;
      if (formData.medicalInfo) {
        emailBody += `Medical Info: ${formData.medicalInfo}\n`;
      }
      emailBody += '\n';
    }
    
    emailBody += `Entry Fee: $${config.entryFee}\n`;
    emailBody += `Payment Methods:\n${config.paymentMethods.join('\n- ')}\n\n`;
    emailBody += 'Liability waiver agreed.\n';

    const encodedBody = encodeURIComponent(emailBody);
    window.location.href = `mailto:${config.contactEmail}?subject=${emailSubject}&body=${encodedBody}`;
    
    alert(`Registration email prepared! Please send to complete your ${isJunior ? 'junior' : 'open'} tournament registration.`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-beach-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 m-4">
      <h2 className="text-2xl sm:text-3xl font-headline font-bold text-center mb-6 md:mb-8 text-night-sky">
        {isJunior ? 'Junior' : 'Open'} Tournament Registration
      </h2>

      <div className="mb-6 md:mb-8 p-4 md:p-6 bg-teal-ocean/10 rounded-lg">
        <h3 className="text-lg sm:text-xl font-headline font-semibold mb-3 md:mb-4 text-teal-ocean">Tournament Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm font-body">
          <div className="space-y-2">
            <p><strong className="text-night-sky">Format:</strong> <span className="text-night-sky/70">{config.format}</span></p>
            <p><strong className="text-night-sky">Entry Fee:</strong> <span className="text-sunset-orange font-semibold">${config.entryFee} per team</span></p>
            <p><strong className="text-night-sky">Guaranteed Rounds:</strong> <span className="text-night-sky/70">At least {config.guaranteedRounds}</span></p>
          </div>
          <div className="space-y-2">
            <p><strong className="text-night-sky">Location:</strong> <span className="text-night-sky/70">{config.location}</span></p>
            <p><strong className="text-night-sky">Contact:</strong> <span className="text-teal-ocean break-all">{config.contactEmail}</span></p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {formFields.map(field => (
            <div key={field.key} className="w-full">
              <label className="block text-sm font-body font-medium text-night-sky mb-2">
                {field.label}
                {field.required && <span className="text-sunset-orange ml-1">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.key}
                  value={formData[field.key as keyof JuniorFormFields] as string}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-ocean text-base font-body touch-manipulation ${
                    errors[field.key] ? 'border-sunset-orange' : 'border-night-sky/20'
                  }`}
                  rows={3}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.key}
                  value={formData[field.key as keyof JuniorFormFields] as string}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-ocean text-base font-body touch-manipulation min-h-[48px] ${
                    errors[field.key] ? 'border-sunset-orange' : 'border-night-sky/20'
                  }`}
                />
              )}
              {errors[field.key] && (
                <p className="text-sunset-orange text-sm mt-1 font-body">{errors[field.key]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-body font-medium text-night-sky mb-2">
              Home Court <span className="text-sunset-orange ml-1">*</span>
            </label>
            <select
              name="homeCourt"
              value={formData.homeCourt}
              onChange={handleInputChange}
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-ocean text-base font-body touch-manipulation min-h-[48px] ${
                errors.homeCourt ? 'border-sunset-orange' : 'border-night-sky/20'
              }`}
            >
              <option value="">Select Home Court</option>
              {homeCourtOptions.map(court => (
                <option key={court} value={court}>{court}</option>
              ))}
            </select>
            {errors.homeCourt && (
              <p className="text-sunset-orange text-sm mt-1 font-body">{errors.homeCourt}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-body font-medium text-night-sky mb-2">
              Event Date <span className="text-sunset-orange ml-1">*</span>
            </label>
            <select
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-ocean text-base font-body touch-manipulation min-h-[48px] ${
                errors.eventDate ? 'border-sunset-orange' : 'border-night-sky/20'
              }`}
            >
              <option value="">Select Event Date</option>
              {eventDates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
            {errors.eventDate && (
              <p className="text-sunset-orange text-sm mt-1 font-body">{errors.eventDate}</p>
            )}
          </div>
        </div>

        <div className="bg-sand-yellow/20 p-4 md:p-6 rounded-lg">
          <h4 className="font-headline font-semibold text-night-sky mb-3">Payment Information</h4>
          <div className="text-sm font-body text-night-sky/80 space-y-2">
            <p><strong className="text-night-sky">Entry Fee:</strong> <span className="text-sunset-orange font-semibold">${config.entryFee} per team</span></p>
            <p><strong className="text-night-sky">Payment Methods:</strong></p>
            <ul className="ml-4 space-y-1">
              {config.paymentMethods.map(method => (
                <li key={method}>• {method}</li>
              ))}
            </ul>
            <p className="font-semibold text-sunset-orange mt-3 p-2 bg-sunset-orange/10 rounded">
              ⚠️ Your spot is not reserved until payment is received by Wednesday
            </p>
          </div>
        </div>

        <div className="border border-teal-ocean/20 p-4 rounded-lg">
          <label className="flex items-start space-x-3 cursor-pointer touch-manipulation">
            <input
              type="checkbox"
              name="waiver"
              checked={formData.waiver}
              onChange={handleInputChange}
              className="w-5 h-5 mt-0.5 text-teal-ocean border-night-sky/20 rounded focus:ring-teal-ocean flex-shrink-0"
            />
            <span className="text-sm font-body text-night-sky leading-relaxed">
              I agree to the liability waiver and media release
              <span className="text-sunset-orange ml-1">*</span>
            </span>
          </label>
          {errors.waiver && (
            <p className="text-sunset-orange text-sm mt-2 font-body">{errors.waiver}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-ocean text-beach-white py-4 px-6 rounded-lg hover:bg-sunset-orange transition-colors duration-300 font-headline font-semibold text-lg touch-manipulation min-h-[48px] flex items-center justify-center"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;