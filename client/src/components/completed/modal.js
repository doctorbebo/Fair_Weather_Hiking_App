import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './modal.css';

const Modal = ({customClass, show, closeCallback, onChangeCallback, commentText, cancelCallback }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
    <div className="overlay" onClick={closeCallback}></div>
    <div className="modal_content">
        <form className="journalEntry">
            <label class ="inputBox">
                Trip Report
                <input class="inputText" type="text" name="commentBox" id="commentBox" onChange={onChangeCallback} value={commentText} />
            </label>
            <Link class="waves-effect waves-light btn hoverable blue accent-3" id="submit-complete" value="Submit" onClick={closeCallback}>Submit</Link>
            <Link class="waves-effect waves-light btn hoverable red accent-3" id="cancel-submit" value="cancel" onClick={cancelCallback}>Cancel</Link>

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
  commentText: PropTypes.string,
  cancelCallback: PropTypes.func,
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