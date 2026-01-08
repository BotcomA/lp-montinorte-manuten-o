import "./App.css";
import logo from "./assets/logo-montenorte.png";
import logo2 from "./assets/logo-montenorte-rodape.png";

import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function App() {
  return (
    <div className="page">
      <main className="conteudo">
        <div className="box-manutencao">
          <p className="texto-superior">Estamos em manutenção...</p>

          <div className="container-manutencao">
            <div className="lado-imagem">
              <img src={logo} alt="Logo Montenorte" className="logo" />
            </div>
          </div>
        </div>
      </main>

      <footer className="rodape">
        <div className="conteiner-rodape">
          <div className="rodape-esquerdo">
            <img src={logo2} alt="Logo Montenorte" className="logo-rodape" />

            <div className="redes-sociais">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
              <FaTiktok />
            </div>
          </div>

          <div className="rodape-direito">
            <div className="info-contato">
              <p>
                <MdLocationOn /> Cianorte – Paraná | Atendimento regional e nacional
              </p>
              <p>
                <MdEmail /> orcamento@montinorte.com.br
              </p>
              <p>
                <MdPhone /> (44) 3631-5015 | (44) 99879-8448
              </p>
            </div>
          </div>
        </div>

        <div className="linha" />

        <div className="copyright">
          © Montinorte – Soluções Industriais Integradas.
          <br />
          Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
