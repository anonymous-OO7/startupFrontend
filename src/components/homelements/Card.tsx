import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function InfoCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600 font-poppins">
              Zoey Lang
            </h4>
            <h5 className="text-small tracking-tight text-default-400 font-poppins">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200 font-poppins"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small font-poppins text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small font-poppins">
            4
          </p>
          <p className=" text-default-400 text-small font-poppins">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small font-poppins">
            97.1K
          </p>
          <p className="text-default-400 text-small font-poppins">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
