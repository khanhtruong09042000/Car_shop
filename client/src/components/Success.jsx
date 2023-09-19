import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Success = () => {
  const notify = () => toast.warn("Wow so easy !",{
      position: "bottom-center"
  });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
};

export default Success;
