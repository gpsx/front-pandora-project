import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Stepper, StepLabel, Step, Button, Typography } from "@material-ui/core";
import UsuarioForm from './../forms/UsuarioForm';
import AdressForm from './../forms/AdressForm';
import { QontoConnector, QontoStepIcon } from './QontoStepIcon';
import service from '../../../service/userService'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { validarUsuario } from '../../../utils/validadores'
import Backdrop from '../../../components/Backdrop'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = theme => ({

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
});


class SolicitanteStepper extends React.Component {

  state = {
    activeStep: 0,
    skipped: new Set(),
    usuario: {
      nome: '',
      email: '',
      cnpj: null,
      cpf: null,
      telefone: '',
      senha: '',
      senhaRepeticao: '',
    },
    userId: '',
    endereco: {},
    alert: {
      open: false,
      mensagem: '',
      severity: '',
    },
    backdrop: false,
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
      changeUser.cnpj = value.replace(/[^\d]+/g, '')
    }
    if (key === "cpf") {
      changeUser.cpf = value.replace(/[^\d]+/g, '')
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
    if (key === "erro") {
      this.errorMessage(value)
    }
    if (key === "endereco") {
      this.alteraEndereco(value);
    }
  }

  alteraEndereco(endereco) {
    this.setState({ endereco });
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <UsuarioForm globalChanges={this.globalChanges.bind(this)} />;
      case 1:
        return <AdressForm globalChanges={this.globalChangesEndereco.bind(this)} />;
      default:
        return "Passo desconhecido";
    }
  }

  handleNext = () => {
    const { activeStep } = this.state;
    console.log(activeStep)

    //Step do primeiro cadastro de usuário
    if (activeStep === 0) {
      let erros = validarUsuario(this.state.usuario);

      if (erros.length === 0) {
        this.setState({ backdrop: true });
        let novoUsuario = {
          nome: this.state.usuario.nome,
          senha: this.state.usuario.senha,
          email: this.state.usuario.email,
          cpf: this.state.usuario.cpf,
          telefone: this.state.usuario.telefone,
        }
        if (!(!this.state.usuario.cnpj)) {
          novoUsuario = {
            ...novoUsuario,
            cnpj: this.state.usuario.cnpj,
          }
        }
        service.registerSolicitante(novoUsuario)
          .then(response => {
            this.setState({ backdrop: false });
            this.sucessMessage();
            console.log(response.data)
            this.setState({
              activeStep: activeStep + 1,
              userId: response.data.id
            });

          }).catch(erro => {
            this.setState({ backdrop: false });
            this.errorMessage(erro.response.data)
            console.log(erro.response.data)
          })

      } else {
        erros.forEach((erro, index) => {
          this.errorMessage(erro)
        });
      }
      // Enviando serviço de cadastro de endereço
    } else if (activeStep === 1) {
      this.setState({ backdrop: true });
      service.registerEndereco({
        rua: this.state.endereco.rua,
        numero: this.state.endereco.numero,
        complemento: this.state.endereco.complemento,
        cep: this.state.endereco.cep,
        bairro: this.state.endereco.bairro,
        usuario: this.state.userId

      }).then(response => {
        this.setState({ backdrop: false });
        this.sucessMessage();
        console.log(response.data)
        this.setState({
          activeStep: activeStep + 1,
        });

      }).catch(erro => {
        this.setState({ backdrop: false });
        console.log(erro);
        this.errorMessage("Não foi possível cadastrar endereço")
      })
    }

  };


  sucessMessage() {
    this.setState({
      alert: {
        severity: 'success',
        mensagem: 'Passo Finalizado!',
        open: true
      }
    })
  }

  errorMessage(msg) {
    console.log("MENSAGEM DE ERRO")
    this.setState({
      alert: {
        severity: 'error',
        mensagem: msg,
        open: true
      }
    })
  }

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

    const fecharAlerta = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      this.setState({ alert: { open: false } });
    };

    return (
      <div>
        <Backdrop open={this.state.backdrop} />
        <Stepper activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label) => {
            const props = {};
            return (
              <Step key={label} {...props}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
        <Snackbar open={this.state.alert.open} autoHideDuration={6000} onClose={fecharAlerta}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={fecharAlerta} severity={this.state.alert.severity}>
            {this.state.alert.mensagem}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

SolicitanteStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SolicitanteStepper);