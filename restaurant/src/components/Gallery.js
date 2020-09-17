import React from 'react';
import theimg from '../ImagesA/outside.jpg';
import a from '../ImagesB/a.jpg';
import b from '../ImagesB/b.jpg';
import c from '../ImagesB/c.jpg';
import d from '../ImagesB/d.jpg';
import e from '../ImagesB/e.jpg';
import f from '../ImagesB/f.jpg';
import g from '../ImagesB/g.jpg';
import h from '../ImagesB/h.jpg';
import i from '../ImagesB/i.jpg';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Gallery.scss';
SwiperCore.use(EffectCoverflow)

function Gallery() {
    return (
        <div className="gallery-container">
            <span className="title">Gallery<span style={{ color: "goldenrod" }}>.</span></span>
            <Swiper
                className="the-swiper"
                effect="coverflow"
                slidesPerView={3}
            >
                <SwiperSlide className="images"><img src={g} /></SwiperSlide>
                <SwiperSlide className="images"><img src={a} /></SwiperSlide>
                <SwiperSlide className="images"><img src={b} /></SwiperSlide>
                <SwiperSlide className="images"><img src={c} /></SwiperSlide>
                <SwiperSlide className="images"><img src={d} /></SwiperSlide>
                <SwiperSlide className="images"><img src={e} /></SwiperSlide>
                <SwiperSlide className="images"><img src={f} /></SwiperSlide>
                <SwiperSlide className="images"><img src={g} /></SwiperSlide>
                <SwiperSlide className="images"><img src={h} /></SwiperSlide>
                <SwiperSlide className="images"><img src={i} /></SwiperSlide>
                <SwiperSlide className="images"><img src={a} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Gallery;
