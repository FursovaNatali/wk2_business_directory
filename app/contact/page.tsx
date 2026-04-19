// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cell: '',
    comment: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call - replace with your actual endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', cell: '', comment: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section - matching directory style */}
      <header className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Contact Us
          </h1>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← Back to Directory
          </Link>
        </div>
        <p className="text-lg text-gray-600">
          Get in touch with our team. We&apos;d love to hear from you!
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form - Main Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              {/* Cell Phone Field */}
              <div>
                <label 
                  htmlFor="cell" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Cell Phone *
                </label>
                <input
                  type="tel"
                  id="cell"
                  name="cell"
                  value={formData.cell}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                  placeholder="(925) 555-0123"
                />
              </div>

              {/* Comment Field */}
              <div>
                <label 
                  htmlFor="comment" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Comment / Message *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button & Status */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 font-medium text-center">
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600 font-medium text-center">
                    ✗ Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar - Contact Info & Hours */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-3xl">📬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Business Card Directory
              </h3>
              <p className="text-gray-600 text-sm">
                Connecting local professionals and services.
              </p>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">📞 Phone</h4>
                <p className="text-gray-600 text-sm">(925) 555-0000</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">✉️ Email</h4>
                <p className="text-gray-600 text-sm">support@bizdirectory.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">🕒 Hours</h4>
                <p className="text-gray-600 text-sm">Mon-Fri: 9am - 6pm</p>
                <p className="text-gray-600 text-sm">Sat: 10am - 2pm</p>
              </div>
            </div>

            {/* Category Tag - matching directory style */}
            <div className="pt-6 mt-4 border-t border-gray-200">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-800">
                Customer Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}