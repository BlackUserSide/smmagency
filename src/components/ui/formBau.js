import React from "react";

export const FormBay = ({ change, active, closeActive, submit, userLink }) => {
  return (
    <>
      <div
        className={`bg-pop-up ${active.active ? "is-bay-active" : ""}`}
        onClick={() =>
          closeActive({
            active: false,
            data: {},
          })
        }
      ></div>
      <div className={`form-set-order ${active.active ? "is-bay-active" : ""}`}>
        <form className="order-service" onSubmit={(e) => submit(e)}>
          <div className="msg-wrapper">
            <p>{userLink.message}</p>
          </div>
          <div className="top-line-form">
            <h3 className="h3">Ваш заказ:</h3>
          </div>
          <div className="order-description">
            <p className="data-name">{`${active.data.name}:`}</p>
            <p className="data-price">{`${active.data.price} рублей`}</p>
          </div>
          <p>
            Введите ссылку на пост или профиль(<strong>Внимание</strong>,
            профиль должен быть открытым)
          </p>
          <input type="text" name="nameUser" required onChange={change} />
          <br />
          <button type="submit">Оплатить</button>
        </form>
      </div>
    </>
  );
};
