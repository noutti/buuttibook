import React from "react";
import Modal from "react-modal";
import '../App.css';

Modal.setAppElement('#root');

const NotificationModal = (props) => {
    const {
        title,
        setVisible,
        visible,
        message,
    } = props;

    const OKClicked = () => {
        setVisible(false);
    }

    return (
        <Modal
            isOpen={visible}
            onRequestClose={() => setVisible(null)}
            contentLabel="Notification"
            portalClassName="modal"
            >
            <div className="Notification">
                <h2>{title}</h2>
                {message}
                <p><button onClick={() => OKClicked()}>OK</button></p>
            </div>
        </Modal>
    )
}

export default NotificationModal
 
