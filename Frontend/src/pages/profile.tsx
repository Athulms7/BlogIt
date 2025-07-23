import { useEffect, useState } from "react";
import { Profilecomp } from "../components/profilecomp";
import axios from "axios";

interface UserData {
  firstname: string;
  lastname: string;
  username: string;
  password?: string;
  avatar?: string;
}

export function Profile() {
  const token = localStorage.getItem("token");
  const [userdata, setuserdata] = useState<UserData | null>(null);

  async function fetchUserProfile() {
    try {
      const resp = await axios.get("http://localhost:3001/api/v1/user/profile", {
        headers: { authorization: token },
      });
      setuserdata(resp.data.user);
    } catch (err) {
      console.error("Failed to fetch user profile", err);
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (!userdata) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  return <Profilecomp userdata={userdata} />;
}
