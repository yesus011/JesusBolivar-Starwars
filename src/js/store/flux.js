const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlBase: "https://www.swapi.tech/api",
            people: [],
            vehicles: [],
            planets: [],
            favorites: []
        },
        actions: {
            getPeople: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.urlBase}/people`);
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ people: data.results });
                    }
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            },

            getVehicles: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.urlBase}/vehicles`);
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ vehicles: data.results });
                    }
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            getPlanets: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.urlBase}/planets`);
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ planets: data.results });
                    }
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            removeFavorite: (uid) => {
                setStore({
                    favorites: getStore().favorites.filter((favorite) => favorite.uid !== uid)
                });
            },
        }
    };
};

export default getState;
