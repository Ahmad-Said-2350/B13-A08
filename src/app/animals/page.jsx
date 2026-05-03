import AnimalsCard from "@/components/AnimalsCard";

const Animalspage = async() => {
    const res = await fetch("https://b13-a08-kappa.vercel.app/data.json");
  const featured = await res.json();


    return (
        <div>

{/* Animals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((animal) => (
           <AnimalsCard key={animal.id} animal={animal}></AnimalsCard>
          ))}
        </div>
            
        </div>
    );
};

export default Animalspage;