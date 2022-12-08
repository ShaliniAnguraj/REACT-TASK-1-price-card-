import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ price }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {price.plan}
          </h5>
          <h6 className="card-price text-center">
            ${price.price}
            <span class="period">/month</span>
          </h6>
          <hr></hr>
          <ul class="fa-ul">
            {price.features.map((item) => {
              return (
                <li className={`${item.condition ? "" : "text-muted"}`}>
                  <i>
                    <FontAwesomeIcon
                      icon={item.condition ? faCheck : faXmark}
                    />
                  </i>{" "}
                  {item.title}
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
