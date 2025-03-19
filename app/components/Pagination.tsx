import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchDeliveries } from "../slices/DeliveriesSlice";

export default function Pagination() {
  const dispatch = useDispatch<AppDispatch>();
  const {  loading, limit, page, hasMore } = useSelector(
    (state: RootState) => state.deliveries
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
		console.log(hasMore)
    if (loading || !hasMore) return;
		
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(fetchDeliveries({ page, limit }));
      }

			
    });
    if (lastElementRef.current) {
      observer.current?.observe(lastElementRef.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore, page, limit,dispatch]);

  return (
    <div>
      {hasMore && (
        <div
          ref={lastElementRef}
          style={{ height: 20, background: "transparent" }}
        />
      )}
      {loading && <p>Загрузка...</p>}
    </div>
  );
}
