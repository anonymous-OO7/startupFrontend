import * as React from "react";
import useApi from "@/hooks/useApi";
import { GetAllUserData } from "@/apis";
import { UserProfile } from "@/types";
export default function UpdateProfilePage() {
  const [userdata, setUserdata] = React.useState<UserProfile>(); // eslint-disable-line

  const [loading, setLoading] = React.useState(false); // eslint-disable-line

  const { makeApiCall } = useApi();

  React.useEffect(() => {
    setLoading(true);
    makeApiCall(GetAllUserData())
      .then((response) => {
        if (response !== undefined) {
          console.log("ALL USER DATA FETCHED inside update", response);
          setUserdata(response);
        }
      })
      .catch((error) => console.error(error, "error in fetching user"))
      .finally(() => {
        setLoading(false);
      });
  }, [makeApiCall]);

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Profile
      </h2>{" "}
    </>
  );
}
