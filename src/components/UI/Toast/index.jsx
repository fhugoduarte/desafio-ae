import React from 'react';
import ReduxToastr from 'react-redux-toastr'; 

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './styles.css';

const toast = () => (
  <div>
    <ReduxToastr
      timeOut={2000}
      newestOnTop={false}
      preventDuplicates={true}
      position='top-right'
      transitionIn='fadeIn'
      transitionOut='fadeOut'
      progressBar
    />
  </div>
);

export default toast;