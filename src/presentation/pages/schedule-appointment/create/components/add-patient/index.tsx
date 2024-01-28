import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Error } from "@/presentation";

import { ListPatients } from "./list-patients";

import * as S from "./styles";

const LIMIT_PATIENTS = 6;

export function AddPatient() {
  const [patients, setPatients] = useState<string[]>([uuidv4()]);

  const addNewPatient = () => {
    const newPatient = uuidv4();

    setPatients((prevPatients) => [...prevPatients, newPatient]);
  };

  function handleDeletePatient(uid: string) {
    setPatients((state) => state.filter((s) => s !== uid));
  }

  return (
    <Error name="add-patient">
      <S.AddPatient>
        <h3 className="font-12-bold">Cadastre seu time</h3>
        <p className="font-12-medium">Atendemos até 06 pokémons por vez</p>

        <ListPatients
          patients={patients}
          handleDeletePatient={handleDeletePatient}
        />

        {patients.length < LIMIT_PATIENTS && (
          <div>
            <button
              type="button"
              className="add"
              onClick={addNewPatient}
            >
              <span className="text font-12-bold">Adicionar novo pokémon ao time...</span>
              
              <span className="icon font-16">+</span>
            </button>
          </div>
        )}
      </S.AddPatient>
    </Error>
  );
}
