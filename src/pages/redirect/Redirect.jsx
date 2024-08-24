import { useEffect, useState } from "react";
import { samplePromise, URLid } from "../../apis/auth";
import { useParams } from "react-router-dom";

const Redirect = () => {
  const { urlid } = useParams(); 
  // Correctly call useParams as a function
  const [loading, setLoading] = useState(true); 
  console.log(urlid)

  const getUrl = async () => {
    try {
      if (urlid) {
        const response = await URLid({urlid});// Send the id to  backend
         console.log(response)
        location.replace(response.longURL); // Use window.location.replace

      } else {
        alert("Please check the URL id");
        setLoading(false); // Set loading to false if URL id is not found
      }
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getUrl();
  }, []); // Empty dependency array to run once on mount

  if (loading) {
    return <div>...loading</div>; // Return a loading indicator
  }

  return <h1>Some Error Occurred</h1>; // Return an error message if not loading
};

export default Redirect;
