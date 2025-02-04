import "./SleepCard.css";

export default function SleepCard({ item }) {
  return (
    
    <div className="chakra-stack css-xixnl8">
      <div className="css-sxxv4f">
        <div className="css-56yjmq">
          <span className="chakra-avatar css-en15ln" style={{
              background:
                "#" + Math.floor(Math.random() * 16777215).toString(16)
            }}>
            <div
              role="img"
              aria-label="13hr"
              className="chakra-avatar__initials css-1ebyn6"
            >
              S
            </div>
          </span>
          <div className="css-1kw2fa0">
            <h2 className="chakra-heading css-y5314g">{item.endtime?item.endtime.substring(0, 10): item.endTime.substring(0, 10)}</h2>
          {/* TODO: fix endtime vs endTime */}
          </div>
        </div>
        <div className="white css-1lekzkb">
          <div className="chakra-stat css-1mbo1ls">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">Start Time</dt>
              <dd className="chakra-stat__number css-1axeus7">{item.starttime?item.starttime.substring(11, 16): item.startTime.substring(11, 16)}</dd>
            </dl>
          </div>
          <div className="chakra-stat css-1mbo1ls">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">End Time</dt>
              <dd className="chakra-stat__number css-1axeus7">{item.endtime?item.endtime.substring(11, 16): item.endTime.substring(11, 16)}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
