const breeds = [
  {
    name: "Sahiwal",
    type: "Cow",
    origin: "Pakistan / India",
    weight: "300–450 kg",
    trait: "Heat tolerant, high meat quality",
  },
  {
    name: "Holstein Friesian",
    type: "Cow",
    origin: "Netherlands",
    weight: "400–600 kg",
    trait: "Large size, premium meat",
  },
  {
    name: "Local Deshi",
    type: "Cow",
    origin: "Bangladesh",
    weight: "200–320 kg",
    trait: "Hardy, natural diet, affordable",
  },
  {
    name: "Black Bengal",
    type: "Goat",
    origin: "Bangladesh",
    weight: "25–45 kg",
    trait: "Tasty meat, easy to raise",
  },
  {
    name: "Jamunapari",
    type: "Goat",
    origin: "India",
    weight: "40–70 kg",
    trait: "Large build, beautiful structure",
  },
  {
    name: "Local White",
    type: "Goat",
    origin: "Bangladesh",
    weight: "25–40 kg",
    trait: "Suitable for small families",
  },
];

const TopBreeds = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4 md:px-12">

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-base-content">
            Top <span className="text-primary">Breeds</span>
          </h2>
          <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
          <p className="text-base-content/60 mt-4">
            Best livestock breeds for a meaningful Qurbani
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {breeds.map((breed) => (
            <div
              key={breed.name}
              className="bg-base-100 rounded-2xl p-6 border border-base-300 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-base-content">
                  {breed.name}
                </h3>
                <span className={`badge font-semibold text-xs px-3 py-2 ${
                  breed.type === "Cow"
                    ? "badge-primary text-white"
                    : "badge-secondary"
                }`}>
                  {breed.type}
                </span>
              </div>

              <div className="space-y-2 text-sm text-base-content/70">
                <div className="flex justify-between">
                  <span className="font-medium text-base-content/50 uppercase tracking-wide text-xs">Origin</span>
                  <span>{breed.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-base-content/50 uppercase tracking-wide text-xs">Weight</span>
                  <span>{breed.weight}</span>
                </div>
                <div className="divider my-1 opacity-40"></div>
                <p className="text-base-content/60 italic text-xs">{breed.trait}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopBreeds;