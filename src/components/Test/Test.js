import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const Test = ({test}) => {
    const {name , logo, total} = test;
    return (
        <div>
            <Card className="w-96">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={logo}
                alt="img-blur-shadow"
                className="h-full w-16"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                {name}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">$899/night</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Questions: {total}
                </Typography>
            </CardFooter>
    </Card>
        </div>
    );
};

export default Test;