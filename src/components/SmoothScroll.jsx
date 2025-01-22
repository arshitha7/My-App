
import { Lenis } from '@studio-freight/react-lenis';
import PropTypes from 'prop-types';


const SmoothScroll = ({ children }) => {
  return (
    <Lenis root options={{
    //   duration: 1.2, // Adjust duration for smoothness
      smoothWheel: true,
      smoothTouch: true,
    }}>
      {children}
    </Lenis>
  );
};

SmoothScroll.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default SmoothScroll;
