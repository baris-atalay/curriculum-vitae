function Boxed({ children }) {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            max-width: 1024px;
            margin: 80px 0;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            box-shadow: 0 3px 1px -2px rgba(79, 195, 247, 0.4), 0 2px 2px 0 rgba(79, 195, 247, 0.25),
              0 1px 5px 0 rgba(79, 195, 247, 0.12);
            transition: box-shadow 0.2s ease-out;
          }
          div:hover {
            box-shadow: 0 3px 1px -2px rgba(79, 195, 247, 0.4),
              0 2px 2px 1px rgba(79, 195, 247, 0.25), 0 1px 5px 1px rgba(79, 195, 247, 0.25);
          }
        `}
      </style>
    </div>
  );
}

export default Boxed;
