import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      author: "John Smith",
      jobTitle: "Job Title",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      author: "John Smith",
      jobTitle: "Job Title",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      author: "John Smith",
      jobTitle: "Job Title",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      author: "John Smith",
      jobTitle: "Job Title",
    },
  ];

  return (
    <div className="bg-[#141414] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">TESTIMONIALS</h2>
          <p className="text-lg mb-6">
            Don’t just take our word for it! We’ve worked with tons of incredible people on ventures across all industries. One thing they all have in common is that they love our service.
          </p>
          <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300 mb-8">
            View Cases
          </button>

          {/* Case Study Block */}
          <div className="bg-gray-800 p-52 text-center rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">CASE STUDY</h3>
          </div>
        </div>

        {/* Right Section: Testimonial Cards */}
        <div className="grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-center text-primary-orange text-4xl font-bold">“</div>
              <p className="text-base mb-6">
                {testimonial.quote}
              </p>
              <h4 className="text-lg text-green-400 font-semibold">{testimonial.author}</h4>
              <p className="text-sm text-blue-400">{testimonial.jobTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
