import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaWeightHanging } from 'react-icons/fa';

const AnimalsCard = ({animal}) => {
    return (
         <div 
              key={animal.id} 
              className="card bg-base-100 shadow-xl border border-base-200 group hover:border-primary/30 transition-all duration-300"
            >
              <figure className="relative h-60 overflow-hidden">
               <Image
               width={500}
               height={500}
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <div className="badge badge-primary font-bold text-xs p-3 shadow-lg">
                    {animal.category}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3">
                   <div className="badge badge-secondary font-bold text-xs p-3">
                    {animal.breed}
                  </div>
                </div>
              </figure>
              
              <div className="card-body p-6">
                <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
                  {animal.name}
                </h3>
                
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center text-sm opacity-80">
                    <span className="flex items-center gap-2">
                      <FaWeightHanging className="text-primary" /> {animal.weight} KG
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" /> {animal.location}
                    </span>
                  </div>
                </div>

                <div className="divider my-2 opacity-50"></div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs opacity-50 uppercase font-bold tracking-wider">Price</p>
                    <span className="text-2xl font-black text-primary">
                      ${animal.price.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    href={`/animals/${animal.id}`} 
                    className="btn btn-primary btn-sm md:btn-md text-white rounded-lg shadow-md hover:shadow-primary/40"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default AnimalsCard;