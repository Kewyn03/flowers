import React, {useEffect} from 'react';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchFlowers} from "../../store/reducers/flowersSlice";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import '../styles.css'
import Loader from "./Loader";
import OneCard from "./OneCard";

//
// const Container = styled.div`
//   display: flex;
//   margin: 30px 250px 0;
//   width: 1420px;
//   flex-wrap: wrap;
//   box-sizing: border-box;
// `


// const SliderArrowNextImg = styled(SliderArrowRC)`
//   cursor: pointer;
//   transition: .5s;
//
//   &:hover {
//     opacity: 0.7;
//   }
//
//   transform: scale(-1, 1);
// `
// const SliderArrowPrevImg = styled(SliderArrowRC)`
//   cursor: pointer;
//   transition: .5s;
//
//   &:hover {
//     opacity: 0.7;
//
//   }
//
// `

const Headlines = styled.div`

  display: flex;
  margin: 150px 250px 0;
`

const ArrowGroup = styled.div `
  display: flex;
  margin-left: auto;
  
`
const Text = styled.span`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 38px;
  line-height: 18px;
  margin-left: 640px;

`


const Card: React.FC = () => {

    const dispatch = useAppDispatch()
    let {flowers, loading} = useAppSelector(state => state.flowersReducer)

    useEffect(() => {

        console.log('use effect')
        dispatch(fetchFlowers())


    }, [])


    return (
        <>
            <Headlines>
                <Text>Акции</Text>
                <ArrowGroup>
                    <div className="arrow-prev"/>
                    <div className="arrow-next"/>
                </ArrowGroup>
            </Headlines>

            <Swiper

                slidesPerView={1}
                spaceBetween={30}
                navigation={
                    {
                        nextEl: ".arrow-next",
                        prevEl: ".arrow-prev"
                    }
                }
                loop={true}

                className="mySwiper"
                modules={[Navigation, Pagination, Autoplay]}
            >

                {!loading ? flowers?.roses.map((item, index) => {

                        return <SwiperSlide key={index} className="slide">
                            {item.group.map((item) => (
                               <OneCard key={item.id} item={item} loading={loading}/>
                                )
                            )}
                        </SwiperSlide>
                    })
                    : <Loader/>}

            </Swiper>

        </>
    );
};

export default Card;