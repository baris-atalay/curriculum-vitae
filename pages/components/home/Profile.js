function Profile() {
  return (
    <div className="fullwidth spacings">
      <h2>
        Baris <span>Atalay</span>
      </h2>
      <div className="flex-row">
        <ul className="flex-column-6 border-right">
          <li className="flex-row">
            <div className="flex-column-6">
              <strong>Geburtstag:</strong>
            </div>
            <div className="flex-column-6">12.11.1993</div>
          </li>
          <li className="flex-row">
            <div className="flex-column-6">
              <strong>Nationalität:</strong>
            </div>
            <div className="flex-column-6">Schweiz</div>
          </li>
          <li className="flex-row">
            <div className="flex-column-6">
              <strong>Sprachen:</strong>
            </div>
            <div className="flex-column-6">
              Deutsch
              <br />
              Englisch
              <br />
              Türkisch
            </div>
          </li>
        </ul>
        <ul className="flex-column-6 border-left">
          <li className="flex-row">
            <div className="flex-column-6">
              <strong>Telefonnummer:</strong>
            </div>
            <div className="flex-column-6">+41 (0)76 569 92 10</div>
          </li>
          <li className="flex-row">
            <div className="flex-column-6">
              <strong>Mailadresse:</strong>
            </div>
            <div className="flex-column-6">baris.atalay@hotmail.ch</div>
          </li>
          <li className="flex-row">
            <div className="flex-column-6">
              <strong>Adresse:</strong>
            </div>
            <div className="flex-column-6">
              Brühlstrasse 133
              <br />
              4500 Solothurn
              <br />
              Schweiz
            </div>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          h2 {
            padding-left: 20px;
            font-weight: 400;
          }
          h2 span {
            font-weight: 700;
          }
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          strong {
            font-weight: 700;
          }
          .spacings {
            margin: 40px 0 60px;
          }
          .fullwidth {
            width: 100%;
            padding: 0 20px;
          }
          .flex-row {
            display: flex;
          }
          .flex-column-6 {
            flex: 1 0 50%;
            padding: 0 10px;
          }
          .border-right {
            border-right: 1px solid rgba(79, 195, 247, 0.25);
          }
          .border-left {
            border-left: 1px solid rgba(79, 195, 247, 0.25);
          }
        `}
      </style>
    </div>
  );
}

export default Profile;
