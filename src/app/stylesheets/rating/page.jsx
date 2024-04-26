"use client";
import { HQBasicCard, HQRating } from "@/components";
import { useState } from "react";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const ratingReaction = ["terrible", "bad", "normal", "good", "wonderful"];

const HQRatingPage = () => {
  const [rating, setRating] = useState(2);
  return (
    <>
      <div className={clsx(styles.HQRatingCardWrapper, "grid")}>
        <HQBasicCard header cardTitle="Basic Rating:">
          <HQRating />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Rating With Half Start:">
          <HQRating allowHalf={true} />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Rating With Text:">
          <HQRating
            tooltips={ratingReaction}
            value={rating}
            handleChange={setRating}
          />
          {rating ? (
            <p className="title-color mt-1">{ratingReaction[rating - 1]}</p>
          ) : null}
        </HQBasicCard>
        <HQBasicCard header cardTitle="Rating Star With Clear Off:">
          <HQRating allowClear={false} />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Rating With Custom Character:">
          <HQRating character={"H"} allowHalf={true} />
        </HQBasicCard>
      </div>
    </>
  );
};

export default HQRatingPage;
