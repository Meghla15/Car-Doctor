import person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg'

const AboutUsHome = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2  relative'>
    <img src={person} className="w-[60%]  rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute top-1/2 left-1/4 rounded-lg border-[8px] border-solid border-white shadow-2xl" />
    </div>
    <div className='lg: w-1/2'>
        <p className='text-orange-600 font-bold'>About Us</p>
      <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="pt-6 pr-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p className="pt-3 pr-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-orange-600 text-white mt-3">Get More Info </button>
    </div>
  </div>
</div>
    );
};

export default AboutUsHome;