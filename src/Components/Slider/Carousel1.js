import React from "react";
import { slides } from './dataImg'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

const Carousel1 = () => {

    return (
        <>
            <MDBContainer id="carousel-container">
                <MDBCarousel
                    interval={5000}
                    activeItem={1}
                    length={slides.length}
                    showControls={true}
                    showIndicators={false}
                    onHoverStop={false}
                    className="z-depth-1"

                >
                    
                        <MDBCarouselInner>
                            {
                                slides.map((item, key) => (
                                    <MDBCarouselItem itemId={item.id} key={key} >
                                        <MDBView >
                                            <img
                                                className="d-block w-100 img-responsive"
                                                src={item.img}
                                                alt={item.title}
                                            />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h1 className="h1-responsive">{item.title}</h1>
                                            <a type="button" href={`/overview/${item.title}`}>discover</a>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                ))
                            }
                        </MDBCarouselInner> 
                    
                </MDBCarousel>
            </MDBContainer>
        </>
    )
}


export default Carousel1