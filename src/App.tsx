import React, { useState } from "react";
import { ParamsForm, PixFormParams } from "./params";
import { PixQRCode, PixQRCodeProps } from "pix-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "row"
    }
  })
);
export default function App() {
  const classes = useStyles();
  const [editingParams, setEditingParams] = useState<PixFormParams>({
    chave: "+5562555555555",
    cidade: "Goiania",
    recebedor: "Maria da Silva",
    valor: 100,
    identificador: "12345",
    mensagem: "pix-react",
    cep: "74000000",
    iconurl: "https://static.zpao.com/favicon.png"
  });
  const { iconurl, ...pixParams } = editingParams;
  const params: PixQRCodeProps = {
    pixParams: {
      ...pixParams,
      valor: Number(editingParams.valor) || 0
    },
    size: 512,
    includeMargin: true
  };
  if (iconurl)
    params.imageSettings = {
      src: iconurl,
      x: null,
      y: null,
      height: 24,
      width: 24,
      excavate: true
    };
  return (
    <div className={classes.root}>
      <div>
        <h4>
          Exemplo de uso do component{" "}
          <a href="https://www.npmjs.com/package/pix-react">pix-react</a>
        </h4>
        <PixQRCode {...params} />
        <pre>
          {`
function MyPixrCode() {
  const params=${JSON.stringify(params, null, 2).replace(/\n/g, "\n    ")}
  return <PixQRCode pixParams={params} />
}`}
        </pre>
      </div>
      <ParamsForm model={editingParams} onChange={setEditingParams} />
    </div>
  );
}
