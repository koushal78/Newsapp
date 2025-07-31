import { Link } from "react-router-dom";

const NewsCard = ({data}) => {
    const { link, image_url, description } = data;
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      <img
        src={image_url}
        alt="News"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Breaking News Headline Goes Here
        </h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {description}
        </p>
        <div className="mt-4 text-right">
          <a href={link} target="_blank">
          
          <button className="text-sm text-blue-600 hover:underline">
            Read More →
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
