import React, { useState } from 'react';
import './header.css'
import { FaSearch } from 'react-icons/fa';
import ResultImages from '../ResultImages/ResultImages';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {

    const [result,setResult]=useState([])

    const handleSearch=(e)=>{
        const searchQuery=e.target[0].value;
        const KEY='15674931-a9d714b6e9d654524df198e00&q'
        fetch(`https://pixabay.com/api/?key=${KEY}=${searchQuery}&image_type=photo`)
        .then(res=>res.json())
        .then(data=>setResult(data.hits))
        e.target.reset()
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "130px",
        slidesToShow: 3,
        speed: 500
      };

    return (
        <div>
            <div className="header-bg d-flex justify-content-center align-self-center">
                <div className='text-center searchBox'>
                    <h2 className='text-white'>Your local source of high quality images <br /> and videos directly from their creators </h2>
                    <form onSubmit={(e)=>handleSearch(e)}>
                    <div class="input-group flex-nowrap mt-3">
                        <input type="text" class="form-control " placeholder="Search photos and videos" aria-label="Username" aria-describedby="addon-wrapping" required/>
                        <span class="input-group-text" id="addon-wrapping"><button style={{border:'none'}} type="submit"><FaSearch/></button></span>
                    </div>
                    </form>
                    <p className='text-white mt-2'>Recommended : summer,food,covid-19,love..</p>
                </div>
            </div>
    
            <div className="container show-image">
                <div className="carosal">
                    <h4 className="ms-5 p-2">Top Categories</h4>
                    <Slider {...settings}>
                    <div>
                       <img className='slider-img' src="https://tezzbuzz.com/wp-content/uploads/2021/03/Summer-beach-image.jpg" alt="" />
                    </div>
                    <div>
                       <img className='slider-img' src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                    </div>
                    <div>
                       <img className='slider-img' src="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg" alt="" />
                    </div>
                    <div>
                       <img className='slider-img' src="https://cdn.techexplorist.com/wp-content/uploads/2019/11/gravity18.jpg" alt="" />
                    </div>
                    <div>
                       <img className='slider-img' src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1609235645/1609235644.jpg" alt="" />
                    </div>
                    <div>
                       <img className='slider-img' src="https://www.sciencenews.org/wp-content/uploads/2020/05/052020_ts_scientific-words_feat-1028x579.jpg" alt="" />
                    </div>
                    </Slider>
                </div>

                <ul className="list-item mt-2">
                    <li>All</li>
                    <li>Photos</li>
                    <li>Videos</li>
                    <li>Freebies</li>
                    <li>360</li>
                    <select className="" name="categories">
                        <option value="saab">Recent</option>
                        <option value="opel">Viewed</option>
                        <option value="audi">Downloaded</option>
                        <option value="audi">Appreciated</option>
                    </select>
                </ul>
                
                <div className="image-div">
                    <div className="row mt-2">
                        {
                            result.map(image=> <ResultImages images={image}></ResultImages>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;