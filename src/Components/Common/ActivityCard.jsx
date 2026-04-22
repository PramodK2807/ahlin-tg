import React from "react";

const ActivityCard = ({ activity }) => {
  if (!activity || activity.length === 0) return <p>NA</p>;

  return (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      {activity.map((item, index) => (
        <div
          key={index}
          className="d-inline-flex align-items-center bg-light border rounded-pill px-3 py-1 shadow-sm"
          style={{ cursor: "pointer" }}
        >
          <img
            src={item?.uploadImage?.[0] || "/images/wild-life.jpeg"}
            alt={item?.activityName || "activity"}
            className="rounded-circle object-fit-cover me-2"
            loading="lazy"
            height={32}
            width={32}
            style={{ objectFit: "cover" }}
          />
          <span className="text-dark ">{item?.activityName || "NA"}</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityCard;
