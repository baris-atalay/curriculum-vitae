function Portrait() {
  return (
    <>
      <div>
        <img src="static/img/portrait.png" />
      </div>
      <style jsx>
        {`
          img {
            width: 150px;
            height: 150px;
            margin-top: -50px;
          }
        `}
      </style>
    </>
  );
}

export default Portrait;
