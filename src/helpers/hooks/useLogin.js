import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "@/contexts/AuthContext";
import { base_url } from "../api/api";
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { authUser, setAuthUser } = useAuthContext();

	const login = async (mobile_number, otp, inpuinputShow,setInputShow) => {
		const success = handleInputErrors(mobile_number, otp);
		if (!success) return;
		setLoading(true);
		try {
			let res = null;
			if (!inpuinputShow) {
				res = await fetch(`${base_url}/generate-otp`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ mobile_number}),
				});
				if(res){
					setInputShow(true)
				}
			} else {
				res = await fetch(`${base_url}/verify-otp-and-login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ mobile_number, otp }),
				});
			}
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("user", JSON.stringify(data));
			setAuthUser(data);
			console.log(data)
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
