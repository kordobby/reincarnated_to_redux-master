import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSpell, delSpell } from "../redux/modules/spellReducer";


const SpellBook = () => {

  const spellList = useSelector((state) => state.spellReducer.list);
  console.log(spellList);

  const [spell, setSpell] = useState("");
  const dispatch = useDispatch("");

  const getSpellHandler = (event) => {
    const { value } = event.target;
    setSpell(value);  
  }

  const addSpellHandler = (event) => {
    event.preventDefault();
    dispatch(addSpell(spell));
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
      <form>
        <input type = "text" onChange = {getSpellHandler} placeholder ="주문을 입력해주세요"/>
        <button onClick = {addSpellHandler}> 👻 주문 입력 👻 </button>
        {Spells}
      </form>
    </>
  )
}

export default SpellBook;
