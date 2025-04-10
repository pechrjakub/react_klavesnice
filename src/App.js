import { useState } from 'react';
import './App.css';

export default function Klavesnice() {
  const[hodnoty, setHodnoty] = useState(""); //"" tady, protože pracuji se stringem
  const[posliTajnouZpravu, setPosliTajnouZpravu] = useState("");
  const kod = "777";

  function zapisHodnotu(i){
    /*console.log(i);*/
    const noveHodnoty = hodnoty + i.toString(); //nedělá tohle nějakou chujovinu? - dělalo, musím to přehodit na string
    if (noveHodnoty === kod){
      setPosliTajnouZpravu("Tajná zpráva: Úkol splněn!");
    }else{
      setPosliTajnouZpravu("");
    }
    setHodnoty(noveHodnoty);
    /*console.log(noveHodnoty);*/
  }

  return (
    <>
      <div className="klavesnice">
        <div className="vstup">
          <Input kZobrazeni={hodnoty}/>
        </div>
        <div className="rada">
          <Tlacitko znaceni="1" onTlacitkoClick={() => zapisHodnotu(1)}/>
          <Tlacitko znaceni="2" onTlacitkoClick={() => zapisHodnotu(2)}/>
          <Tlacitko znaceni="3" onTlacitkoClick={() => zapisHodnotu(3)}/>
        </div>
        <div className="rada2">
          <Tlacitko znaceni="4" onTlacitkoClick={() => zapisHodnotu(4)}/>
          <Tlacitko znaceni="5" onTlacitkoClick={() => zapisHodnotu(5)}/>
          <Tlacitko znaceni="6" onTlacitkoClick={() => zapisHodnotu(6)}/>
        </div>
        <div className="rada3">
          <Tlacitko znaceni="7" onTlacitkoClick={() => zapisHodnotu(7)}/>
          <Tlacitko znaceni="8" onTlacitkoClick={() => zapisHodnotu(8)}/>
          <Tlacitko znaceni="9" onTlacitkoClick={() => zapisHodnotu(9)}/>
        </div>
        <div className="vystup">
          <Vystup tajnaZprava={posliTajnouZpravu}/>
        </div>
      </div>
   </>
  );
}

function Tlacitko({znaceni, onTlacitkoClick}){
  return(
    <button className="tlacitko" onClick={onTlacitkoClick}>{znaceni}</button>
  );
}

function Input({kZobrazeni}){
  return(
    <input className="vstup" value={kZobrazeni} readOnly></input> //prozatím dávám jen ke čtení
  );
}

function Vystup({tajnaZprava}){
  return(
    <h1>{tajnaZprava}</h1>
  );
}