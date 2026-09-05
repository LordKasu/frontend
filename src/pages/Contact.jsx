import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const data = await response.json();

      if (data.success) {
        alert(data.reply); 
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
      
    } catch (error) {
      console.error('Error connecting to server:', error);
      alert('Could not connect to the KasuTours server.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-500">
            Have a question about our services or want a custom itinerary? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8 bg-blue-900 text-white p-8 rounded-xl shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-blue-800 pb-2">Office Location</h3>
              <p className="flex items-start text-lg">
                <span className="mr-3 text-2xl">📍</span> 
                <span>Eldoret, Uasin Gishu County<br />Kenya</span>
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-blue-800 pb-2">Contact Info</h3>
              <p className="flex items-center text-lg mb-3">
                <span className="mr-3 text-2xl">📞</span> +254 700 000 000
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-3 text-2xl">✉️</span> hello@kasutours.com
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-blue-800 pb-2">Business Hours</h3>
              <p className="flex items-center text-lg mb-3">
                <span className="mr-3 text-2xl">🕒</span> Mon - Fri: 8:00 AM - 6:00 PM
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-3 text-2xl">🕒</span> Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;