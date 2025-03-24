"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchDeliveries } from "../slices/DeliveriesSlice";
import DeliveryCard from "./DeliveryCard";
import { DeliveryCardProps} from "../types/types";
import Filter from "./Filter";
import Pagination from "./Pagination";

const DeliveriesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    entity: deliveries,
    filtredStatus,
  } = useAppSelector((state) => state.deliveries);

  useEffect(() => {
    dispatch(fetchDeliveries({page:1, limit:5}));
  }, [dispatch]);
  console.log(123);

  useEffect(()=>{
   
  },[filtredStatus])

  // if (loading) return <p>Загрузка...</p>;
  // if (error) return <p style={{ color: "red" }}>Ошибка: {error} </p>;
  const deliveriesFiltered = deliveries.filter((delivery: DeliveryCardProps) =>
    filtredStatus ? filtredStatus === delivery.currentStatus : true
  );
  console.log(filtredStatus);

  const uniqueStatus = deliveries
    ? [...new Set(deliveries.map((d) => d.currentStatus))]
    : [];

  console.log( deliveries);
  console.log( uniqueStatus);
  return (
    <div>
      <Filter statuses={uniqueStatus as string[]} />

      {deliveries.length === 0 ? (
        <p>Нет доступных доставок</p>
      ) : (
        deliveriesFiltered.map((delivery:DeliveryCardProps, index) => (
          <DeliveryCard key={index} uuid = {delivery.uuid} currentStatus = {delivery.currentStatus} type = {delivery.type} createdAt = {delivery.createdAt} fromLocation = {delivery.fromLocation } toLocation = {delivery.toLocation}  />
        ))
      )}
      <Pagination/>
    </div>

  );
};
export default DeliveriesList;
