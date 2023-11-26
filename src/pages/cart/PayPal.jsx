import React, { useRef, useEffect } from "react";
import { apiUrl } from "../../constans/url";

export default function Paypal({totalPrice}) {
  const paypal = useRef();

  useEffect(() => {
    window?.paypal?.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: apiUrl + "createPayment",
            purchase_units: [
              {
                amount: {
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
