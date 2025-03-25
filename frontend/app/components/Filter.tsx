"use.client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { changeSearchStatus } from "../slices/DeliveriesSlice";
import { useDispatch } from "react-redux";

export default function Filter({ statuses }: { statuses: string[] }) {
  const dispatch = useDispatch();

  const handleStatusChange = (newStatus: string) => {
    dispatch(changeSearchStatus(newStatus));
  };
  if (!statuses || statuses.length === 0) {
    console.log("statuses пустой или undefined:", statuses);
    return <p></p>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="d-flex gap-2  justify-content-center mt-4 mb-4 ">
          {[...statuses, "ALL"].map((status) => (
            <button
              key={status}
              className="btn btn-primary"
              onClick={() => handleStatusChange(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
