"use client";

import React from "react";

interface Props {
  params: { profileid: string };
}

const page = ({ params }: Props) => {
  const { profileid } = params;

  console.log(profileid, "PROFILE ID GOT");
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default page;
