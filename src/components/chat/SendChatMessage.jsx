import React, { useState } from 'react';
import { auth, db } from '../../firebase';
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import firebase from 'firebase';
import { useAuthContext } from '../../hooks/useSocialAuthContext';

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl relative bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`
};

const SendChatMessage = ({ scroll }) => {
  const { user } = useAuthContext();
  const [input, setInput] = useState('');

  const sendMessage = async e => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid message');
      return;
    }
    // const { uid, displayName } = auth.currentUser;
    const { uid  } = auth.currentUser;
    await 
    // addDoc(collection(db, 'messages'), 
    db.collection("messages").add(    
    {
      text: input,
      // name: firebase.auth().currentUser.email,
      name: user.displayName,
      uid,
      // timestamp: serverTimestamp()
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input value={input} onChange={e => setInput(e.target.value)} className={style.input} type="text" placeholder="Message" />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendChatMessage;
