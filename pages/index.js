import Global from 'components/Global';

function HelloWorld() {
  return (
    <Global>
      <div>
        Hello world
        <p>scoped!</p>
        <style jsx>
          {`
            p {
              color: blue;
            }
            div {
              display: flex;
              background: red;
            }
            @media (max-width: 600px) {
              div {
                background: blue;
              }
            }
          `}
        </style>
        <style global jsx>
          {`
            body {
              background: black;
            }
          `}
        </style>
      </div>
    </Global>
  );
}

export default HelloWorld;
