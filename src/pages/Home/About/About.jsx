import person from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
   <img
          src={parts}
          className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-0 top-1/2"
        />
        </div>
        <div className='lg:w-1/2 p-4 space-y-3'>
            <h2 className='text-3xl font-bold text-orange-400'>About us</h2>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur suscipit explicabo recusandae eos reiciendis. Provident veniam ipsum porro quasi.
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur suscipit explicabo recusandae eos reiciendis. Provident veniam ipsum porro quasi.
          </p>
          <button className="btn btn-warning mt-4">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
