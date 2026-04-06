import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const Body = () => {
  const [imgList, setImgList] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, [searchData]);

  const fetchData = async () => {
    const data = await fetch(
      `https://unsplash.com/napi/search/photos?page=1&per_page=20&query=${searchData}`
    );
    const json = await data.json();
    console.log(json);
    setImgList(json?.results || []);
  };

  return (
    <div>
      <div className="body">
        <div className="header">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"  
                  onChange={(data) => setSearchData(data.target.value)}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {imgList.map((list) => (
            <ImageCard key={list.id} imgData={list} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
