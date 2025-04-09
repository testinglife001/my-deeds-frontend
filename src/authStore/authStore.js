import { create } from "zustand";
import axios from "axios";

// const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth";
const API__URL = "http://localhost:5000/api/auth";
const API_URL = "https://my-deeds-backend.onrender.com/api/auth";
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

    verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},

	login: async (email,password) => {
		set({isLoading:true, error:null});
		try {
			const response = await axios.post(`${API_URL}/signin`, { email,password });
			set({
				isAuthenticated:true,
				user: response.data.user,
				error: null,
				isLoading: false
			});
		} catch (error) {
			set({error:error.response?.data?.message || "Error logging in", isLoading:false});
			throw error;
		}
	},

	logout: async () => {
		set({isLoading:true, error:null});
		try {
			const response = await axios.post(`${API_URL}/signout`);
			set({
				isAuthenticated: false,
				user: null,
				error: null,
				isLoading: false
			});
		} catch (error) {
			set({isLoading:false, error:"Error logginf out"});
			throw error;
		}
	},

	checkAuth: async () => {
		set({isCheckingAuth:true, error:null})
		try {
			const response = await axios.post(`${API_URL}/check-auth`);
			set({
				user:response.data.user,
				isAuthenticated: true,
				isCheckingAuth: false
			})
		} catch (error) {
			set({
				error: null,
				isAuthenticated: false,
				isCheckingAuth: false
			})
		}
	},

	forgotPassword: async (email) => {
		set({isLoading:true, error:null, message:null});
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({
				message:response.data.message,
				isLoading: false,
			});
		} catch (error) {
			set({
				error:error.response?.data?.message || "Error sending reset passwordemail", 
				isLoading:false
			});
			throw error;
		}
	},

	resetPassword: async (token,password) => {
		set({isLoading:true, error:null});
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({
				message:response.data.message,
				isLoading: false,
			});
		} catch (error) {
			set({
				error:error.response?.data?.message || "Error logging in", 
				isLoading:false
			});
			throw error;
		}
	},

	adminLogin: async (email,password) => {
		set({isLoading:true, error:null});
		try {
			const response = await axios.post(`${API_URL}/admin-login`, { email,password });
			set({
				isAuthenticated:true,
				user: response.data.user,
				error: null,
				isLoading: false
			});
		} catch (error) {
			set({error:error.response?.data?.message || "Error logging in", isLoading:false});
			throw error;
		}
	},

}))
	

