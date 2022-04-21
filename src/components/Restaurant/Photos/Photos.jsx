import React, { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../../redux/reducers/image/image.action";

// component
import PhotoCollection from "./PhotoCollection";

function Photos() {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/5/19584295/d2e9c0fa83e287d9b3a30450a076d7c8.jpg",
   "https://b.zmtcdn.com/data/dish_photos/ca4/6b71cd8a5d00439dd35ccc60f4dacca4.png",
    "https://b.zmtcdn.com/data/dish_photos/e61/82773f03986ce4aadca470840d52ae61.jpg",
    "https://b.zmtcdn.com/data/dish_photos/9e2/6490eb2abca1ef612d26241d743849e2.jpg",
    "https://b.zmtcdn.com/data/pictures/5/19584295/d2e9c0fa83e287d9b3a30450a076d7c8.jpg",
   "https://b.zmtcdn.com/data/dish_photos/ca4/6b71cd8a5d00439dd35ccc60f4dacca4.png",
    "https://b.zmtcdn.com/data/dish_photos/e61/82773f03986ce4aadca470840d52ae61.jpg",
    "https://b.zmtcdn.com/data/dish_photos/9e2/6490eb2abca1ef612d26241d743849e2.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState)
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        console.log(images);
        setPhotos(images);
      });
  }, [reduxState]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
}

export default Photos;
