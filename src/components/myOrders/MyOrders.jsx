import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const ordini = [
    { id: 1, stato: "In elaborazione", quantita: 23, importo: 174.92, metodoPagamento: "COD" },
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>ID Ordine</th>
              <th>Stato</th>
              <th>Quantità Articolo</th>
              <th>Importo</th>
              <th>Metodo di Pagamento</th>
              <th>Dettagli</th>
            </tr>
          </thead>

          <tbody>
            {ordini.map((ordine) => (
              <tr key={ordine.id}>
                <td>{ordine.id}</td>
                <td>{ordine.stato}</td>
                <td>{ordine.quantita}</td>
                <td>₹ {ordine.importo}</td>
                <td>{ordine.metodoPagamento}</td>
                <td>

                  <Link to={`/order/${ordine.id}`}>
                    <AiOutlineEye />
                  </Link>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
