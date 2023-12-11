import { Component } from "react";
import Cachorro from '../static/dog.webp';
import Wave from '../static/wave.svg';
import './telaInicial.css'; // Importe o arquivo de estilo (veja abaixo)

type Props = {
    tema: string;
};

export default class TelaInicial extends Component<Props> {
    render() {
        const { tema } = this.props;

        return (
            <div className="container-fluid d-flex align-items-center justify-content-center tela-inicial" style={{ backgroundColor: tema }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="hero-content text-center text-md-left">
                            <h1 className="display-4" style={{ fontWeight: 'bold' }}>Bem-vindo ao Pet Lovers!</h1>
                            <p className="lead">
                                Aqui você encontra informações sobre clientes e cadastros.
                                Explore e descubra mais sobre nossos serviços.
                            </p>
                            <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#DC8686'}}>
                                Cadastre-se
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#DC8686', borderRadius: '50%', overflow: 'hidden', height: '500px', width: '500px', margin: '100px 150px' }}>
                        <img
                            src={Cachorro}
                            alt="Imagem de destaque"
                            className="img-fluid rounded"
                            
                        />
                    </div>
                </div>
                <div className="col-md-12 d-flex align-items-end justify-content-center" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <img
                        src={Wave}
                        alt="Footer"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        );
    }
}
