import React, { Component, SyntheticEvent, useState } from 'react';

interface AccountProps {
  name: string,
}

const Account:React.FC<AccountProps> = ({ name }) => {
  const [state, setState] = useState({
    balance: 0,
    value: ''
  });

  const handleDepositClick = (e: React.MouseEvent) => {
    e.preventDefault();
    let newBalance = state.balance +parseInt(state.value);
      setState({
        ...state,
        balance: newBalance,
        value: ''
      });
    }

    const handleWithdrawClick = (e: React.MouseEvent) => {
      e.preventDefault();
      let newBalance = state.balance - parseInt(state.value);
      if (newBalance <0) {
        alert("You don't have that kind of money")
        return;
      }
        setState({
          ...state,
          balance: newBalance,
          value: ''
        });
      }

  const onChangeHandler = (e: SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value
    if (parseInt(value) >= 0) {
      setState({ ...state, value });
    }
  }

    let balanceClass = 'balance';
    if (state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{name}</h2>
        <div className={balanceClass}>${state.balance}</div>
        <input type="number" placeholder="enter an amount" value={state.value} onChange={onChangeHandler}/>
        <input type="button" value="Deposit" onClick={handleDepositClick} />
        <input type="button" value="Withdraw" onClick={handleWithdrawClick} />
      </div>
    )
  
}

export { Account }