const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: localStorage.getItem('token') || null,
			isAuthenticated: !!localStorage.getItem('token')
		},
		actions: {
			// Use getActions to call a function within a fuction
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},


			login: async (email, password) => {
				const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password })
				});
				const data = await response.json();
				if (response.ok) {
					localStorage.setItem('token', data.token);
					setStore((prevState) => ({
						...prevState,
						isAuthenticated: true,
						token: data.token
					}));
				} else {
					console.log(data.msg);
				}
			},

			logout: () => {
				console.warn("entro a la funcion")
				localStorage.removeItem('token');
				setStore((prevState) => ({
					...prevState,
					isAuthenticated: false,
					token: null,
					message: null
				}));
			},

			getPrivateMessage: async () => {
				const token = store.token;
				const response = await fetch(`${process.env.BACKEND_URL}/api/private`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
				const data = await response.json();
				if (response.ok) {
					setStore((prevState) => ({
						...prevState,
						message: data.msg
					}));
				} else {
					console.log(data.msg);
				}
			},

			signup: async (email, password, nombre, apellido, telefono) => {
				const response = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password, nombre, apellido, telefono })
				});
				const data = await response.json();
				if (!response.ok) {
					console.log(data.msg);
				} else {
					// alert('Usuario registrado exitosamente');
				}
			},
		}
	};
};

export default getState;
