import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
// import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { AccountAuth } from '../../context/Authentication';

const PortfolioAddedCrypto = () => {
  const [amounts, setAmounts] = useState([]);
  const { user } = AccountAuth();

  useEffect(() => {
    db.collection('users')
      .doc(`${user?.uid}`)
      .onSnapshot(doc => {
        setAmounts(doc.data()?.portfolioList);
      });
  }, [user?.uid]);

  const cryptoPath = db.collection('users').doc(`${user?.uid}`);

  const deleteCrypto = async selectedId => {
    try {
      const result = amounts.filter(coin => coin.id !== selectedId);
      await cryptoPath.update({
        portfolioList: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const addCrypto = async (selectedId, num) => {
    try {
      let result = amounts;
      // const singleArr = amounts.filter(coin => coin.id === selectedId);
      // let obj = singleArr[0];
      // obj.amount = 99;

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === selectedId) {
          result[i].amount = num;
        }
      }

      await cryptoPath.update({
        portfolioList: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addCrypto(crypto.id, 1);
    // navigate('/portfolio');
  };

  return (
    <div>
      {amounts?.length === 0 ? (
        <p>
          Your Portfolio List is empty. Please go to Homepage to add amounts to your Portfolio List. <Link to="/home">Go to Crypto Search.</Link>
        </p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-t">
              <th className="text-left">Remove</th>
              <th className="text-left">Ranking</th>
              <th className="text-left">Crypto</th>
              <th className="text-left">Price Change 24h</th>
              <th className="text-left">Price</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Total Value</th>
            </tr>
          </thead>
          <tbody>
            {amounts?.map(crypto => (
              <tr key={crypto.id} className="text-left overflow-hidden h-[75px]">
                <td>
                  <AiOutlineClose onClick={() => deleteCrypto(crypto.id)} className="cursor-pointer" />
                </td>
                <td>{crypto?.rank}</td>
                <td>
                  <Link to={`/crypto/${crypto.id}`}>
                    <div className="items-center flex">
                      <img src={crypto?.image} className="w-10 mr-1" alt="/" />
                      <div>
                        <p>{crypto?.name}</p>
                        <p className="text-left text-gray-600 text-small">{crypto?.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </Link>
                </td>

                <td>{crypto?.change < 0 ? <p className="my-4 text-red-500">{crypto?.change.toFixed(4)}%</p> : <p className="my-4 text-green-600">{crypto?.change.toFixed(4)}%</p>}</td>

                <td>${crypto?.price.toLocaleString()}</td>
                <td>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      addCrypto(crypto?.id, e.target.valueAsNumber);
                    }}
                  >
                    <input
                      className="text-danger w-50 bg-gray border border-input px-3 py-1 rounded-xl shadow-xl"
                      onChange={e => {
                        addCrypto(crypto?.id, e.target.valueAsNumber);
                      }}
                      placeholder={crypto?.amount}
                      type="number"
                      min="0"
                    />
                  </form>
                  {/* <IoIosAddCircleOutline onClick={() => addCrypto(crypto?.id, 1)} className="text-xl cursor-pointer" /> */}
                </td>
                <td>
                  <strong>${(crypto?.amount * crypto?.price).toLocaleString()}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PortfolioAddedCrypto;
