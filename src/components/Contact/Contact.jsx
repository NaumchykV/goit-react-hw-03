import css from './Contact.module.css';
import { BsPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.contact_item}>
        <div className={css.contact_det}>
            <div className={css.contact_phone}>
            <BsPersonFill style={{ fontSize: '28px' }} />
            <p className={css.name}>{name}</p>
            </div>
        <div className={css.contact_phone}>
            <FaPhone style={{ fontSize: '22px' }} />
            <p className={css.name}>{number}</p>
        </div>
      </div>
      <button type='submit' onClick={() => onDeleteContact(id)} className={css.button}>Delete</button>
    </div>
  );
};


export default ContactItem;