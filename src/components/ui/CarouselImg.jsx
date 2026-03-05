import { Carousel } from 'antd';
import mart from '../../assets/mart8.jpg'
import phone from '../../assets/phone.jpg'
import gift from '../../assets/gift.jpg'
import hobbi from '../../assets/forhobbi.jpg'
import discount from '../../assets/discount.jpg'

export default function CarouselImg() {

    const contentStyle = {
        height: '400px',
        borderRadius: "12px",
    };

    return (
        <div>
            <Carousel arrows dotPlacement="left" autoplay={{ dotDuration: true }}>
                <div>
                    <img src={mart} alt="" style={contentStyle} />
                </div>
                <div>
                    <img src={phone} alt="" style={contentStyle} />
                </div>
                <div>
                    <img src={gift} alt="" style={contentStyle} />
                </div>
                <div>
                    <img src={hobbi} alt="" style={contentStyle} />
                </div>
                <div>
                    <img src={discount} alt="" style={contentStyle} />
                </div>
            </Carousel>
        </div>
    )
}
