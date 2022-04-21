import React, { useState, useEffect } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getFoodList } from "../../redux/reducers/food/food.action";

// components
import FloatMenuBtn from "./Order-Online/FloatMenuBtn";
import FoodList from "./Order-Online/FoodList";
import MenuListContainer from "./Order-Online/MenuListContainer";

function OrderOnline() {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState.menu)).then((data) => {
        setMenu(data.payload.menus.menus);
      });
  }, [reduxState]);

  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList key={index} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;

// //react query
// works as redux what redux does is if some page need to be accessed globally it gives permission securly
// the prblm with redux is if the data is already in database once the user is requested for it and he is requesting for the same data within a short period of time its need to be cancelled becoz there us no need of requesting again but this feature is not implemented in redux 
//so we use react qurey so need not request again nd again it cache the data in browser with encryption no one can decrypt it . and it is accessible




























  //   {
  //     name: "Recommended",
  //     items:[
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Manchurian",
  //         image:"https://b.zmtcdn.com/data/dish_photos/9e0/add3d92c62cba8cf739db5013e41c9e0.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "90",
  //       },
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Cheese Burger",
  //         image:"https://b.zmtcdn.com/data/dish_photos/e19/d5871acba2bee863280600e6c8726e19.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "70",
  //       },
        
  //     ],
  //   },
  //   {
  //     name: "Momos",
  //     items:[
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Manchurian",
  //         image:"https://b.zmtcdn.com/data/dish_photos/9e0/add3d92c62cba8cf739db5013e41c9e0.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "90",
  //       },
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Cheese Burger",
  //         image:"https://b.zmtcdn.com/data/dish_photos/e19/d5871acba2bee863280600e6c8726e19.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "70",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Chinese Starters",
  //     items:[
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Manchurian",
  //         image:"https://b.zmtcdn.com/data/dish_photos/9e0/add3d92c62cba8cf739db5013e41c9e0.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "90",
  //       },
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Cheese Burger",
  //         image:"https://b.zmtcdn.com/data/dish_photos/e19/d5871acba2bee863280600e6c8726e19.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "70",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Breads",
  //     items:[
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Manchurian",
  //         image:"https://b.zmtcdn.com/data/dish_photos/9e0/add3d92c62cba8cf739db5013e41c9e0.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "90",
  //       },
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Cheese Burger",
  //         image:"https://b.zmtcdn.com/data/dish_photos/e19/d5871acba2bee863280600e6c8726e19.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "70",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Rice and Biryani",
  //     items:[
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Manchurian",
  //         image:"https://b.zmtcdn.com/data/dish_photos/9e0/add3d92c62cba8cf739db5013e41c9e0.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "90",
  //       },
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Cheese Burger",
  //         image:"https://b.zmtcdn.com/data/dish_photos/e19/d5871acba2bee863280600e6c8726e19.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "70",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Rolls",
  //     items:[
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Manchurian",
  //         image:"https://b.zmtcdn.com/data/dish_photos/9e0/add3d92c62cba8cf739db5013e41c9e0.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "90",
  //       },
  //       {
  //         name:"Chicken Shawarma",
  //         image:"https://b.zmtcdn.com/data/dish_photos/b6b/75f87d2ed5f41f7913db90737eccab6b.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "100",
  //       },
  //       {
  //         name:"Chicken Cheese Burger",
  //         image:"https://b.zmtcdn.com/data/dish_photos/e19/d5871acba2bee863280600e6c8726e19.jpg",
  //         isAddedToCart:"false",
  //         rating:4,
  //         description:"Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]",
  //         price: "70",
  //       },
  //     ],
  //   },