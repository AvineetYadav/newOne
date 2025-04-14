const PictureCard = ({ data }) => (
    
  <div className="bg-[#1E293B] border border-gray-600 rounded-lg overflow-hidden text-sm">
    {console.log(data)}
    <img src={data[1]} alt="word-related" className="w-full h-32 object-cover" />
    <div className="p-2 text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
);

export default PictureCard;
