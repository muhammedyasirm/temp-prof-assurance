import React from 'react';
import CardSection from '../ServiceCard/serviceCard';

const AnalyticsCardSection = () => {
  const cards = [
    {
      title: 'Chart Analysis 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Read More',
      bgColor: 'bg-red-500',
      buttonColor: 'bg-red-500',
      imgSrc: '/chart1.png', // Replace with the actual image path
    },
    {
      title: 'Chart Analysis 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Read More',
      bgColor: 'bg-green-500',
      buttonColor: 'bg-green-500',
      imgSrc: '/chart2.png', // Replace with the actual image path
    },
    {
      title: 'Chart Analysis 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Read More',
      bgColor: 'bg-blue-500',
      buttonColor: 'bg-blue-500',
      imgSrc: '/chart3.png', // Replace with the actual image path
    },
  ];

  return (
    <div className="relative w-full bg-black py-10"
      style={{
        backgroundImage: `url('/analytics-bg.png')`, // Adding the background image
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
      }}
    >
      {/* CardSection Positioned on Top */}
      <div className="left-0 w-full flex justify-center items-center z-20">
        <CardSection /> {/* Include the CardSection component */}
      </div>

      {/* Chart Cards Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-4 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border-2 p-4 w-1/3 flex flex-col items-center gap-5 bg-black bg-opacity-65 hover:shadow-lg transition duration-300`}
            >
              <img src={card.imgSrc} alt={card.title} className="w-full h-40 object-cover" />
              <div className="text-center text-white">
                <h3 className="text-xl mt-4 font-bold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.description}</p>
                <button className={`${card.buttonColor} text-white px-4 py-2 mt-4 rounded`}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCardSection;
