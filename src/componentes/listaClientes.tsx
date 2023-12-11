import { Component } from "react";
import "./listaClientes.css";
import Person from "../static/person.png";

type Servico = {
  id: number;
  nome: string;
  valor: number;
};

type Pet = {
  nome: string;
  raca: string;
  servicoIds: number[];
};

type Cliente = {
  id: number;
  nome: string;
  nomePet: string;
  pets: Pet[];
  telefone: string;
  email: string;
};

type State = {
  clientes: Cliente[];
};


type Props = {
  tema: string;
};

export default class ListaCliente extends Component<Props, State> {

  servicos: Servico[] = [
    { id: 1, nome: "Banho", valor: 30.0 },
    { id: 2, nome: "Tosa", valor: 40.0 },
    { id: 3, nome: "Vacina", valor: 50.0 },
    { id: 4, nome: "Corte de unhas", valor: 15.0 },
    { id: 5, nome: "Consulta veterinária", valor: 60.0 },
    { id: 6, nome: "Limpeza de gaiola", valor: 20.0 },
  ];

  constructor(props: Props) {
    super(props);
    this.state = {
      clientes: [
        {
          id: 1,
          nome: "Cliente 1",
          nomePet: "Bob",
          pets: [{ nome: "Cachorro", raca: "Labrador", servicoIds: [1, 2] }],
          telefone: "(11) 9876-5432",
          email: "cliente1@email.com",
        },
        {
          id: 2,
          nome: "Cliente 2",
          nomePet: "Marshal",
          pets: [{ nome: "Gato", raca: "Persa", servicoIds: [3] }],
          telefone: "(22) 8765-4321",
          email: "cliente2@email.com",
        },
        {
          id: 3,
          nome: "Cliente 3",
          nomePet: "Nemo",
          pets: [{ nome: "Peixe", raca: "Beta", servicoIds: [] }],
          telefone: "(33) 7654-3210",
          email: "cliente3@email.com",
        },
        {
          id: 4,
          nome: "Cliente 4",
          nomePet: "Blue",
          pets: [{ nome: "Pássaro", raca: "Calopsita", servicoIds: [4] }],
          telefone: "(44) 6543-2109",
          email: "cliente4@email.com",
        },
        {
          id: 5,
          nome: "Cliente 5",
          nomePet: "Pito",
          pets: [{ nome: "Coelho", raca: "Holandês", servicoIds: [5] }],
          telefone: "(55) 5432-1098",
          email: "cliente5@email.com",
        },
        {
          id: 6,
          nome: "Cliente 6",
          nomePet: "Xico",
          pets: [{ nome: "Hamster", raca: "Sírio", servicoIds: [6] }],
          telefone: "(66) 4321-0987",
          email: "cliente6@email.com",
        },
      ],
    };
  }


  render() {
    const { tema } = this.props;

    return (
      <div className="blog-card-container">
        {this.state.clientes.map((cliente) => (
          <div key={cliente.id} className="blog-card">
            <h3 className="blog-card-title">{cliente.nome}</h3>
            <p>
              Telefone: <span className="blog-card-author">{cliente.telefone}</span>
            </p>
            <p>
              Email: <span className="blog-card-author">{cliente.email}</span>
            </p>
            <hr className="blog-card-separator" />
            <div className="blog-card-footer">
            </div>
            {cliente.pets.map((pet) => (
              <div key={pet.nome} className="pet-container">
                <p>Nome: {pet.nome}</p>
                <p>Raça: {pet.raca}</p>
                {pet.servicoIds.map((servicoId) => {
                  const servico = this.servicos.find((s) => s.id === servicoId);
                  return (
                    servico && (
                      <div key={servico.id} className="servico-container">
                        <p>Serviço: {servico.nome}</p>
                        <p>Valor: R${servico.valor.toFixed(2)}</p>
                      </div>
                    )
                  );
                })}
                <hr className="blog-card-separator" />
              </div>
              
            ))}
          </div>
        ))}
      </div>
    );
  }
}