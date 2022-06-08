import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSpell, delSpell } from "../redux/modules/spellReducer";

const SpellBook = () => {

  const spellList = useSelector((state) => state.spellReducer.list);
  console.log(spellList);

  const [spell, setSpell] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch("");

  const getSpellHandler = (event) => {
    const { value } = event.target;
    setSpell(value); 
    setInput(value); 
  }

  const addSpellHandler = (event) => {
    event.preventDefault();
    if ( event.target.value === "" ) {
      return
    } 
    dispatch(addSpell({id : spellList.length +1, spell}));
    setInput(""); 
  }

  const delSpellHandler = (payload) => {
    dispatch(delSpell(payload));
  }

  const Spells = spellList.map((value, index) => (
    <div key = {index}>
      <span>💖 {value}</span>
      <button onClick = {() => delSpellHandler(index)}>🍓 삭제</button>
      <button>🍒 수정</button>
    </div>
  ))

  return (
    <>
      <form onSubmit = {addSpellHandler}>
        <label htmlFor = "expire">마법 주문 입력하기</label>
        <input id = "expire" type = "text" value = {input} onChange = {getSpellHandler} placeholder ="주문을 입력해주세요"/>
        <button type = "submit" > 👻 주문 입력 👻 </button>
        {Spells}
      </form>
    </>
  )
}

export default SpellBook;
