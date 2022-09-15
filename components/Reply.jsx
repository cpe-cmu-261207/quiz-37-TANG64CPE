import React from "react";
import { comments } from "../libs/comments";

export default function Reply() {
  return (
    <div>
      {comments.map((x, i) => {
        <div key={i}>
          {x.replies.map((y, p) => (
            <div className="d-flex gap-2 my-2 ps-5" key={p}>
              <img
                src={y.userImagePath}
                width="48"
                height="48"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
              <div
                className="rounded rounded-3 p-2"
                style={{ backgroundColor: "#E5E7EB" }}
              >
                <span className="fw-semibold">{y.username}</span>
                <br />
                <span>{y.replyText}</span>
              </div>
            </div>
          ))}
        </div>;
      })}
    </div>
  );
}
