import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
export default function ValidateToken() {
  const [data, setData] = useState(false);

  useEffect(async () => {
    const sid = window.location.href.split("/").pop();

    console.log(sid);
    const url = `/api/activate/${sid}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      toast.success("Account Verification Successful!");
      setData(true);
    } else {
      toast.error("Account Verification Failed!");
    }
  }, []);

  return <>{data && <h1>Your Account is Verified now - Login Now</h1>}</>;
}
