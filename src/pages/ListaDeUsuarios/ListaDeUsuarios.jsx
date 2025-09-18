import CardUsuario from '../../components/CardUsuario';

function ListaDeUsuarios() {
    return (
        <div>
          <h2>Lista de usuários</h2>
          <CardUsuario nome="Lilssen Kleber" email="lilssends@gmail.com">  </CardUsuario>
          <CardUsuario nome="Raquel Mattozo" email="raquelmattozods@gmail.com">  </CardUsuario>
          <CardUsuario nome="Matheus Mattozo" email="matheusmattozods@gmail.com">  </CardUsuario>
        </div>
    );
}

export default ListaDeUsuarios;