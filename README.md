# React Hook Form

![Logo do Markdown](./src/assets/reacthook.png)

React-hook-form é uma biblioteca que ajuda a validar formulários no React, além disso é uma leb mínima sem quaisquer outras dependências. É eficiente e fácil de usar, exigindo que os desenvolvedores escrevam menos linhas de código do que outras bibliotecas de formulários.

## Introdução

O React Hook Form tem uma abordagem diferente de outras bibliotecas de formulários no ecossistema React. Ele adota o uso de entradas não controladas usando **ref**(referência) em vez de depender do estado para controlar as entradas. Essa abordagem torna os formulários mais eficientes e reduz o número de novas renderizações.

### Métodos utilizados no **React Hook Form**

> Principais métodos usados

- **register** → Registra os campos com uma key para cada campo do formulário
- **setValue** → Armazena o que está sendo digitado no campo de texto;
- **getValue** → Um auxiliar otimizado para ler os valores do formulário, **lembrando que não acionará novas renderizações**;
- **handleSubmit** → É uma função que trata a submissão dos dados digitados nos campos de texto.

### Validações

Existem algumas formas de fazer validações dos dados, e uma das forma é utilizando o **yup**, que vai nos permitir criar um **schema** de validações para garantir que os dados estejam corretos

> Para instalar yup: **npm i -S yup**

### Controller

Este component de invólucro permite abranger components não controlados, é muito familiar usar com components de UI externas, como **antd, materialUI**

```javascript
  <Controller
    control={control}
    name="password"
    render={({ field: { value } }) => (
      <Input
        placeholder="senha"
        onChange={(el) => setValue("password", el.target.value)}
        value={value}
      />
    )}
  />
```

### useController

Este hook personalizado alimenta o controlador e é útil para utilizar e criar entradas controladas reutilizáveis.

```javascript
function TextField({ name, control, onChange }) {
  const {
    field: {ref, ...inputProps},
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <Input {...inputProps} />
  );
}
```

