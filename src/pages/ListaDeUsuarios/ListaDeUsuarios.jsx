import { useEffect, useState } from "react";
import CardUsuario from "../../Components/CardUsuario/CardUsuario";
import axios from "axios";

function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    BuscarUsuarios();
  }, []);

  async function BuscarUsuarios() {
    const response = await axios.get(
      "https://localhost:44327/api/Usuarios/listar"
    );

    if (response.status != 200) {
      alert("Erro ao listar usuários");
      return;
    }
    console.log(response);
    setUsuarios(response.data);
  }

  return (
    <div>
      <h1 style={{ fontFamily: "papyrus", padding: 14, fontWeight: 500, textAlign: "center", color: "cyan", }}> Lista de Usuários</h1>
      {usuarios.map((usuario) => (
        <CardUsuario nome={usuario.nome} email={usuario.email}></CardUsuario>
      ))}
    </div>
  );
}

export default ListaDeUsuarios;