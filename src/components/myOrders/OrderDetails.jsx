import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();

  // Simuliamo i dati dell'ordine per l'esempio
  const orderDetails = {
    id: 1,
    stato: "In elaborazione",
    dataOrdine: "01/01/2023",
    dataConsegna: "10/01/2023",
    metodoPagamento: "COD",
    riferimentoPagamento: "#123456",
    dataPagamento: "05/01/2023",
    prezzoFinale: 174.92,
    indirizzoConsegna: "Via degli Ulivi 12, Viggiano(PZ)",
    prodotto: "Cheese Burger with Fries",
    quantita: "23",
  };

  return (
    <section className="order">
      <main>
        <h2>Dettagli dell'Ordine #{id}</h2>

        <h3>Spedizione</h3>
        <p>Indirizzo di Consegna: {orderDetails.indirizzoConsegna}</p>

        <h3>Stato</h3>
        <p>Stato: {orderDetails.stato}</p>
        <p>Data Ordine: {orderDetails.dataOrdine}</p>
        <p>Data Consegna: {orderDetails.dataConsegna}</p>
      
        <h3>Pagamento</h3>
        <p>Metodo di Pagamento: {orderDetails.metodoPagamento}</p>
        <p>Riferimento Pagamento: {orderDetails.riferimentoPagamento}</p>
        <p>Data Pagamento: {orderDetails.dataPagamento}</p>
         
          <h4>RIEPILOGO ORDINE</h4>
          <p>Prodotto: {orderDetails.prodotto}</p>
          <p>Qtà: {orderDetails.quantita}</p>
          <p>TOTALE: ₹ {orderDetails.prezzoFinale}</p>
          
      </main>
    </section>
  );
};

export default OrderDetails;
