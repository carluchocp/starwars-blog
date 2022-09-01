const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//endpoints
			urlBase: "https://swapi.dev/api/",
			urlCharacter: "people/",
			urlPlanets: "planets/",
			//data
			characters: [],
			planets: [],
			//favoritos
			favorites: [],
		},
		actions: {
			getCharacters: async() => {
				const store = getStore()
				try {
					const response = await fetch(`${store.urlBase}${store.urlCharacter}`)
					if(response.ok){
						const data = await response.json()
						setStore({
							...store, 
							characters: data.results
						})
					}
				}catch(error) {
					console.log("getCharacater", error)
				}
			},

			getPlanets: async() => {
				const store = getStore()
				try {
					const response = await fetch(`${store.urlBase}${store.urlPlanets}`)
					if(response.ok){
						const data = await response.json()
						setStore({
							...store,
							planets: data.results
						})
					}
				}catch(error) {
					console.log("getPlanets", error)
				}
			},        
			//en este caso el id se le pasa created de la api
			addFavorites: (item) => {
				const store = getStore()
				const exist = store.favorites.find((favorite) => favorite.created == item.created)
				if(!exist){
					setStore({
						...store,
						favorites: [...store.favorites, item] 
					})
				}else{
					const updatedFavorites = store.favorites.filter((favorite) => favorite.created != item.created) 
					setStore({
						...store,
						favorites: updatedFavorites
					})
				}
			}
		}
	};
};

export default getState;
