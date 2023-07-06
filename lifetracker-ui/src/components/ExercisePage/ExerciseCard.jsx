import "./ExerciseCard.css";

export default function ExerciseCard({ item }) {
  return (
    <div className="chakra-stack css-xixnl8">
      <span className="css-89mcmc">{(new Date(item.created_at)).toLocaleString()}</span>
      <div className="css-1d1dt3r">
        <div className="css-56yjmq">
          <span
            className="chakra-avatar css-en15ln"
            style={{
              background:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
            }}
          >
            <div
              role="img"
              aria-label="nya"
              className="chakra-avatar__initials css-1ebyn6"
            >
              {item.name[0]}
            </div>
          </span>
          <div className="css-1kw2fa0">
            <h2 className="chakra-heading css-y5314g">
            {item.name}
              <span className="chakra-badge css-lvvibp"></span>
            </h2>
          </div>
        </div>
        <div className="white css-1lekzkb">
          <div className="chakra-stat css-1mbo1ls">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">Duration</dt>
              <dd className="chakra-stat__number css-1axeus7">{item.duration}</dd>
            </dl>
          </div>
          <div className="chakra-stat css-1mbo1ls">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">Intensity</dt>
              <dd className="chakra-stat__number css-1axeus7">{item.intensity}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
