import { Button } from "@chakra-ui/button";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useShowToast from "../hooks/useShowToast";
import { FiLogOut } from "react-icons/fi";
import userAtom from "../atoms/userAtoms";

const LogoutButton = () => {
    const setUser = useSetRecoilState(userAtom);
    const showToast = useShowToast();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            console.log("Logout button clicked"); // Debugging line
            
            const res = await fetch("/api/users/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Fetch request completed"); // Debugging line

            const data = await res.json();
            
            console.log("Logout response data:", data); // Debugging line

            if (data.error) {
                showToast("Error", data.error, "error");
                return;
            }

            localStorage.removeItem("user-threads");
            setUser(null);
            console.log("User state after logout:", data);
            navigate('/auth'); 
        } catch (error) {
            showToast("Error", error.message, "error");
            console.error("Logout error:", error);
        }
    };
    
    return (
        <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"} onClick={handleLogout}>
            <FiLogOut size={20} />
        </Button>
    );
};

export default LogoutButton;
