import {
  ContactItem,
  ContactText,
  DeleteItemBtn,
} from 'components/ContactListItem/ContactListItem.styled';

function ContactListItem({ name, number, onContactDelete }) {
  return (
    <ContactItem>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteItemBtn type="button" onClick={onContactDelete}>
        Delete
      </DeleteItemBtn>
    </ContactItem>
  );
}

export default ContactListItem;
