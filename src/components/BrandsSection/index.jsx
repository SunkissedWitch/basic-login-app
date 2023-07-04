import { ceil, fill } from "lodash";
import Marquee from "react-fast-marquee";
import brandPh from '../../static/BrandPlaceholder.png'
import Image from "next/image";

const brands = fill(new Array(11), {
  title: 'Brand',
  logo: brandPh
}).map((brand, index) => (
  {
    ...brand,
    id: (index + 1)
  }
))

const halfLength = ceil(brands.length / 2)

const BrandCard = ({ brand }) => {
  return (
    <div className="rounded-xl w-[8.5rem] h-[4.5rem] sm:w-[12.5rem] sm:h-[8.5rem] bg-white flex justify-center items-center shadow-[0px_15px_20px_0px_rgba(0,_0,_0,_0.05)] mx-3 mb-6 sm:mb-12">
      {/* {`${brand.title} ${brand.id}`} */}
      <div className='flex w-full h-auto px-10 opacity-60'>
        <Image src={brand.logo} alt={`${brand.title} ${brand.id}`} />
      </div>
    </div>
  )
}

const BrandsSection = () => {
  return (
    <section className='bg-neutral-75 flex flex-col gap-10 pt-14 pb-8 sm:pt-16 sm:pb-4 lg:pt-32 lg:pb-20 w-full'>
      <header className="container mx-auto text-center px-[5.75%] sm:px-10 font-poppins text-xl sm:text-2xl lg:text-hero-tablet leading-[1.875rem] sm:leading-9">Companies Using Lorem Ipsum to Make Customer-Centered Decisions</header>
      <div className='sm:hidden'>
        <Marquee
          pauseOnHover
          pauseOnClick
          direction='left'
          loop={0}
        >
          {brands.slice(0, halfLength).map((brand) => (
            <BrandCard key={`first-${brand.title}-${brand.id}`} brand={brand}/>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          pauseOnClick
          direction='left'
          loop={0}
        >
          {brands.slice(halfLength).map((brand) => (
            <BrandCard key={`second-${brand.title}-${brand.id}`} brand={brand}/>
          ))}
        </Marquee>
      </div>
      <div className='hidden sm:flex'>
        <Marquee
          pauseOnHover
          pauseOnClick
          direction='left'
          loop={0}
        >
          {brands.map((brand) => (
            <BrandCard key={`main-${brand.title}-${brand.id}`} brand={brand}/>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default BrandsSection;
