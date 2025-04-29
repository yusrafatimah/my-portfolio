import React, { useState } from 'react';
import { useRef } from 'react';
import { Snackbar } from '@mui/material';
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  Container,
  Title,
  Wrapper,
} from './styles';

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  console.log({ email, setIsSending });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('here');
    window.open(
      `mailto:mousuleman@gmail.com?subject=${subject}&body=${message}`,
    );
  };

  return (
    <Container id="ContactSection">
      <Wrapper>
        <ContactForm ref={form}>
          <Title>Contact Me</Title>
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            onChange={e => setEmail(e.target.value)}
          />
          <ContactInput
            placeholder="Subject"
            name="subject"
            onChange={e => setSubject(e.target.value)}
          />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            onChange={e => setMessage(e.target.value)}
          />
          <ContactButton
            type="submit"
            value={isSending ? 'Sending, Please wait!' : 'Send'}
            onClick={handleSubmit}
          />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
