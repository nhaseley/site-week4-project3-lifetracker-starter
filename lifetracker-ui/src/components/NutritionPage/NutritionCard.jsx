import "./NutritionCard.css";

export default function NutritionCard({ item }) {
  return (
    <div className="nutrition-card">
      <span className="nutrition-date">{(new Date(item.created_at)).toLocaleString()}</span>
      <div className="css-2plr3x">
        <div className="css-56yjmq">
          <span
            className="chakra-avatar css-en15ln"
            style={{
              background:
                "#" + Math.floor(Math.random() * 16777215).toString(16)
            }}
          >
            <div
              role="img"
              aria-label="d"
              className="chakra-avatar__initials css-1ebyn6"
            >
              {item.name[0]}
            </div>
          </span>
          <div className="css-1kw2fa0">
            <h2 className="chakra-heading css-y5314g">
              {item.name}
              <span className="nutrition-category" >{item.category}</span>
            </h2>
          </div>
          <img className="nutrition-image" src={item.image_url}></img>
        </div>
        <div className="white css-1lekzkb">
          <div className="nutrition-calories">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">Calories</dt>
              <dd className="chakra-stat__number css-1axeus7">
                {item.calories}
              </dd>
            </dl>
          </div>
          <div className="nutrition-quantity">
            <dl>
              <dt className="chakra-stat__label css-14go5ty">Quantity</dt>
              <dd className="chakra-stat__number css-1axeus7">
                {item.quantity}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
