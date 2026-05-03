import React from 'react';
import { FaCheckCircle, FaHeartbeat, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const QurbaniTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaHeartbeat className="text-4xl text-primary" />,
      title: "Physical Health",
      desc: "Ensure the animal is active, has bright eyes, and shows no signs of physical injury or limping."
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: "Age Verification",
      desc: "For a cow, it must be at least 2 years old, and for a goat, it should be at least 1 year old."
    },
    {
      id: 3,
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: "Natural Diet",
      desc: "Choose animals fed with natural grass and grains rather than artificial fattening chemicals."
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Shariah Compliance",
      desc: "The animal must be healthy and free from major defects such as blindness or broken horns."
    }
  ];

  return (
    <section id='qur' className="py-16 bg-base-200 ">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">
          Essential <span className="text-primary">Qurbani Tips</span>
        </h2>
        <p className="max-w-2xl mx-auto opacity-70 mb-12">
          Everything you need to know before selecting your animal to ensure a perfect and meaningful sacrifice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-base-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-base-300 group">
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;