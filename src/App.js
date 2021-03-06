import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, message, Button } from "antd";
import * as yup from "yup";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required(() => message.error("O email não pode ser vazio"))
      .email(() => message.warning("Digite um email válido")),
    password: yup
      .string()
      .required(() => message.error("A senha não pode ser vazia"))
      .min(6, () =>
        message.warning("A senha deve conter pelo menos 6 dígitos")
      ),
  });

  const { register, handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <div className="form">
        <label className="label">Email</label>
        <Controller
          control={control}
          name="email"
          render={({ field: { value } }) => (
            <Input
              placeholder="senha"
              onChange={(el) => setValue("email", el.target.value)}
              value={value}
            />
          )}
        />

        <label className="label">Senha</label>
        <Controller
          control={control}
          name="password"
          render={({ field: { value } }) => (
            <Input
              type="password"
              placeholder="senha"
              onChange={(el) => setValue("password", el.target.value)}
              value={value}
            />
          )}
        />

        <Button className="submit" onClick={handleSubmit(onSubmit)}>
          enviar
        </Button>
      </div>
    </div>
  );
}

export default App;
