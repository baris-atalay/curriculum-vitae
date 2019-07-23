function Portrait() {
  return (
    <>
      <div className="center">
        <img src="static/img/portrait.png" />
      </div>
      <style jsx>
        {`
          img {
            width: 150px;
            height: 150px;
            margin-top: -50px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.6);
            box-shadow: 0 3px 1px -2px rgba(79, 195, 247, 0.6), 0 2px 2px 0 rgba(79, 195, 247, 0.4),
              0 1px 5px 0 rgba(79, 195, 247, 0.4);
          }
          .center {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

export default Portrait;
