import React from 'react';
import PropTypes from 'prop-types';

import './modal.css';

const Modal = ({customClass, show, closeCallback, onChangeCallback, cancelCallback, commentText }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
    <div className="overlay" onClick={closeCallback}></div>
    <div className="title">Hikers Journal</div>
    <div className="modal_content">
        <form className="journalEntry">
            <label>
                Notes:
                <input type="text" name="commentBox" id="commentBox" onChange={onChangeCallback} value={commentText} />
            </label>
            <input type="button" id="submit-complete" onClick={closeCallback} value="Submit" />
            <input type="button" id="cancel-submit-complete" onClick={cancelCallback} value="cancel" />
        </form>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func,
  onChangeCallback: PropTypes.func,
  cancelCallback: PropTypes.func,
  commentText: PropTypes.string,
};

Modal.defaultProps = {
  customClass: '',
  show: false,
  closeCallback: () => (false),
  onChangeCallback: () => (false),
  cancelCallback: () => (false),
  commentText: '',
};

export default Modal;