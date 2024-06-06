import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsCard } from "@/components";
import Loading from "@/components/Loading/Loading";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Actu } from "@/types";

const CarouselSlick = () => {
  const [news, setNews] = useState<Actu[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchActus = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND}/api/articles?populate=media`
      );
      const sortedData = data.data.sort(
        (a: Actu, b: Actu) =>
          new Date(b.attributes.Date_article).getTime() -
          new Date(a.attributes.Date_article).getTime()
      );
      setNews(sortedData);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActus();
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon color="secondary" />,
    prevArrow: <ArrowBackIosNewIcon color="secondary" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <ArrowForwardIosIcon />,
          prevArrow: <ArrowBackIosNewIcon />,
        },
      },
    ],
  };

  return (
    <>
      <Loading open={loading} />
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {news?.map((newsItem) => (
              <NewsCard key={newsItem.id.toString()} news={newsItem} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default CarouselSlick;
