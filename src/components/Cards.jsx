import cleanWaterAccess from '../assets/clean-water-access.jpeg';
import childEducation from '../assets/child-education.png';
import treePlanting from '../assets/tree-planting.jpeg';
import foodForAll from '../assets/food-for-all.jpg';


const causes = [
  {
    title: 'Clean Water Access',
    description: 'Help communities get access to clean and safe water.',
    image: cleanWaterAccess,
  },
  {
    title: 'Child Education',
    description: 'Support education for underprivileged children.',
    image: childEducation,
  },
  {
    title: 'Tree Planting',
    description: 'Contribute to reforestation efforts worldwide.',
    image: treePlanting,
  },
  {
    title: 'Food for All',
    description: 'Combat hunger by feeding the needy in our communities.',
    image: foodForAll,
  },
];

const Cards = () => (
  <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {causes.map((cause, index) => (
      <div key={index} className="bg-white rounded shadow p-4 text-center">
        <img src={cause.image} alt={cause.title} className="w-full h-40 object-cover rounded mb-4" />
        <h3 className="md:text-xl font-bold mb-2">{cause.title}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4">{cause.description}</p>
        <button className="bg-blue-600 text-white px-3 py-2 text-sm md:text-base md:px-4 rounded">Learn More</button>
      </div>
    ))}
  </section>
);

export default Cards;