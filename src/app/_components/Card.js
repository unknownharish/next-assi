
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";


const Card = ({ pokemon }) => {
    return (
        <div className="border rounded-lg shadow-md hover:shadow-lg transition h-80 w-[300px]" >
            <div className='bg-white w-full h-40 m-auto'>

                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className=" h-40 w-7/12 object-contain m-auto"
                />

            </div>
            <div className=' h-36 flex flex-col justify-between p-4'>
                <h3 className=" mt-2 text-sm">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
                <Link href={`/pokemon/${pokemon.name}`}>
                    <p className="text-blue-500 text-sm mt-2 w-11/12 flex items-center ">{"Details"} <FaArrowRightLong size={15} className='ml-2' />
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Card;
