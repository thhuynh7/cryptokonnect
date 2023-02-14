import { useState, useEffect } from 'react';
import { useCollection } from '../../../hooks/useSocialCollection';
import { useAuthContext } from '../../../hooks/useSocialAuthContext';
// import { timestamp } from '../../firebase/config'
import { timestamp } from '../../../firebase';

import { useFirestore } from '../../../hooks/useSocialFirestore';
// import { useHistory } from 'react-router'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import Navbar from '../../../components/social/SocialNavbar';
import Sidebar from '../../../components/social/SocialSidebar';
import OnlineUsers from '../../../components/social/OnlineSocialUsers';

// styles
import './SocialCreate.css';

const categories = [
  { value: 'Cryptocurrencies', label: 'Cryptocurrencies' },
  { value: 'Exchanges', label: 'Exchanges' },
  { value: 'NFTs', label: 'NFTs' },
  { value: 'Stablecoins', label: 'Stablecoins' }
];

export default function Create() {
  // const history = useHistory()
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore('posts');
  const { user } = useAuthContext();
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map(user => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async e => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError('Please select a post category.');
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError('Please assign the post to at least 1 user');
      return;
    }

    const assignedUsersList = assignedUsers.map(u => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id
      };
    });
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    };

    const post = {
      name,
      details,
      assignedUsersList,
      createdBy,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: []
    };

    await addDocument(post);
    if (!response.error) {
      // history.push('/')
      navigate('/social');
    }
  };

  return (
    <div className='App'>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="create-form py-14">
          <h2 className="page-title">Create a new Post</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Post name:</span>
              <input size="58" required type="text" onChange={e => setName(e.target.value)} value={name} />
            </label>
            <br />
            <label>
              <span>Post Details:</span>
              <textarea cols="60" required onChange={e => setDetails(e.target.value)} value={details}></textarea>
            </label>
            <br />
            <label>
              <span>Set posted date:</span>
              <input required type="date" onChange={e => setDueDate(e.target.value)} value={dueDate} />
            </label>
            <label>
              <span>Post category:</span>
              <Select onChange={option => setCategory(option)} options={categories} />
            </label>
            <label>
              <span>Tagged to:</span>
              <Select onChange={option => setAssignedUsers(option)} options={users} isMulti />
            </label>
            <br />
            <button className="btn bg-primary text-white">Add Post</button>

            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </div>
      <OnlineUsers />
    </div>
  );
}
