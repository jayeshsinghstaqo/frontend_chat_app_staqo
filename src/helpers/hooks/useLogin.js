import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "@/contexts/AuthContext";
import { base_url } from "../api/api";
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (mobile_number, otp) => {
		const success = handleInputErrors(mobile_number, otp);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch(`${base_url}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ mobile_number, otp }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(mobile_number, otp) {
	if (!mobile_number || !otp) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
