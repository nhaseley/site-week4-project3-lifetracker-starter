import "./SleepCard.css";

export default function SleepCard({ item }) {
  return (
    <div className="chakra-stack css-xixnl8">
      <div className="css-sxxv4f">
        <div className="css-56yjmq">
          <span className="chakra-avatar css-en15ln">
            <div
              role="img"
              aria-label="13hr"
              className="chakra-avatar__initials css-1ebyn6"
            >
              1
            </div>
          </span>
          <div className="css-1kw2fa0">
            <h2 className="chakra-heading css-y5314g">{item.endTime.substring(0, 9)}</h2>
          </div>
        </div>
        <div className="white css-1lekzkb">
          <div className="chakra-stat css-1mbo1ls">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">Start Time</dt>
              <dd className="chakra-stat__number css-1axeus7">{item.startTime.substring(11, 15)}</dd>
            </dl>
          </div>
          <div className="chakra-stat css-1mbo1ls">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">End Time</dt>
              <dd className="chakra-stat__number css-1axeus7">{item.endTime.substring(11, 15)}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
