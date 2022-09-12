

const ServiceCard = ({ color, link, title, subtitle, url }) => (
    <a href={link} className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className="mt-2 text-white text-lg">{title}</h1><br/>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
            <p className="mt-2 text-white text-sm md:w-9/12">{url}</p>
        </div>
    </a>
);

const Services = () => {
    return (
<div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className='text-white text-3xl sm:text-4xl py-2 text-gradient'>
            Discover the
                <br />
            latest projects 
            </h1>
          </div>
        </div>
        <div className='flex-2 flex flex-col justify-start items-center'>
          <ServiceCard
            link="https://www.ukrainedao.love/"
            title= "Ukraine DAO"
            subtitle="ETH Address: 0x633b7218644b83D57d90e7299039ebAb19698e9C"  
            url= "ukrainedao.love"
        />
        <ServiceCard
            link="https://www.helpersfoundation.org/"
            title="Helpers Social Development Foundation"
            subtitle="ETH Address: 0x74c6b9cc44394e84c0208c8d361ab47af40b817a"
            url= "helpersfoundation.org"
        />
        </div>
</div>    
);
}

export default Services;