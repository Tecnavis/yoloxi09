import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css'; // Import the library's CSS
import '../components/sell.css';
import PhoneInput from 'react-phone-input-2'; // Import the PhoneInput component

function SellRegistrationForm() {
  // State variables to store form field values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here
    // For example, you can send the data to a server or perform validation.
    // You can access the form field values using the state variables (name, phone, etc.).
    alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nPincode: ${pincode}`);
  };

  return (
    <div className="registration-container">
      <div className="content">
        <h2>Seller Registration</h2>
        <p>Fill out the form to register as a seller.</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <div className="phone-group">
            <PhoneInput
              country={'in'} // Set the default country to India
              value={phone}
              onChange={setPhone}
              
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <div className="address-group">
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="pincode"
            placeholder="Enter your pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SellRegistrationForm;
