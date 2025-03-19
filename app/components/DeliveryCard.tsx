"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch } from "react-redux";
import { DeliveryCardProps } from "../types/types";
import Link from "next/link";





const DeliveryCard: React.FC<DeliveryCardProps> = ({ uuid, currentStatus,  createdAt, fromLocation, toLocation }) => {
  // const dispatch = useDispatch();
  // const { uuid, type, isReturn } = delivery;
 

 
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body p-0">
        <table className="table table-striped mb-0">
          <thead>
            <tr>
              <th>ID доставки</th>
              <th>Статус</th>
              <th>Дата создания</th>
              <th>Адрес отправки</th>
              <th>Адрес доставки</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{uuid}</td>
              <td>
                <span
                  className={`badge ${
                    currentStatus === "CREATED"
                      ? "bg-primary"
                      : currentStatus === "IN_TRANSIT"
                      ? "bg-warning"
                      : currentStatus === "DELIVERED"
                      ? "bg-success"
                      : currentStatus === "CANCELLED"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {currentStatus}
                </span>
              </td>
              <td>{new Date(createdAt).toLocaleDateString()}</td>
              <td>{fromLocation.address}</td>
              <td>{toLocation.address}</td>
              <td>
                <Link
                  href={`/deliveries/${uuid}`}
                  className="btn btn-info btn-sm"
                >
                  Подробнее
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DeliveryCard;
