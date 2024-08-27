import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=> {
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=> {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} onClick={slideForward} alt="" className='next-btn'/>
        <img src={back_icon} onClick={slideBackward} alt="" className='back-btn'/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Abbas Kherani</h3>
                                <span>Maharashtra, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse perspiciatis, reprehenderit voluptatibus provident quidem repudiandae facilis sint distinctio! Iure, amet ad? Debitis autem laboriosam vitae expedita officiis alias molestias!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Md abbas Kherani</h3>
                                <span>chandrapur, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse perspiciatis, reprehenderit voluptatibus provident quidem repudiandae facilis sint distinctio! Iure, amet ad? Debitis autem laboriosam vitae expedita officiis alias molestias!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sara jones</h3>
                                <span>Maharashtra, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse perspiciatis, reprehenderit voluptatibus provident quidem repudiandae facilis sint distinctio! Iure, amet ad? Debitis autem laboriosam vitae expedita officiis alias molestias!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Maharashtra, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse perspiciatis, reprehenderit voluptatibus provident quidem repudiandae facilis sint distinctio! Iure, amet ad? Debitis autem laboriosam vitae expedita officiis alias molestias!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials