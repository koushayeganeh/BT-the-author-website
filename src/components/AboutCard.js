import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutCard.css";
const AboutCard = () => {
  const navigate = useNavigate();

  const onPrimaryContainerClick = useCallback(() => {
    navigate("/author");
  }, [navigate]);

  return (
    <section className="list4" id="bio-section">
      <div className="article13">
        <div className="image-container11">
          <div className="image9">
            <img
              className="image-7-icon"
              alt=""
              id="bio-img"
              src="/image-7@2x.png"
            />
          </div>
        </div>
        <div className="frame-parent">
          <div className="title-parent10">
            <div className="title37">Hakkında</div>
            <div className="subtitle18">
              <p>
                Barış Tayfün, insan deneyimi, ruhsallık ve fiziksel yaşam
                üzerine odaklanan hikayeler yazan bir yazardır. Kendisi,
                insanların derin duygusal bağlarını ve içsel yolculuklarını
                keşfetmeye olan tutkusuyla bilinir. Barış, eserlerinde ruhsal
                büyüme, insan ilişkileri ve yaşamın anlamı gibi evrensel
                temaları işlerken, okuyucularını derin düşünceye ve içsel keşfe
                teşvik etmek için kelimeleri ustalıkla kullanır. Yazarlık
                kariyerine başladığı günden bu yana, kitapları birçok okur
                tarafından ilgiyle takip edilmektedir ve eserleri ruhu ve bedeni
                birleştiren derin bir deneyim sunar.
              </p>
              <p>
                Barış Tayfün, hem düşünce hem de kalp dokusunu dokuyan,
                okuyuculara içsel bir yolculuk vaat eden, ilham verici
                eserleriyle tanınan bir yazardır. Onun kelimeleri, insanların
                hayatın derinliklerine inmelerine ve kendi iç dünyalarını
                keşfetmelerine rehberlik eder.
              </p>
            </div>
          </div>
          <button className="button3" id="button-read-more">
            <div className="primary3" onClick={onPrimaryContainerClick}>
              <div className="title38">Devamını Oku</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
