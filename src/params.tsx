import { PixParams } from "pix-react";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: "1rem",
      display: "grid",
      gridGap: "0.5rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
    }
  })
);

export interface PixFormParams extends PixParams {
  iconurl: string;
}

export interface ParamFormProps {
  model: PixFormParams;
  onChange(n: PixFormParams): void;
}

export function ParamsForm({ model, onChange }: ParamFormProps) {
  const classes = useStyles();

  const change = (field: keyof PixFormParams) => {
    return (ev: any) => {
      onChange({
        ...model,
        [field]: ev.target.value
      });
    };
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="chave"
        helperText="Chave do PIX"
        value={model.chave}
        onChange={change("chave")}
      />
      <TextField
        label="cidade"
        helperText="Cidade"
        value={model.cidade}
        onChange={change("cidade")}
      />
      <TextField
        label="recebedor"
        helperText="Nome de quem vai receber o dinheiro"
        value={model.recebedor}
        onChange={change("recebedor")}
      />
      <TextField
        label="valor (R$)"
        helperText="Valor do PIX"
        value={model.valor}
        onChange={change("valor")}
      />
      <TextField
        label="identificador"
        helperText="Identificador para esse PIX"
        value={model.identificador}
        onChange={change("identificador")}
      />
      <TextField
        label="mensagem"
        helperText="Mensagem/descrição"
        value={model.mensagem}
        onChange={change("mensagem")}
      />
      <TextField
        label="cep"
        helperText="CEP"
        value={model.cep}
        onChange={change("cep")}
      />
      <TextField
        label="icon url"
        helperText="Icon url"
        value={model.iconurl}
        onChange={change("iconurl")}
      />
    </form>
  );
}
