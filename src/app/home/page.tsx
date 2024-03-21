import Hero from "./hero";
import { HoldingLeafIcon, PlaceholderIcon, PlasticWasteIcon, RecycleIcon, ThreeLeavesIcon, ZeroPercentCupIcon } from "../components/icons";
import Image from "next/image";

const Home = () => {
    const services = [
        {
            icon: <PlaceholderIcon/>,
            label: 'We don`t have any products to show right now.',
        },
        {
            icon: <PlaceholderIcon/>,
            label: 'We don`t have any products to show right now.',
        },
        {
            icon: <PlaceholderIcon/>,
            label: 'We don`t have any products to show right now.',
        },
        {
            icon: <PlaceholderIcon/>,
            label: 'We don`t have any products to show right now.',
        },
    ]
    const categories = [
        "Kitchen",
        "Bath",
        "On the Go",
    ]
    const values = [
        {
            icon: <PlasticWasteIcon/>,
            label: 'Our Mission',
        },
        {
            icon: <ZeroPercentCupIcon/>,
            label: 'Environmental Sustainability',
        },
        {
            icon: <ThreeLeavesIcon/>,
            label: 'Waste Reduction',
        },
        {
            icon: <RecycleIcon/>,
            label: 'Eco-Friendly Practices',
        },
        {
            icon: <HoldingLeafIcon/>,
            label: 'Organic Waste Repurposing',
        }
    ]
    
    return (
        <div>
            <Hero/>
            <section id="service">
                <div className='m-8'>
                    <h2 className='text-center my-4'>
                        Our Services
                    </h2>
                    <div className='flex gap-4 justify-center px-10'>
                        {services.map( (service, idx) => (
                            <div key={`service-${idx}`} className="flex flex-col items-center text-center bg-neutral-100 px-4 py-10">
                                {service.icon}
                                <span>{service.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="category">
                <div className='py-10 px-4 lg:px-20 grid grid-cols-2 text-stone-800 gap-4' style={
                    { 
                        backgroundColor: 'rgb(196, 193, 151)',
                    }
                }>
                    <div className="flex flex-col justify-start pt-10">
                        <span className="text-5xl font-bold">Our Categories</span>
                        <span className="my-8 text-xl">Organic Waste Recycling</span>
                        <a href="#" className="w-fit rounded-full bg-stone-800 px-4 py-2 mt-8 text-md font-semibold leading-6 text-slate-200 ">
                            Learn more
                        </a>
                    </div>
                    <div className='flex gap-4 justify-self-end'>
                        <Image alt="category" className="img my-2 mx-3 rounded-3xl" src="categories.jpg"></Image>
                    </div>
                </div>
            </section>
            <section id="collection">
                <div className='p-4 lg:px-12 bg-gray-100'>
                    <h2 className='text-center my-4 text-3xl'>
                        Shop Collections
                    </h2>
                    <div className='flex gap-10 justify-center items-center mb-20'>
                        {categories.map((category, idx) => (
                            <div key={`category-${idx}`} className="category-item-container w-1/3 rounded-xl overflow-hidden z-20 relative">
                                <div className="w-full "
                                    // style={{backgroundImage:`url(/${category.toLowerCase()}.jpg)`}}
                                >
                                    <Image alt="category icon" className="category-item-img absolute w-full h-full z-10" src={`${category.toLowerCase()}.jpg`}/>
                                </div>
                                <div className="flex flex-col text-center justify-center align-middle p-4 relative h-full z-20 bg-black bg-opacity-30">
                                    <h4 className="text-2xl text-yellow-200">{category}</h4>
                                    <span className="text-white">Shop Collection</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="about">
                <div className='my-4 pt-4' style={{backgroundColor: 'rgb(221,221,204)'}}>
                    <h2 className='text-center my-4 text-6xl'>
                        About NEcoenzyme
                    </h2>
                    <div className='flex flex-col gap-10 justify-center items-center mb-20'>
                        <p className="text-center text-xl mx-20">
                            We believe in ethical and smart shopping. All of our products are carefully selected to ensure they align with our core values.
                        </p>
                        <div className="flex gap-4 my-20 justify-center">
                            {values.map( (value, idx) => (
                                <div key={`value-${idx}`} className="flex flex-col gap-4 items-center text-center">
                                    {value.icon}
                                    <span>{value.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-sm mx-20">
                            At NEcoenzyme, we believe in a world where organic waste is repurposed to promote environmental sustainability. Our team is dedicated to creating a greener tomorrow by connecting traditional fruit sellers, eco enzyme makers, and farmers. Our mission is to reduce waste and promote eco-friendly practices in Indonesia and beyond.
                        </p>
                        <a href="#" className="w-fit rounded-full bg-stone-800 px-4 py-2 my-8 text-md font-semibold leading-6 text-slate-200 ">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home