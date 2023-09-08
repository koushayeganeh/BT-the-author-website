import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "./CardContainer";
import "./UpcomingBooksContainer.css";
const UpcomingBooksContainer = () => {
  const navigate = useNavigate();

  const onRowContainerClick = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  const onTitleClick = useCallback(() => {
    navigate("/library");
  }, [navigate]);

  return (
    <section className="section19" id="library-section">
      <div className="section19-inner-content">
        <div className="container9">
          <h1 className="title42" id="library-heading" onClick={onTitleClick}>
            Yakında Çıkacak Kitaplar
          </h1>
        </div>
        <div className="list6">
          <CardContainer
            title="Sessiz Tanıkların Gözüyle"
            subtitle="Bir Romanın Anlatımıyla 20. Yüzyılın Karanlık Sayfaları"
            subtitle1="Bu roman, Ermeni-Türk çatışmalarının iç yüzünü ve trajik sonuçlarını, insan hikayeleri aracılığıyla duygusal bir perspektifle anlatıyor."
            labelText="Tarih"
            labelText1="Dram"
            labelText2="Sosyal"
            labelText3="Politik"
            onRowContainerClick={onRowContainerClick}
          />
          <CardContainer
            title="Günışığı Gözyaşları"
            subtitle="Bir Kadının İç Dünyasına Yolculuk"
            subtitle1="Modern dünyanın meydan okumalarıyla başa çıkmaya çalışan bir kadının içsel yolculuğunu keşfedin. Aşk, aile ve özgürlük temaları etrafında dokunan bu dokunaklı hikaye, güç ve hassasiyetin kesişimini gösteriyor."
            labelText="Roman"
            labelText1="Duygusal"
            labelText2="Karakterler"
            labelText3="Aile ve İlişkiler"
            onRowContainerClick={onRowContainerClick}
          />
          <CardContainer
            title="Kayıp Kıta"
            subtitle="Bir Masalın İçsel Yolculuğu"
            subtitle1="Rüyaların ve gerçekliğin arasında kaybolurken, çocuğun iç dünyası büyülü bir ormanın derinliklerine dönüşüyor. Ruhunu aydınlatmak için bilinmezlerle dolu bu yolculuğa çıkın."
            labelText="Roman"
            labelText1="Spiritüel"
            labelText2="Çocuk"
            labelText3="Keşif ve Büyüme"
            propBackgroundImage="url('/image-container3@3x.png')"
            onRowContainerClick={onRowContainerClick}
          />
          <CardContainer
            title="Sonsuzun İzinde"
            subtitle="Işığın Kalbindeki Sırrı Keşfetmek"
            subtitle1="Güneşe doğru uzanan bir hayal ile başladı her şey. Bir grup vızıldayan rüyacı, dünya dışında bir yerde olan o büyülü yerin peşine düştü."
            labelText="Roman"
            labelText1="Bilim-Fantazi "
            labelText2="Yıldızlararası "
            labelText3="Evrensel Gizemler"
            propBackgroundImage="url('/image-container4@3x.png')"
            onRowContainerClick={onRowContainerClick}
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingBooksContainer;
