import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Stepper, StepLabel, Step, Button, Typography } from "@material-ui/core";
import UsuarioForm from './../forms/UsuarioForm';
import FormService from '../forms/ServiceRegister/FormService';
import { QontoConnector, QontoStepIcon } from './QontoStepIcon';
import service from '../../../service/userService'
import imageService from '../../../service/image/imageService'
import otherService from './../../../service/otherService'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { validarUsuario, montarUsuario } from '../../../utils/validadores'

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


class StepperPrestador extends React.Component {

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
    alert: {
      open: false,
      mensagem: '',
      severity: '',
    },
    service: {
      titulo: '',
      descricao: '',
      idCategoria: '',
      imagem: null,
    }
  };

  globalChanges(key, value) {
    let changeUser = montarUsuario(key, value, this.state.usuario)
    this.setState({ usuario: changeUser });
  }

  globalChangeServico(key, value) {
    let changeServico = this.state.service;
    if (key === "titulo") {
      changeServico.titulo = value;
    }
    if (key === "descricao") {
      changeServico.descricao = value;
    }
    if (key === "categoria") {
      changeServico.idCategoria = value;
    }
    if (key === "imagem") {
      changeServico.imagem = value[0];
    }
    this.setState({ sercide: changeServico });
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <UsuarioForm globalChanges={this.globalChanges.bind(this)} />;
      case 1:
        return <FormService globalChanges={this.globalChangeServico.bind(this)} />;
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
        // Enviando serciço de cadastro de solicitante
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
        service.registerPrestador(novoUsuario)
          .then(response => {
            this.sucessMessage("Usuário Cadastrado");
            console.log(response.data)
            this.setState({
              activeStep: activeStep + 1,
              userId: response.data.id
            });

          }).catch(erro => {
            this.errorMessage(erro.response.data)
          })

      } else {
        erros.forEach((erro, index) => {
          this.errorMessage(erro)
        });
      }
      //Enviando serviço cadastro de serviço
    } else if (activeStep === 1) {
      let img = this.state.service.imagem;
      let imgUrl = null;

      if (!(!img)) {
        let data = new FormData();
        data.append("image", img);

        imageService.uploadImagem(data)
          .then(response => {
            imgUrl = response.data.data.link;
            this.cadastrarServico(imgUrl)
          }).catch(err => {
            console.log(err)
          })
      } else {
        this.cadastrarServico(null)
      }

    };

  }
  
  cadastrarServico(imgUrl) {
    otherService.cadastrarServico({
      descricao: this.state.service.descricao,
      titulo: this.state.service.titulo,
      prestador: this.state.userId,
      categoriaServico: this.state.service.idCategoria,
      imagem: imgUrl
    }).then(response => {
      this.sucessMessage("Cadastro Finalizado!")
      console.log(response.data);
      this.setState({
        activeStep: this.state.activeStep + 1
      });
    }).catch(err => {
      console.log(err)
    })
  }



  sucessMessage(msg) {
    this.setState({
      alert: {
        severity: 'success',
        mensagem: msg,
        open: true
      }
    })
  }

  errorMessage(msg) {
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

StepperPrestador.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(StepperPrestador);