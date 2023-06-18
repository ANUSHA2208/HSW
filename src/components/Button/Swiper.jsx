import { Carousel } from 'antd';
import img from '../../assets/images/IMG_20160927_141342219.jpg';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  position: 'relative',
};

const textContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const Swiper = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img src={img} alt="Carousel Image" />
        <div style={textContainerStyle}>
          <p style={{ fontSize: '96',fontWeight:1000 }}>Welcome to <span className='text-[#C20412]'>Hubli Steel Works</span></p>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={img} alt="Carousel Image" />
        <div style={textContainerStyle}>
          <p style={{ fontSize: '24px' }}>Your Text Here</p>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={img} alt="Carousel Image" />
        <div style={textContainerStyle}>
          <p style={{ fontSize: '24px' }}>Your Text Here</p>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={img} alt="Carousel Image" />
        <div style={textContainerStyle}>
          <p style={{ fontSize: '24px' }}>Your Text Here</p>
        </div>
      </h3>
    </div>
  </Carousel>
);

export default Swiper;
