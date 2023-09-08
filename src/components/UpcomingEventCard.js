import "./UpcomingEventCard.css";
import { SlCalender } from "react-icons/sl";

const UpcomingEventCard = () => {
  return (
    <section className="section18" id="event-section">
      <div className="section18-inner-content">
        <div className="container8">
          <h1 className="title39" id="event-heading">
            Yaklaşan Etkinlik
          </h1>
        </div>
        <div className="list5">
          <div className="item">
            <div className="frame">
              <div className="icon">
                <SlCalender />
              </div>
            </div>
            <div className="title-parent11">
              <div className="title40">Kitap Lansman Partisi</div>
              <div className="subtitle19">Yer: XYZ Şehri</div>
            </div>
            <div className="subtitle20">Tarih: 1 Ocak 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventCard;
