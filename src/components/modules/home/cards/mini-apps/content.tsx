import React from "react";

type MiniApp = {
  name: string;
  imageUrl: string;
};

const miniApps: MiniApp[] = [
  {
    name: "Digital Zone",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Food Delivery",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Shopping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Transport",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Entertainment",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Banking",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Travel",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Health",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Education",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Gaming",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Social",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
  {
    name: "Utilities",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCSsBEwcuuG5eSQVFvFN-SrB4MEOJGnT_EzZ8E5yvo9aSdx2s2GVn76fC3d1DtvgEJ4M&usqp=CAU",
  },
];

export default function Content() {
  return (
    <div className="p-2 grid grid-cols-4 gap-3">
      {miniApps.map((app) => (
        <div key={app.name} className="flex flex-col gap-1 items-center">
          <img
            src={app.imageUrl}
            alt={app.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="text-xs text-muted-foreground">{app.name}</div>
        </div>
      ))}
    </div>
  );
}
