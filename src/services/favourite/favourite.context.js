import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (err) {
      console.log("Favourite-error saving", err);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (err) {
      console.log("Favourite-error loading", err);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    setFavourites(favourites.filter((r) => r.name !== restaurant.name));
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
