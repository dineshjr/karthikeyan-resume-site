import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { caseStudies } from "../utils/data";

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1c1c1c;
  padding: 50px 0;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  height: auto;
  min-height: 550px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: yellow;
  }

  /* ✅ Hide default Swiper arrows */
  .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
  }
  
  @media (max-width: 768px) {
    width: 90%;
    min-height: 450px;
  }
`;

const ArrowButton = styled.div`
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);

  &:hover {
    background: #f1f1f1;
  }

  svg {
    color: black;
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 5%;
  
  @media (max-width: 768px) {
    left: 2%;
  }
`;

const NextButton = styled(ArrowButton)`
  right: 5%;
  
  @media (max-width: 768px) {
    right: 2%;
  }
`;

const Card = styled.div`
  width: 320px;
  background: #111;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 1024px) {
    width: 280px;
  }
  
  @media (max-width: 768px) {
    width: 240px;
  }
  
  @media (max-width: 480px) {
    width: 220px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  color: white;

  h3 {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #aaa;
    margin-top: 5px;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  .icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .icons img {
    width: 32px;
    height: 32px;
    
    @media (max-width: 768px) {
      width: 28px;
      height: 28px;
    }
    
    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
    }
  }

  .cta {
    margin-top: 15px;
    padding: 10px 20px;
    background: yellow;
    color: black;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 50px;
    width: 100%;
    text-align: center;
    border: none;
    
    @media (max-width: 768px) {
      padding: 8px 15px;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const CaseStudySlider = () => {
  return (
    <SliderContainer>
      <PrevButton className="custom-prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </PrevButton>
      <StyledSwiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {caseStudies.map((study) => (
          <SwiperSlide key={study.id} style={{ width: "auto" }}>
            <Card>
              <ImageContainer>
                <img src={study.image} alt={study.title} />
              </ImageContainer>
              <CardContent>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className="icons">
                  {study.tools.map((tool, index) => (
                    <img key={index} src={tool} alt="tool icon" />
                  ))}
                </div>
                <a href={study.link} style={{ textDecoration: 'none', width: '100%' }}>
                  <button className="cta">View Project</button>
                </a>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <NextButton className="custom-next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </NextButton>
    </SliderContainer>
  );
};

export default CaseStudySlider;