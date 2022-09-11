

const ServiceCard = ({ color, title, icon, subtitle, text, link }) => (
    <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className="mt-2 text-white text-lg">{title}</h1><br/>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p><br/>
            <p className="mt-2 text-white text-sm md:w-9/12">{text}</p><br/>
            <p className="mt-2 text-white text-sm md:w-9/12">{link}</p>

        </div>
    </div>
);

const Services = () => {
    return (
<div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
            Discover
                <br />
            and submit projects 
            </h1>
          </div>
        </div>
        <div src="https://www.ukrainedao.love/ukraine-dao" className='flex-1 flex flex-col justify-start items-center'>
          <ServiceCard
            title="Ukraine DAO"
            subtitle="ETH Address: 0x633b7218644b83D57d90e7299039ebAb19698e9C"
            text="The UkraineDAO - organized sale is the largest NFT-based crypto contribution to Ukraine’s war efforts to date. The idea to form the UkraineDao (UD) formed shortly after Putin started the war in Ukraine on Feb. 24. Nadya from Pussyriot, Trippy from Trippy Labs, and PleasrDAO members began an online chat, inviting other people with various backgrounds in tech, contract experience, activists, artists, influencers, editors, media …truly a cross- section of people with a united goal to help Ukrainians on the ground immediately."
            link="Ukrainedao.love"
           
        />
        <ServiceCard
            title="Helpers Social Development Foundation"
            subtitle="ETH Address: 0x74c6b9cc44394e84c0208c8d361ab47af40b817a"
            text="Helpers Social Development Foundation is a non-profit and apolitical organization duly registered in Nigeria under registration number: 131317, established in 2016 but officially registered with the Nigeria Corporate Affairs Commission on June 27, 2019. The foundation was established in a patriotic spirit, to contribute to the welfare of underprivileged children, youth and women, emphasizing their healthy development. Our primary focus is education while our secondary focus is economic empowerment and health awareness programs in Africa."
            link="helpersfoundation.org/"
        />
        </div>
</div>    
);
}

export default Services;