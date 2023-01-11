

const ServiceCard = ({ color, link, title, subtitle, url }) => (
    <a href={link} className='flex flex-row justify-start items-center rounded-xl bg-zinc-200 sm:w-2/3 p-3 m-2 my-4 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        </div>
        <div className='mr-8 flex flex-col flex-1 text-justify'>
            <h1 className="mt-2 text-lg">{title}</h1><br/>
            <p className="mb-2 text-sm ">{subtitle}</p>
            <p className="my-2 text-sm ">{url}</p>
        </div>
    </a>
);

const Services = () => {
    return (
<div className="flex flex-col md:flex-row w-full justify-center items-center py-10">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className='text-2xl sm:text-3xl py-2'>
            Technologies utilisées pour la signature
                <br />
            de vos smarts contracts
            </h1>
          </div>
        </div>
        <div className='flex-2 flex flex-col justify-start items-center'>
          <ServiceCard
            link="https://metamask.io/"
            title= "METAMASK"
            subtitle= {"MetaMask fournit le moyen le plus simple et le plus sécurisé de se connecter aux applications basées sur la blockchain. Vous avez toujours le contrôle lorsque vous interagissez sur le nouveau Web décentralisé."}
            url= "metamask.io"
        />
        <ServiceCard
            link="https://www.ledger.com/fr"
            title="LEDGER"
            subtitle="Ledger est une start-up française qui conçoit et commercialise des portefeuilles de cryptomonnaies physiques destinés aux particuliers et aux entreprises."
            url= "ledger.com"
        />
        <ServiceCard
            link="https://ethereum.org/en/"
            title="ETHEREUM"
            subtitle="Ethereum est la technologie gérée par la communauté qui alimente l'éther de crypto-monnaie (ETH) et des milliers d'applications décentralisées."
            url= "ethereum.org"
        />
        </div>
</div>
);
}

export default Services;
