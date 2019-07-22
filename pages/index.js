import Global from 'components/Global';
import Portrait from 'pages/components/home/Portrait';
import Profile from 'pages/components/home/Profile';

function HelloWorld() {
  return (
    <Global>
      <div>
        <div>
          <Portrait />
          <Profile />
        </div>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            width: 100%;
            justify-content: center;
          }
          div > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            max-width: 1024px;
            padding: 0 20px;
            margin: 80px 0;
            height: 500px;
            background-color: grey;
          }
        `}
      </style>
    </Global>
  );
}

export default HelloWorld;
