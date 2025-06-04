"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function EventsPage() {
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

  const upcomingEvents = [
    {
      title: "MGC Spring Showcase",
      date: "March 8, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Bernhard Center Ballroom",
      description: "Annual showcase celebrating the achievements and cultures of our member organizations",
      featured: true
    },
    {
      title: "Greek Week Kickoff",
      date: "March 22, 2025", 
      time: "6:00 PM - 8:00 PM",
      location: "Miller Auditorium",
      description: "Opening ceremony for Greek Week activities across all councils"
    },
    {
      title: "Cultural Heritage Night",
      date: "April 5, 2025",
      time: "7:30 PM - 9:30 PM", 
      location: "Student Recreation Center",
      description: "Celebrating the diverse cultural backgrounds of our Greek organizations"
    }
  ];

  const fallEvents = [
    {
      title: "Welcome Back Mixer",
      date: "September 2024",
      description: "Annual welcome event for new and returning members",
      image: "/other/mgc1.PNG"
    },
    {
      title: "Homecoming Step Show",
      date: "October 2024",
      description: "Traditional step competition featuring all MGC organizations",
      image: "/other/mgc1.PNG"
    },
    {
      title: "Unity Gala",
      date: "November 2024", 
      description: "Formal celebration of multicultural Greek excellence",
      image: "/other/mgc1.PNG"
    }
  ];

  const springEvents = [
    {
      title: "New Member Showcase",
      date: "February 2025",
      description: "Introducing new members and their talents to the community",
      image: "/other/mgc1.PNG"
    },
    {
      title: "Community Service Day",
      date: "March 2025",
      description: "Council-wide service project benefiting local organizations",
      image: "/other/mgc1.PNG"
    },
    {
      title: "End of Year Banquet",
      date: "April 2025",
      description: "Celebrating achievements and recognizing outstanding members",
      image: "/other/mgc1.PNG"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">MGC Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Celebrating culture, unity, and excellence through memorable events and traditions
          </p>
        </div>
      </section>

      {/* Navigation Menu for Page Sections */}
      <section className="bg-gray-50 py-4 sticky top-24 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex justify-center space-x-8">
            <a href="#upcoming" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Upcoming Events</a>
            <a href="#fall" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Fall Events</a>
            <a href="#spring" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Spring Events</a>
            <a href="/calendar" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors">Calendar</a>
          </nav>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${event.featured ? 'border-4 border-[#D4AF37]' : 'border border-gray-200'}`}>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      {event.featured && (
                        <span className="inline-block bg-[#D4AF37] text-white text-sm px-3 py-1 rounded-full mb-3">
                          Featured Event
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="space-y-2 text-gray-600">
                        <p><span className="font-semibold">Date:</span> {event.date}</p>
                        <p><span className="font-semibold">Time:</span> {event.time}</p>
                        <p><span className="font-semibold">Location:</span> {event.location}</p>
                      </div>
                      <p className="text-gray-700 mt-4">{event.description}</p>
                    </div>
                    <div className="md:ml-8">
                      <button className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RSVP Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-[#D4AF37] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Stay Updated on Our Events</h3>
              <p className="text-lg mb-6">
                Follow us on social media and subscribe to our newsletter to never miss an MGC event!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#" 
                  className="inline-block bg-white text-[#D4AF37] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Follow on Instagram
                </a>
                <a 
                  href="/calendar" 
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#D4AF37] transition-colors"
                >
                  View Full Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fall Events Section */}
      <section id="fall" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Fall Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fallEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fall Semester Highlights</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our fall events focus on welcoming new members, celebrating homecoming traditions, 
              and building community connections as we kick off the academic year together.
            </p>
          </div>
        </div>
      </section>

      {/* Spring Events Section */}
      <section id="spring" className="py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Spring Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {springEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Spring Semester Highlights</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Spring events celebrate growth, service, and achievement as we showcase new members, 
              give back to our community, and recognize the accomplishments of our organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Event Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Policies & Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Guest Policy</h4>
                  <p className="text-gray-700">Most events welcome guests. Check individual event details for specific requirements.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dress Code</h4>
                  <p className="text-gray-700">Dress codes vary by event. Business casual to formal attire is typical for major events.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">RSVP Requirements</h4>
                  <p className="text-gray-700">Some events require advance registration. Follow our social media for updates.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Involved</h3>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 mb-3">Event Planning Committee</h4>
                <p className="text-gray-700 mb-4">
                  Interested in helping plan MGC events? Join our event planning committee and make a difference!
                </p>
                <button className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}