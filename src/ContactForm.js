import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [focus, setFocus] = useState(null);
    const [buttonBg, setButtonBg] = useState('var(--lightBlue)');
    const [buttonVal, setButtonVal] = useState('Send');

    const resetInput = (buttonVal, buttonBg) => {
        setName('');
        setEmail('');
        setPhone('');
        setNote('');
        setButtonVal(buttonVal);
        setButtonBg(buttonBg);
    }

    useEffect(() => {
        setButtonBg('var(--lightBlue)');
        setButtonVal('Send');
    }, [focus]);

    const handleSubmit = e => {
        e.preventDefault();
        if (name === '' && email === '' && phone === '' && note === '') {
            return resetInput('Hmm...', 'var(--inbetweenYellow)');
        }
        const data = {
            Name: name,
            Email: email,
            Phone: phone,
            Note: note,
            Date: new Date(),
        };
        setButtonVal('...');

        fetch("https://sheet.best/api/sheets/7553d114-1ff7-4ea3-a09d-397bb1238976", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((r) => r.json())
            .then((data) => {
                resetInput('Message sent!', 'var(--successGreen)');
            })
            .catch((error) => {
                resetInput('Error!', 'var(--failureRed)')
            });




    }

    return (

        <motion.form
            className="contact-form contact-card">
            <h4>Message Me <span style={{ fontSize: '1.4rem' }}>📨</span></h4>
            <motion.label layout htmlFor="name"><input value={name} onChange={e => setName(e.target.value)} onFocus={() => setFocus("name")} onBlur={() => setFocus(null)} name="name" type="text" /> <motion.span layout="position" className={focus === "name" || name !== "" ? "contact-form-span-active" : ""} style={focus !== 'name' ? { color: 'var(--white)' } : {}}>Name</motion.span> </motion.label>
            <motion.label layout htmlFor="email"><input value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocus("email")} onBlur={() => setFocus(null)} name="email" type="text" /><motion.span layout="position" className={focus === "email" || email !== "" ? "contact-form-span-active" : ""} style={focus !== 'email' ? { color: 'var(--white)' } : {}}>Email</motion.span></motion.label>
            <motion.label layout htmlFor="phone"><input value={phone} onChange={e => setPhone(e.target.value)} onFocus={() => setFocus("phone")} onBlur={() => setFocus(null)} name="phone" type="text" /><motion.span layout="position" className={focus === "phone" || phone !== "" ? "contact-form-span-active" : ""} style={focus !== 'phone' ? { color: 'var(--white)' } : {}}>Phone</motion.span></motion.label>
            <motion.label style={focus === "note" || note !== "" ? { height: "auto" } : {}} layout htmlFor="note"><textarea value={note} rows={5} onChange={e => setNote(e.target.value)} onFocus={() => setFocus("note")} onBlur={() => setFocus(null)} name="note" /><motion.span layout="position" className={focus === "note" || note !== "" ? "contact-form-span-active" : ""} style={focus !== 'note' ? { color: 'var(--white)' } : {}}>Note</motion.span></motion.label>
            <motion.input layout style={{ background: buttonBg }} value={buttonVal} type="submit" onClick={handleSubmit} disabled={buttonVal === "Send" ? false : true} />
            {buttonBg === 'var(--successGreen)' && <p> Thanks for your message! I'll get back to you!</p>}
            {buttonBg === 'var(--failureRed)' && <p> There was an error sending your message :( Please contact me directly via my contact detals above, thanks!</p>}
            {buttonBg === 'var(--inbetweenYellow)' && <p>Please fill out at least one field ¯\_(ツ)_/¯</p>}
        </motion.form>

    );
}

export default ContactForm;