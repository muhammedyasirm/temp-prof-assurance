import React from 'react';
import CardSection from '../ServiceCard/serviceCard';

const AnalyticsCardSection = () => {
  const cards = [
    {
      title: 'Chart Analysis 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Read More',
      defaultButtonColor: 'bg-transparent border-primary-orange text-primary-orange',
      hoverButtonColor: 'hover:bg-primary-orange hover:text-white',
      imgSrc: '/chart1.png', // Replace with the actual image path
      borderColor: 'hover:border-primary-orange',
    },
    {
      title: 'Chart Analysis 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Read More',
      defaultButtonColor: 'bg-transparent border-primary-green text-primary-green',
      hoverButtonColor: 'hover:bg-primary-green hover:text-white',
      imgSrc: '/chart2.png', // Replace with the actual image path
      borderColor: 'hover:border-primary-green',
    },
    {
      title: 'Chart Analysis 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Read More',
      defaultButtonColor: 'bg-transparent border-primary-blue text-primary-blue',
      hoverButtonColor: 'hover:bg-primary-blue hover:text-white',
      imgSrc: '/chart3.png', // Replace with the actual image path
      borderColor: 'hover:border-primary-blue',
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
      <div className="max-w-6xl md-down:max-w-full mx-auto">
        <h1 className='text-white flex justify-center text-5xl py-4 mt-3 font-barlow'>Some Title Here</h1>
        <div className="flex justify-center md-down:flex-col md-down:gap-2 space-x-4 md-down:space-x-0 md-down:items-center mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border-2 border-gray-600 cursor-pointer ${card.borderColor} p-4 w-1/3 md-down:w-[90%] flex flex-col items-center gap-5 bg-black bg-opacity-65 hover:shadow-lg transition duration-300`}
            >
              <img src={card.imgSrc} alt={card.title} className="w-full h-40 object-cover" />
              <div className="text-center text-white">
                <h3 className="text-xl mt-4 font-bold font-barlow">{card.title}</h3>
                <p className="mt-2 text-sm font-montserrat">{card.description}</p>
                <button className={`border-2 ${card.defaultButtonColor} ${card.hoverButtonColor} px-8 py-2 mt-4 rounded transition duration-300 font-montserrat`}>
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
