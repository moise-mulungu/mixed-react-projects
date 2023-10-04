import { useState, useEffect } from "react";

import DetailModal from "./detail-modal";
import Table from "./table";


export default function Pokedex(props) {
  const { data, types, weaknesses } = props;

  const [openDetail, setOpenDetail] = useState(false);
  const [detailPokemon, setDetailPokemon] = useState(undefined);



  return (
    <>
      <DetailModal
        data={data}
        pokemon={detailPokemon}
        setPokemon={setDetailPokemon}
        open={openDetail}
        setOpen={setOpenDetail}
      />
      <Table
        data={data}
        types={types}
        weaknesses={weaknesses}
        setOpenDetail={setOpenDetail}
        setDetailPokemon={setDetailPokemon}
      />
    </>
  );
}
