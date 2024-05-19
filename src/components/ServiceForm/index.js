import React, { useState } from 'react';
import './index.css';

function ServiceForm() {
  const [formData, setFormData] = useState({
    serviceType: 'domestic',
    pickup: '',
    drop: '',
    contact: '',
    date: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.pickup) newErrors.pickup = 'Pick up location is required';
    if (!formData.drop) newErrors.drop = 'Drop up location is required';
    if (!formData.contact) newErrors.contact = 'Contact is required';
    if (!formData.date) newErrors.date = 'Shipping date is required';
    if (formData.serviceType === 'international' && !formData.country) {
      newErrors.country = 'Country is required for international service';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted', formData);
      // Simulate API call
      alert('Estimate requested successfully');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <div className="locationarr">
          {formData.serviceType === 'domestic' ? (
            <select className="countryhooli"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Delhu">Delhi</option>
              <option value="Hydrabad">Hydrabad</option>
              <option value="Bangaluru">Bangaluru</option>
              <option value="Vishakapatnam">Vishakapatnam</option>
              <option value="goa">goa</option>

             
            </select>
          ) : (
            <select className="countryhooli"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="China">China</option>
              {/* Add more countries as needed */}
            </select>
          )}
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
    <div className="service-form">
      
    
      <div className="service-type-buttons">
        <button 
          className={`sticelem ${formData.serviceType === 'domestic' ? 'active' : ''}`} 
          onClick={() => setFormData({ ...formData, serviceType: 'domestic' })}
        >
          Domestic
        </button>
        <button
          className={`sticelem2 ${formData.serviceType === 'international' ? 'active' : ''}`}
          onClick={() => setFormData({ ...formData, serviceType: 'international' })}
        >
          International
        </button>
      </div>
      
      <form  onSubmit={handleSubmit}>
        
        <div>
          <label className="pickuplokk">Pick up location</label>
          <input className="pickokdnnd"
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
          />
          {errors.pickup && <span className="error">{errors.pickup}</span>}
        </div>
        <div>
          <label className="pickuplokk">Drop up location</label>
          <input className="pickokdnnd"
            type="text"
            name="drop"
            value={formData.drop}
            onChange={handleChange}
          />
          {errors.drop && <span className="error">{errors.drop}</span>}
        </div>
        <div>
          <label className="pickuplokk">Contact</label>
          <input className="pickokdnnd"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>
        <div>
          <label className="pickuplokk">Shipping Date</label>
          <input className="pickokdnnd"
            type="date"
            name="date"
            
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <button className="getestimatebuton" type="submit">Get estimate</button>
      </form>
    </div>
    </div>
  );
}

export default ServiceForm;
