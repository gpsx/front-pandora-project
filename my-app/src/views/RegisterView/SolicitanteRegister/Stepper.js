import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Stepper, StepLabel, Step, Button, Typography } from "@material-ui/core";
import SolicitanteForm from './SolicitanteForm.js';
import FormAddress from './FormAddress.js';
import StepConnector from "./../StepConnector";
import service from './../../../service/userService'

const styles = theme => ({
  root: {
    width: "90%"
  },
  form: {
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3.3),
    width: theme.spacing(29.5),
    backgroundColor: '#0B3C5D',
    color: 'white',
    '&:hover': {
      backgroundColor: '#328CC1',
    },
    '&:disabled': {
      backgroundColor: '#CECECE',
    }
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing(3.5),
  },
  completed: {
    color: "#328CC1",
    zIndex: 1,
    fontSize: 18
  },
  active: {
    color: "#328CC1"
  },
});



class SolicitanteStepper extends React.Component {

  state = {
    activeStep: 0,
    skipped: new Set(),
    usuario: {
      nome: '',
      email: '',
      cnpj: '',
      cpf: '',
      telefone: '',
      senha: '',
      senhaRepeticao: '',
    },
    userId: '',
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      cep: '',
      bairro: '',
    }
  };

  globalChanges(key, value) {
    let changeUser = this.state.usuario;
    if (key === "nome") {
      changeUser.nome = value
    }
    if (key === "email") {
      changeUser.email = value
    }
    if (key === "cnpj") {
      changeUser.cnpj = value
    }
    if (key === "cpf") {
      changeUser.cpf = value
    }
    if (key === "telefone") {
      changeUser.telefone = value
    }
    if (key === "senha") {
      changeUser.senha = value
    }
    if (key === "senhaRepeticao") {
      changeUser.senhaRepeticao = value
    }
    this.setState({ usuario: changeUser });
  }

  globalChangesEndereco(key, value) {
    let changeAdress = this.state.endereco;
    if (key === "rua") {
      changeAdress.rua = value;
    }
    if (key === "numero") {
      changeAdress.numero = value;
    }
    if (key === "complemento") {
      changeAdress.complemento = value;
    }
    if (key === "cep") {
      changeAdress.cep = value;
    }
    if (key === "bairro") {
      changeAdress.bairro = value;
    }
    this.setState({ endereco: changeAdress })
  }

  validarUsuario() {
    let usuario = this.state.usuario;
    const msgs = []

    if (!usuario.nome) {
      msgs.push("O campo nome é obrigatório!")
    }

    if (!usuario.email) {
      msgs.push("O email é obrigatório!")
    } else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push("Informe um e-mail válido")
    }

    if (!usuario.senha) {
      msgs.push("O campo senha é obrigatório")
    }

    if (!usuario.senha || !usuario.senhaRepeticao) {
      msgs.push("Digite a senha duas vezes!")
    } else if (this.state.senha !== this.state.senhaRepeticao) {
      msgs.push("As senhas não coincidem")
    }

    return msgs;
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SolicitanteForm globalChanges={this.globalChanges.bind(this)} />;
      case 1:
        return <FormAddress globalChanges={this.globalChangesEndereco.bind(this)} />;
      default:
        return "Passo desconhecido";
    }
  }

  handleNext = () => {
    const { activeStep } = this.state;
    console.log(activeStep)

    //Step do primeiro cadastro de usuário
    if (activeStep === 0) {
      let erros = this.validarUsuario();

      if (erros.length === 0) {
        //Enviando serciço de cadastro de solicitante
        service.registerSolicitante({
          nome: this.state.usuario.nome,
          senha: this.state.usuario.senha,
          email: this.state.usuario.email,
          cpf: this.state.usuario.cpf,
          telefone: this.state.usuario.telefone,
          cnpj: this.state.usuario.cnpj,
        }).then(response => {
          console.log(response.data)
          this.setState({
            activeStep: activeStep + 1,
            userId: response.data.id
          });
        }).catch(erro => {
          //LANÇAR TOAST DE ERRO
          console.log(erro.response.data)
        })
      } else {
        erros.forEach((erro, index) => {
          //TOAST DE ERRO
        });
      }
    } else if (activeStep === 1) {
      service.registerEndereco({
        rua: this.state.endereco.rua,
        numero: this.state.endereco.numero,
        complemento: this.state.endereco.complemento,
        cep: this.state.endereco.cep,
        bairro: this.state.endereco.bairro,
        usuario: this.state.userId
      }).then(response => {
        console.log(response.data)
        this.setState({
          activeStep: activeStep + 1,
        });
      }).catch(erro => {
        console.log(erro.response.data)
      })
    }

  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = ["", ""];
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} connector={<StepConnector />}>
          {steps.map((label) => {
            const props = {};
            return (
              <Step key={label} {...props}>
                <StepLabel
                  StepIconProps={{
                    classes: { root: classes.stepIcon, active: classes.active, completed: classes.completed }
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Agradecemos a paciência! Que tal logar para checar a ferramenta?
              </Typography>
              <Button onClick={this.handleReset} component="a" href="/#/login" className={classes.button}>
                Ir para o Login
              </Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>
                  {this.getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Voltar
                </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

SolicitanteStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SolicitanteStepper);