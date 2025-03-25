"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import DeliveriesList from "../components/DeliveryList";
import Filter from "../components/Filter";

export default function DeliveriesPage() {


  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
          <h1>Список доставок</h1>
          <div className="mb-4">
            <Filter statuses = {[]}/>
          </div>
          
          <DeliveriesList />
          </div>
        </div>
      </div>
     
   
      {/* <ul>
        {entity.map((delivery)=>{
          return <li key = {delivery.uuid}>{delivery.type} - {delivery.isReturn}</li>  
        })}
      </ul> */}
    </>
  );
}
