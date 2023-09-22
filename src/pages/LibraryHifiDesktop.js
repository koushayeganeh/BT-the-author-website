import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import CardContainer from "../components/CardContainer";
import FooterContainer from "../components/FooterContainer";
import "./LibraryHifiDesktop.css";
const LibraryHifiDesktop = () => {
  const navigate = useNavigate();

  const onRowContainerClick = useCallback(
    (bookID) => {
      navigate(`/library/${bookID}`);
    },
    [navigate]
  );

  const onTabText0Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabText1Click = useCallback(() => {
    navigate("/author");
  }, [navigate]);

  const onTabText2Click = useCallback(() => {
    navigate("/library");
  }, [navigate]);

  const onTabText3Click = useCallback(() => {
    navigate("/blogs");
  }, [navigate]);

  const onTabText4Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="library-hifi-desktop">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="section14" id="page-hero-section"></section>
      <section className="section19" id="library-section">
        <div className="list6">
          <CardContainer
            bookID="1"
            title="Sessiz Tanıkların Gözüyle"
            subtitle="Bir Romanın Anlatımıyla 20. Yüzyılın Karanlık Sayfaları"
            subtitle1="Bu roman, Ermeni-Türk çatışmalarının iç yüzünü ve trajik sonuçlarını, insan hikayeleri aracılığıyla duygusal bir perspektifle anlatıyor."
            labelText="Tarih"
            labelText1="Dram"
            labelText2="Sosyal"
            labelText3="Politik"
            onRowContainerClick={() => onRowContainerClick(1)}
          />
          <CardContainer
            bookID="2"
            title="Günışığı Gözyaşları"
            subtitle="Bir Kadının İç Dünyasına Yolculuk"
            subtitle1="Modern dünyanın meydan okumalarıyla başa çıkmaya çalışan bir kadının içsel yolculuğunu keşfedin. Aşk, aile ve özgürlük temaları etrafında dokunan bu dokunaklı hikaye, güç ve hassasiyetin kesişimini gösteriyor."
            labelText="Roman"
            labelText1="Duygusal"
            labelText2="Karakterler"
            labelText3="Aile ve İlişkiler"
            onRowContainerClick={() => onRowContainerClick(2)}
          />
          <CardContainer
            bookID="3"
            title="Kayıp Kıta"
            subtitle="Bir Masalın İçsel Yolculuğu"
            subtitle1="Rüyaların ve gerçekliğin arasında kaybolurken, çocuğun iç dünyası büyülü bir ormanın derinliklerine dönüşüyor. Ruhunu aydınlatmak için bilinmezlerle dolu bu yolculuğa çıkın."
            labelText="Roman"
            labelText1="Spiritüel"
            labelText2="Çocuk"
            labelText3="Keşif ve Büyüme"
            propBackgroundImage="url('/image-container3@3x.png')"
            onRowContainerClick={() => onRowContainerClick(3)}
          />
          <CardContainer
            bookID="4"
            title="Sonsuzun İzinde"
            subtitle="Işığın Kalbindeki Sırrı Keşfetmek"
            subtitle1="Güneşe doğru uzanan bir hayal ile başladı her şey. Bir grup vızıldayan rüyacı, dünya dışında bir yerde olan o büyülü yerin peşine düştü."
            labelText="Roman"
            labelText1="Bilim-Fantazi "
            labelText2="Yıldızlararası "
            labelText3="Evrensel Gizemler"
            propBackgroundImage="url('/image-container4@3x.png')"
            onRowContainerClick={() => onRowContainerClick(4)}
          />
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default LibraryHifiDesktop;
