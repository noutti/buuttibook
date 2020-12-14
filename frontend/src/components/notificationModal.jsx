import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const NotificationModal = (props) => {
    const {
        title,
        setVisible,
        visible,
        message,
    } = props;

    const OKClicked = () => {
        setVisible(null);
    }

    return (
        <Modal
            isOpen={visible}
            onRequestClose={() => setVisible(null)}
            contentLabel="Notification"
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
 
