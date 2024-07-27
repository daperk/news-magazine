import newsPic from '../assets/news.png'

const NewsItem = ({ title, desc, url, urlToImage }) => {
    return (
      <div className="card news-card mb-4" style={{ maxWidth: "345px" }}>
        <img 
          src={urlToImage ? urlToImage : newsPic} 
          className="card-img-top news-img" 
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title.length > 50 ? title.slice(0, 47) + '...' : title}</h5>
          <p className="card-text">{desc ? (desc.length > 90 ? desc.slice(0, 87) + '...' : desc) : "Last News, happening now!"}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  