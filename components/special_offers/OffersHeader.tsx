
type OffersHeaderProps = {
  title: string;
}

const OffersHeader = ({title}: OffersHeaderProps) => {
  return <div className="text-center font-bold font-manrope leading-normal mb-6 md:mb-12">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
    <p className="text-sm md:text-base text-gray-500">GRAMI HOTEL</p>
</div>
}

export default OffersHeader;