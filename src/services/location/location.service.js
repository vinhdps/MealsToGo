import camelize from "camelize";
import { locations } from "./location.mock";

export const LocationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const LocationTransform = ({ results }) => {
  const { geometry = {} } = camelize(results)[0];
  const lat = geometry.location.lat;
  const lng = geometry.location.lng;
  const northeastLat = geometry.viewport.northeast.lat;
  const southwestLat = geometry.viewport.southwest.lat;
  return { lat, lng, northeastLat, southwestLat };
};
