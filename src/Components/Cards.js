import { Star } from "../utils/constant";

const Cards = (props) => {
  const { name, duration, thumbnail, level, skillsGained, rating, reviews } =
    props?.info || {};

  return (
    <div
      className="card rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
      style={{ maxWidth: "280px", margin: "10px auto" }}
    >
      <img
        className="card-img-top w-full h-40 object-cover object-center"
        src={thumbnail}
        alt="Course Image"
      />
      <div className="card-body px-4 py-3">
        <h2 className="card-title text-xl font-bold text-gray-800 mb-2">
          {name}
        </h2>
        <div className="card-text flex flex-wrap justify-between items-center mt-3 mb-2">
          <div className="skills">
            <p className="text-gray-500 text-sm">
              <span className="text-black font-semibold">
                Skills you'll gain:
              </span>{" "}
              {skillsGained}
            </p>
          </div>
          <div className="flex items-center mt-3">
            <p className="text-gray-600 mr-2 flex items-center font-semibold">
              <span className="text-yellow-500 mr-1">{Star}</span> {rating}
            </p>
            <p className="text-gray-600">({reviews} reviews)</p>
          </div>
          <div className="flex items-center mt-3 mb-2">
            <p className="text-gray-600 mr-2 text-sm">{level} *</p>
            <p className="text-gray-600 text-sm">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
