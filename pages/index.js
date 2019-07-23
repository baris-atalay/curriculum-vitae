import Global from 'components/Global';
import Portrait from 'pages/components/home/Portrait';
import Profile from 'pages/components/home/Profile';
import Boxed from 'pages/components/home/Boxed';

function Home() {
  return (
    <Global>
      <div className="home">
        <Boxed>
          <div className="fullwidth">
            <Portrait />
            <Profile />
          </div>
        </Boxed>
      </div>
      <style jsx>
        {`
          .home {
            display: flex;
            width: 100%;
            justify-content: center;
            padding: 0 20px;
          }
          .fullwidth {
            width: 100%;
          }
        `}
      </style>
    </Global>
  );
}

export default Home;
