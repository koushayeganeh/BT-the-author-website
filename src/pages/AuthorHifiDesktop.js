import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import TextBox from "../components/TextBox";
import FooterContainer from "../components/FooterContainer";
import AuthorHeaderContainer from "../components/AuthorHeaderContainer";
import { Spotify } from "react-spotify-embed";
import { FacebookEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";
import "./AuthorHifiDesktop.css";
const AuthorHifiDesktop = () => {
  const navigate = useNavigate();

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
    <div className="author-hifi-desktop">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="page-header-container">
        <AuthorHeaderContainer />
      </section>

      <section className="main-author-content-container">
        <div className="main-author-content-inner-container">
          <div className="div-texts-container">
            <TextBox
              title="Biyografi"
              text={[
                "Barış Tayfün, Türkiye'nin önde gelen çağdaş yazarlarından biridir. 1975 yılında İstanbul'da doğan Tayfün, genç yaşlarda yazmaya olan tutkusunu keşfetti ve o zamandan beri kelimenin sihirli dünyasına tutkuyla bağlı kaldı. Edebiyat kariyerine kısa öykülerle başlayan Tayfün, sonradan roman yazmaya yöneldi ve kısa sürede edebiyat dünyasında adını duyurdu.",
                "Barış Tayfün'ün eserleri, insan ilişkileri, toplumsal dinamikler ve bireyin iç dünyasının derinliklerine odaklanır. Yazarın dili, incelikli ve etkileyici bir şekilde insan duygularını ve deneyimlerini anlatır. Eserleri, Türk edebiyatının zengin geleneğine katkıda bulunurken aynı zamanda modern çağın karmaşıklığına ve insan deneyimlerine bir ayna tutar. Barış Tayfün, edebiyatseverlerin gönlünde özel bir yer edinmiş ve Türk edebiyatının önemli isimlerinden biri olarak kabul edilmektedir.",
              ]}
            />
            <TextBox
              title="ilham kaynakları"
              text={[
                "Barış Tayfün'ün yazarlık kariyerindeki en önemli etkenlerden biri, çocukluk döneminden itibaren beslediği derin bir okuma alışkanlığıdır. Genç yaşlarda kitapların büyülü dünyasına dalan Tayfün, klasik edebiyattan çağdaş eserlere kadar geniş bir yelpazede okuma yaparak farklı yazarların tarzlarından etkilendi. Dünya edebiyatının büyük ustaları, onun kendi yazı tarzını oluşturmasında ilham kaynağı olmuştur. Ayrıca, Tayfün'ün seyahatleri ve farklı kültürleri tanıma isteği, eserlerindeki çeşitli temaların ve karakterlerin oluşturulmasında büyük bir rol oynamıştır.",
                "Barış Tayfün, doğal dünyaya olan derin ilgisiyle de bilinir. Doğanın güzellikleri ve doğadaki yaşam formları, ona yaratıcı ilhamlar verir. Özellikle deniz kenarında geçirdiği zamanlar, denizin sükuneti ve dalga sesleri, yazma sürecine ilham kaynağı olur. Bu nedenle, doğa ve çevre temaları sıkça eserlerinde karşımıza çıkar.",
                "Son olarak, Tayfün'ün günlük yaşam ve insan ilişkileri de yazma sürecinde önemli birer ilham kaynağıdır. Onun gözlem yeteneği ve insan psikolojisi üzerine derin düşünme yetisi, karakterlerinin zenginliğine ve hikayelerinin dokusuna katkıda bulunur. Yazar, yaşamın karmaşıklığını ve insanların deneyimlerini anlamaya yönelik sonsuz bir merakla yazılarına ilham verir.",
              ]}
            />
            <TextBox
              title="üzerindeki etkileri"
              text={[
                "Barış Tayfün'ün edebi etkileri, kendine özgü yazı tarzını şekillendirmede önemli bir rol oynamıştır. Onun en önemli etkilerinden biri, ünlü Türk yazar Yaşar Kemal'dir. Yaşar Kemal'in güçlü hikayeciliği ve Türk kültürüne derin bağlılığı, Tayfün'ün eserlerine damgasını vurmuştur. Tayfün, Kemal'in köy yaşamı ve insan ruhu etrafında karmaşık hikayeler örme yeteneğine hayran kaldı ve bu etki, kendi yazılarında benzer temaları işlemesinde açıkça görülür.",
                "Tayfün'ün edebiyat yolculuğundaki diğer büyük etkilerden biri Albert Camus'un varoluşçuluk felsefesidir. Tayfün, Camus'un insan koşullarını ve anlamsız gibi görünen bir evrende anlam arayışını keşfetmesine çekilmiştir. Bu felsefi bakış açısı, Tayfün'ü kendi romanlarında derin varoluşsal temalara dalmaya ilham verdi. Sıklıkla amaç ve varoluşun sorularıyla boğuşan karakterleri tasvir ederek bu felsefi bakış açısını yansıtır.",
                "Tayfün'ün çok kültürlü yetişmesi ve geniş seyahat deneyimleri de yazısına derin bir etki yapmıştır. Farklı kültürler ve bakış açılarına geniş bir maruziyet, hikaye anlatısının dokusunu zenginleştirmiştir. Bu çok kültürlü etki, onun eserlerine kültürel farkları köprüleyen ve insan deneyimi üzerine küresel bir perspektif sunan hikayeler oluşturmasına izin vermiştir. Bu çok kültürlü etki, eserlerine kapsayıcılık ve insan yaşamı ve düşüncesinin çeşitliliği için derin bir takdir katmıştır.",
              ]}
            />
          </div>

          <div className="div-side-container">
            <h2 className="author-side-title">Yazarken dinledikler</h2>
            <div className="side-feature-box">
              <Spotify
                loading="lazy"
                link="https://open.spotify.com/playlist/6N8PYWcHTuSVccqJxKUl01?utm_source=generator&theme=0"
                width={"100%"}
              />
            </div>
            <h2 className="author-side-title">Sosyal medyada</h2>
            <div className="side-feature-box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FacebookEmbed
                  loading="lazy"
                  url="https://www.facebook.com/photo/?fbid=10160308287280425&set=a.10151077445160425"
                  width={"100%"}
                />
              </div>
            </div>
            <div className="side-feature-box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "1rem",
                }}
              >
                <InstagramEmbed
                  loading="lazy"
                  url="https://www.instagram.com/p/CMSPzO8hFvZ/"
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section1" id="author-desk-section">
        <div className="container">
          <h1 className="title1" id="author-desk-heading">
            Çalışma Alanı
          </h1>
          <div className="card">
            <img
              className="image-11-icon"
              alt=""
              id="author-desk-img"
              src="/image-11@2x.jpg"
            />
          </div>
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default AuthorHifiDesktop;
