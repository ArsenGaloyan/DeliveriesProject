'use client'
import { useParams, useRouter } from "next/navigation";
import {useAppSelector} from '../../store/hooks';
import "bootstrap/dist/css/bootstrap.min.css";



const DeliveryDetail = ()=>{
	const {id}= useParams();
	const cleanId = decodeURIComponent(String(id));
	console.log("Исправленный ID:", cleanId);
	const router = useRouter();
	const { entity: deliveries } = useAppSelector((state) => state.deliveries);


	console.log("ID из useParams:", id);
console.log("Все доставки:", deliveries);



	const delivery = useAppSelector((state)=>
	state.deliveries.entity.find((d)=>d.uuid ===  String(id))
	);

if(!delivery){
	return <p>Доставка не найдена</p>
}
return (
	<div className="container mt-5">
		<div className="card shadow-lg">
		<h2 className="text-primary m-4">Детали доставки</h2>
		<ul className="list-group list-group-flush">
			<li className="list-group-item"><strong>ID: </strong>{delivery.uuid}</li>
			<li className="list-group-item"><strong>Название: </strong>{delivery.type}</li>
			<li className="list-group-item"><strong>Статус: </strong>{delivery.currentStatus}</li>
		</ul>

		{/* <p><strong>Комментарии:</strong>{delivery.delivery.comments || "Нет комментариев"}</p> */}

		<button className="btn btn-outline-secondary mt-3" onClick = {()=>router.back()}>Назад</button>
		</div>
	</div>
)


}
export default DeliveryDetail;

