import { mocks } from "./mock/index";
import camelize from "camelize";
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    } else {
      resolve(mock);
    }
  });
};

const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isCloseTemporarily: restaurant.business_status === "CLOSE_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

restaurantRequest()
  .then(restaurantTransform)
  .then((tranformedResponse) => {
    console.log(camelize(tranformedResponse));
  })
  .catch((err) => {
    console.log(err);
  });
