"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
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

  const boardMembers = [
    {
      name: "President Name",
      position: "President",
      organization: "Organization Letters",
      bio: "Brief description of president's background and vision for MGC.",
      image: "/placeholder-profile.jpg"
    },
    {
      name: "Vice President Name",
      position: "Vice President",
      organization: "Organization Letters", 
      bio: "Brief description of VP's role and contributions to the council.",
      image: "/placeholder-profile.jpg"
    },
    // Add more board members as needed
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About MGC</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Fostering unity, excellence, and cultural pride within the multicultural Greek community at Western Michigan University
          </p>
        </div>
      </section>

      {/* Navigation Menu for Page Sections */}
      <section className="bg-gray-50 py-4 sticky top-24 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex justify-center space-x-8">
            <a href="#mission" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Mission</a>
            <a href="#history" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">History</a>
            <a href="#values" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Values</a>
            <a href="#eboard" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Executive Board</a>
          </nav>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Multicultural Greek Council at Western Michigan University serves as the governing body for culturally-based Greek letter organizations, promoting unity, academic excellence, and community service while celebrating the rich diversity of our member organizations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We are committed to fostering leadership development, cultural awareness, and lifelong bonds among our members while contributing positively to the WMU campus and surrounding community.
              </p>
              <div className="bg-[#D4AF37] text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Purpose</h3>
                <ul className="space-y-2">
                  <li>• Promote academic excellence and leadership development</li>
                  <li>• Foster cultural pride and diversity awareness</li>
                  <li>• Strengthen community through service and philanthropy</li>
                  <li>• Support member organizations in their growth and success</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/other/mgc1.PNG"
                alt="MGC Community"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our History</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/other/mgc1.PNG"
                alt="MGC Historical Photo"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Founded on Tradition</h3>
              <p className="text-lg text-gray-700 mb-6">
                The Multicultural Greek Council was established at Western Michigan University to provide a unified voice for culturally-based Greek organizations. Our founding principles centered on creating an inclusive environment where diverse Greek traditions could flourish.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, MGC has grown to encompass multiple fraternities and sororities, each bringing their unique cultural heritage and values to our collective mission.
              </p>
              
              {/* Timeline */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="font-semibold text-gray-900">Founding Years</h4>
                  <p className="text-gray-600">Establishment of MGC at WMU</p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="font-semibold text-gray-900">Growth Period</h4>
                  <p className="text-gray-600">Expansion of member organizations</p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="font-semibold text-gray-900">Today</h4>
                  <p className="text-gray-600">Leading multicultural initiatives on campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">U</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unity</h3>
              <p className="text-gray-600">Building bridges across cultures and creating lasting bonds within our diverse community.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in academics, leadership, and personal development.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service</h3>
              <p className="text-gray-600">Giving back to our campus and local community through meaningful service initiatives.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diversity</h3>
              <p className="text-gray-600">Celebrating and embracing the rich cultural heritage that each organization brings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section id="eboard" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Executive Board</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our dedicated executive board members represent the diverse voices of our member organizations and work tirelessly to advance the mission of MGC.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.organization}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Board Section */}
          <div className="mt-16 text-center">
            <div className="bg-[#D4AF37] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Get in Touch with Our Board</h3>
              <p className="text-lg mb-6">
                Have questions about MGC or interested in getting involved? Our executive board is here to help.
              </p>
              <a 
                href="mailto:mgc@wmich.edu" 
                className="inline-block bg-white text-[#D4AF37] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}