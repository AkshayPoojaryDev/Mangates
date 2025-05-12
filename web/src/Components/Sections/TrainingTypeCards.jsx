import React from "react";

const TrainingTypeCards = () => {
  const cards = [
    {
      title: "Classroom Training",
      desc: "Opportunity to interact with instructors face-to-face.",
      btn: "VIEW DATES / LOCATION",
    },
    {
      title: "Virtual Training",
      desc: "Effective face-to-face learning for busy professionals.",
      btn: "VIEW DATES / DETAILS",
    },
    {
      title: "Corporate Training",
      desc: "Customized training for your corporate needs.",
      btn: "ENQUIRE NOW",
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-lg p-6 border text-center"
        >
          <div className="text-3xl mb-3">🎓</div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm text-gray-600 my-3">{card.desc}</p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 text-sm font-medium">
            {card.btn}
          </button>
        </div>
      ))}
    </section>
  );
};

export default TrainingTypeCards;