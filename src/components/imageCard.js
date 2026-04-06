const ImageCard = (props) => {
  const { imgData } = props;

  return (
    <div className="col-md-4 col-lg-3 mb-4 h-200 w-400">
      <div className="card shadow-sm ">
        <img src={imgData.urls.full} className="card-img-top" alt="Peacock" />
        <div className="card-body">
          <p className="card-text text-center">Image</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
