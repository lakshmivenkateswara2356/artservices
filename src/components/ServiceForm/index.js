import React, { useState } from 'react';


// List of countries (this can be a more comprehensive list)
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Germany",
  "France",
  "China",
  "Japan",
  "Brazil",
  "South Africa",
  "Russia"
];

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    serviceType: 'Domestic', // Default value
    country: '', // Default value for country
    pickupLocation: '',
    dropoffLocation: '',
    contact: '',
    shippingDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="service-form">
     
      <form onSubmit={handleSubmit}>
        <label>
          Service Type:
          <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option value="Domestic">Domestic</option>
            <option value="International">International</option>
          </select>
        </label>
        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="" disabled>Select your country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label>
          Pick up location:
          <input className="boxcontents"
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
          />
        </label>
        <label>
          Drop up location:
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </label>
        <label>
          Shipping Date:
          <input
            type="date"
            name="shippingDate"
            value={formData.shippingDate}
            onChange={handleChange}
          />
        </label>
        <button className="submitbutt" type="submit">Get estimate</button>
      </form>
    </div>
  );
};

export default ServiceForm;
