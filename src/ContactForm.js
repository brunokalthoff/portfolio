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

    const handleSubmit = e => {
        e.preventDefault();

        setButtonVal('...');

        setTimeout(() => {
            setName('');
            setEmail('');
            setPhone('');
            setNote('');
            setButtonVal('Message sent!')
            setButtonBg('var(--successGreen)')
        }, 2000)
    }

    useEffect(() => {
        setButtonBg('var(--lightBlue)');
        setButtonVal('Send');
    }, [focus]);

    return (

        <motion.form
            className="contact-form contact-card" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <h4>Message Me</h4>
            <motion.label layout htmlFor="name"><input value={name} onChange={e => setName(e.target.value)} onFocus={() => setFocus("name")} onBlur={() => setFocus(null)} name="name" type="text" /> <motion.span layout="position" className={focus === "name" || name !== "" ? "contact-form-span-active" : ""} style={focus !== 'name' ? { color: 'var(--white)' } : {}}>Name*</motion.span> </motion.label>
            <motion.label layout htmlFor="email"><input value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocus("email")} onBlur={() => setFocus(null)} name="email" type="text" /><motion.span layout="position" className={focus === "email" || email !== "" ? "contact-form-span-active" : ""} style={focus !== 'email' ? { color: 'var(--white)' } : {}}>Email*</motion.span></motion.label>
            <motion.label layout htmlFor="phone"><input value={phone} onChange={e => setPhone(e.target.value)} onFocus={() => setFocus("phone")} onBlur={() => setFocus(null)} name="phone" type="text" /><motion.span layout="position" className={focus === "phone" || phone !== "" ? "contact-form-span-active" : ""} style={focus !== 'phone' ? { color: 'var(--white)' } : {}}>Phone</motion.span></motion.label>
            <motion.label style={focus === "note" || note !== "" ? { height: "auto" } : {}} layout htmlFor="note"><textarea value={note} rows={focus === 'note' || note !== "" ? 5 : 1} onChange={e => setNote(e.target.value)} onFocus={() => setFocus("note")} onBlur={() => setFocus(null)} name="note" /><motion.span layout="position" className={focus === "note" || note !== "" ? "contact-form-span-active" : ""} style={focus !== 'note' ? { color: 'var(--white)' } : {}}>Note</motion.span></motion.label>
            <motion.input layout style={{ background: buttonBg }} value={buttonVal} type="submit" onClick={handleSubmit} disabled={buttonVal === "Send" ? false : true} />
            {buttonBg === 'var(--successGreen)' && <p> Thanks for your message! I'll get back to you!</p>}
        </motion.form>


    );
}

export default ContactForm;