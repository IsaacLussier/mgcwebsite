"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ServicePage() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Handle initial load with hash
    handleHashChange();
    
    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const serviceEvents = [
    {
      title: "Community Food Drive",
      date: "March 15, 2025",
      description: "Annual food drive supporting local families in need",
      impact: "2,500+ meals provided"
    },
    {
      title: "Campus Cleanup Day",
      date: "April 22, 2025",
      description: "Earth Day campus beautification initiative",
      impact: "50+ volunteers participated"
    },
    {
      title: "Literacy Tutoring Program",
      date: "Ongoing",
      description: "Weekly tutoring sessions for local elementary students",
      impact: "25+ students supported"
    }
  ];

  const partnerships = [
    {
      name: "Kalamazoo Loaves & Fishes",
      type: "Food Security",
      description: "Supporting local food assistance programs"
    },
    {
      name: "WMU Community Outreach",
      type: "Education",
      description: "Campus-community engagement initiatives"
    },
    {
      name: "Boys & Girls Club of Greater Kalamazoo",
      type: "Youth Development",
      description: "Mentoring and youth leadership programs"
    }
  ];

  return (
    <main className="min-h-screen bg-[#D4AF37]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#D4AF37] to-[#1a1a1a] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Service & Community</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Making a positive impact through service, community engagement, and meaningful partnerships
          </p>
        </div>
      </section>

      {/* Navigation Menu for Page Sections */}
      <section className="bg-gray-800 py-4 sticky top-24 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex justify-center space-x-8">
            <a href="#impact" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Community Impact</a>
            <a href="#events" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Service Events</a>
            <a href="#partnerships" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Partnerships</a>
            <a href="#contact" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Contact Us</a>
          </nav>
        </div>
      </section>

      {/* Community Impact Section */}
      <section id="impact" className="py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Community Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Service Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                The Multicultural Greek Council is committed to serving our community through meaningful volunteer work, 
                charitable initiatives, and partnerships that create lasting positive change.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our member organizations collectively contribute thousands of service hours annually, 
                supporting causes ranging from education and hunger relief to environmental sustainability and youth development.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/other/mgc1.PNG"
                alt="Community Service"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#D4AF37] text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-lg">Service Hours</div>
              <div className="text-sm opacity-90">This Academic Year</div>
            </div>
            <div className="text-center p-6 bg-[#D4AF37] text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-lg">Community Partners</div>
              <div className="text-sm opacity-90">Active Relationships</div>
            </div>
            <div className="text-center p-6 bg-[#D4AF37] text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">$12,000</div>
              <div className="text-lg">Funds Raised</div>
              <div className="text-sm opacity-90">For Local Charities</div>
            </div>
            <div className="text-center p-6 bg-[#D4AF37] text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg">Lives Impacted</div>
              <div className="text-sm opacity-90">Through Our Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Events Section */}
      <section id="events" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Service Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-[#D4AF37] font-medium mb-3">{event.date}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="text-sm font-medium text-gray-600">Impact: </span>
                    <span className="text-sm text-gray-900">{event.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#D4AF37]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
              <p className="text-lg text-gray-700 mb-6">
                Join us in making a difference in our community. Volunteer opportunities are available for all students.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Learn How to Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Community Partnerships</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#D4AF37]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <span className="inline-block bg-[#D4AF37] text-white text-sm px-3 py-1 rounded-full mb-3">
                  {partner.type}
                </span>
                <p className="text-gray-700">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Partner With Us</h3>
            <p className="text-lg text-gray-700 text-center mb-6 max-w-3xl mx-auto">
              Are you a local organization interested in partnering with MGC? 
              We're always looking for new opportunities to serve our community.
            </p>
            <div className="text-center">
              <a 
                href="#contact" 
                className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Explore Partnership Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Service Coordinator</h4>
                  <p className="text-gray-700">servicecoordinator@wmumgc.org</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">General Inquiries</h4>
                  <p className="text-gray-700">info@wmumgc.org</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Partnership Opportunities</h4>
                  <p className="text-gray-700">partnerships@wmumgc.org</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Our Service Work</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">Instagram</a>
                  <a href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">Facebook</a>
                  <a href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">Twitter</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}