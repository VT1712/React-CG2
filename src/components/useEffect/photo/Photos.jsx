/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const getPhotos = async (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  console.log("out side");
  const [nextPage, setNextPage] = useState(1);

  const [randomPhotos, setRandomPhotos] = useState([]);

  useEffect(() => {
    // side effect

    handleLoadMore();

    console.log("inside");
  }, []);

  const handleLoadMore = () => {
    getPhotos(nextPage).then((images) => {
      console.log(images);
      setRandomPhotos(images);
      setNextPage(nextPage + 1);
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((photo) => (
            <div
              key={photo.id}
              className="p-3 bg-white rounded-lg shadow-md h-[200px]"
            >
              <img
                src={photo.download_url}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="inline-block px-8 py-6 text-white bg-purple-400"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
