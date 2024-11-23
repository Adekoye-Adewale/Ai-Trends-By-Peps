import React from 'react'
import PopUpBg from './popUpBg'
import ContactForm from '../forms/contactForm'

export default function ContactPopUp({ setOpenPop, openPop}) {

        const handleClickClose = () => {
                setOpenPop(!openPop);
        }

        return (
                <PopUpBg clickClose={handleClickClose}>
                        <ContactForm
                                handleClickClose={handleClickClose}
                        />
                </PopUpBg>
        )
}
