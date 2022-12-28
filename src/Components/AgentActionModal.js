import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { Memoji } from '../assets/img';
import { getOrderStyle } from "../helpers/getRowStyles";

export default function AgentActionModal({ show, setShow, action, selected }) {
    const [content, setContent] = useState({});
    const [focus, setFocus] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getContent = () => {
            switch (action) {
                case 'Add': return (
                    setContent({
                        title: 'Add Agent',
                        image: 'Add Agent photo',
                        button: "Add Agent",
                        buttonStyle: { color: '#FFF', backgroundColor: '#3842B0' }
                    })
                );
                case 'Edit': return (
                    setContent({
                        title: 'Edit Agent',
                        image: 'Add Agent photo',
                        button: "Save Changes",
                        buttonStyle: { color: '#FFF', backgroundColor: '#3842B0' }
                    })
                );
                case 'Suspend': return (
                    setContent({
                        title: 'Confirm suspention',
                        subtitle: 'Are you sure you want to suspend this agent',
                        text: "Suspending this agent means they will no longer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
                        button: "Suspend Agent",
                        buttonStyle: { color: '#FFF', backgroundColor: '#FF4554' }
                    })
                );
                case 'Remove': return (
                    setContent({
                        title: 'Confirm removal',
                        subtitle: 'Are you sure you want to remove this agent',
                        text: "Removing this agent means they will no longer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
                        button: "Remove Agent",
                        buttonStyle: { color: '#FFF', backgroundColor: '#FF4554' }
                    })
                )
                default: return 'Agent'
            }
        };
        getContent();
        if (action === 'Edit' && selected !== null) {
            setFirstName(selected.agentName || '');
            setLastName(selected.agentN || '');
            setEmail(selected.email || '');
            setPhone(selected.phone || '');
            setImage(selected.image || null);
        }
        else {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setImage(null)
        }
    }, [action]);

    const handleReaderLoaded = (readerEvt) => {
        if (readerEvt.target === null) return;
        const { result } = readerEvt.target;
        setImage(btoa(result));
    };

    const handleImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const inputRef = useRef(null);
    const onInputClick = () => inputRef.current.click();

    return (
        <Modal show={show} centered size={action === 'Suspend' || action === 'Remove' ? 'md' : 'lg'} className="agent-action-modal">
            <Modal.Header className="header">
                <h3 className="title">{content.title}</h3>
                <div className="close" onClick={() => setShow(false)}>
                    <MdClose color="#3842B0" />
                </div>
            </Modal.Header>
            {action === 'Suspend' || action === 'Remove' ?
                <Modal.Body className="body">
                    <h4 className="subtitle">{content.subtitle}</h4>
                    <p className="text">{content.text}</p>
                </Modal.Body> : null
            }
            {action === 'Add' || action === 'Edit' ?
                <Modal.Body className="body">
                    <form className="form">
                        {action === 'Add' && (<p className="image-label">{image}</p>)}
                        {action === 'Edit' && (
                            <p className="image-label">
                                {selected.agentName}
                                <span className="mx-2 px-2 rounded-pill" style={getOrderStyle(selected.status)}>
                                    {selected.status}
                                </span>
                            </p>
                        )}
                        <div className="image-container">
                            <div className="bg">
                                <img src={image ? `data:image/png;base64,${image}` : Memoji} alt="Emoji placeholder" className="img" />
                                <input
                                    className="hidden"
                                    accept="image/png, image/jpeg, image/jpg, image/webp"
                                    ref={inputRef}
                                    onChange={(e) => handleImg(e)}
                                    type="file" />
                            </div>
                            <button className="photo-btn" type="button" onClick={() => onInputClick()}>Edit photo</button>
                        </div>
                        <div className="row">
                            <div className="group">
                                <label className='label' style={{ display: focus === 'firstName' || firstName.length > 0 ? 'block' : 'none' }}>First name</label>
                                <input
                                    className='input'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onFocus={() => setFocus('firstName')}
                                    onBlur={() => setFocus('')}
                                />
                            </div>
                            <div className="group">
                                <label className='label' style={{ display: focus === 'lastName' || lastName.length > 0 ? 'block' : 'none' }}>Last name</label>
                                <input
                                    className='input'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    onFocus={() => setFocus('lastName')}
                                    onBlur={() => setFocus('')}
                                />
                            </div>
                        </div>
                        <div className="group">
                            <label className='label' style={{ display: focus === 'email' || email.length > 0 ? 'block' : 'none' }}>Email address</label>
                            <input
                                className='input'
                                placeholder='Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocus('email')}
                                onBlur={() => setFocus('')}
                            />
                        </div>
                        <div className="group">
                            <label className='label' style={{ display: focus === 'phone' || phone.length > 0 ? 'block' : 'none' }}>Phone Number</label>
                            <input
                                className='input'
                                placeholder='Phone Number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onFocus={() => setFocus('phone')}
                                onBlur={() => setFocus('')}
                            />
                        </div>
                    </form>
                </Modal.Body> : null
            }
            <Modal.Footer className="footer">
                <button className="cancel" onClick={() => setShow(false)}>Cancel</button>
                <button className="submit" style={content.buttonStyle}>{content.button}</button>
            </Modal.Footer>
        </Modal>
    )
}