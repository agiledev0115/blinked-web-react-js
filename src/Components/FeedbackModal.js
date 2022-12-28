import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { AvatarPlaceholder } from '../assets/img/index';
import { getOrderStyle } from '../helpers/getRowStyles';
import moment from 'moment';

export default function FeedbackModal({ show, setShow, selected }) {
    const [showComments, setShowComments] = useState(true);
    const [comments, setComments] = useState([{ user: "Leslie Alexander", date: '2022-03-03 11:40:00', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' }])
    const [newComment, setNewComment] = useState('')

    const handleSubmit = () => {
        setComments([...comments, { user: 'Mikky brasi', date: new Date().toISOString(), comment: newComment }]);
        setNewComment('');
    };

    return (
        <Modal show={show} centered size="lg" className="feedback-modal">
            <Modal.Header className="header">
                <h3 className="title">Feedback</h3>
                <div className="close" onClick={() => setShow(false)}>
                    <MdClose color="#3842B0" />
                </div>
            </Modal.Header>
            <Modal.Body className="body">
                <div className="info">
                    <div className="row">
                        <p className="item">Issue created by</p>
                        <p className="value">Carolyn Harvey</p>
                    </div>
                    <div className="row">
                        <p className="item">Budget</p>
                        <p className="value budget">₦{parseInt(selected.budget).toFixed(2)}</p>
                    </div>
                    <div className="row">
                        <p className="item">Status</p>
                        <p className="value">
                            <span className="status" style={getOrderStyle(selected.status)}>
                                {selected.status}
                            </span>
                        </p>
                    </div>
                    <div className="row">
                        <p className="item">Sent</p>
                        <p className="value">05-5-2021</p>
                    </div>
                    <div className="row">
                        <p className="item">Query</p>
                        <p className="value">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div>
                </div>
                <form className="form">
                    <div className="buttons">
                        <button className="comments" type="button" onClick={() => setShowComments(true)}>Comments</button>
                        <button className="activities" type="button" onClick={() => setShowComments(false)}>Activities</button>
                    </div>
                    {showComments &&
                        <div className="comment-section">
                            {comments.map((comment) => (
                                <div className="comment">
                                    <img className="image" src={AvatarPlaceholder} />
                                    <div className="content">
                                        <div className="user-info">
                                            <p>{comment.user}</p>
                                            <span>{moment(comment.date).calendar()}</span>
                                        </div>
                                        <p className="text">{comment.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    <div className="input">
                        <img className="image" src={AvatarPlaceholder} />
                        <textarea className="textarea" placeholder="Add a comment" value={newComment} onChange={e => setNewComment(e.target.value)} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="footer">
                <button className="resolved" onClick={() => setShow(false)}>Mark as resolved</button>
                <button className="submit" onClick={() => handleSubmit()}>Send reply</button>
            </Modal.Footer>
        </Modal>
    )
};