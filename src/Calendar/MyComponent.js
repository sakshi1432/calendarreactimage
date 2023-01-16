import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}>
      
  </div>
));

const MyComponent = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
     
    </React.Fragment>
  );
};

export default MyComponent;