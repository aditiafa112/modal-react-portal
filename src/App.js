import Modals from "./components/Modals/Modals";
import { useState, Fragment } from "react";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleVisibleModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  return (
    <Fragment>
      <h3 onClick={handleVisibleModal}>Tampilkan Modal</h3>
      {isModalVisible && (
        <Modals onClose={handleVisibleModal} isVisible={isModalVisible}>
          Modal tampil dalam {'<div id="modal-box"></div>'}, cek pada inspect element
        </Modals>
      )}
    </Fragment>
  );
};

export default App;
