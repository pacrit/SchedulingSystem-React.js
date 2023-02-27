import { Alert, Calendar, TimePicker, Select, Button, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
const HomePage = () => {
  const [value, setValue] = useState(() => dayjs("2023-01-1"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2023-01-1"));
  const [valueHour, setValueHour] = useState();
  const [optionsCat, setOptionsCat] = useState([]);
  const [name, setName] = useState("");

  const options = [
    { label: "Corte", value: "Corte" },
    { label: "Barba", value: "Barba" },
    { label: "Sobrancelha", value: "Sobrancelha" },
    { label: "Progressiva", value: "Progressiva" },
    { label: "Relaxamento", value: "Relaxamento" },
    { label: "Luzes", value: "Luzes" }
  ];

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const format = "HH:mm";

  const enviar = () => {
    console.log(`Olá -- Nome do Cabelereiro --, ${name} realizou um novo agendamento para: ${selectedValue?.format(
      "DD/MM/YYYY"
    )}
    Hora: ${valueHour?.format("HH:mm")}
    e irá fazer ${optionsCat}`);
  };

  return (
    <>
      <Calendar
        fullscreen={false}
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
      <TimePicker
        size={"large"}
        style={{ width: "49%" }}
        value={valueHour}
        onChange={(e) => setValueHour(e)}
        defaultValue={dayjs("00:00", format)}
        format={format}
      />
      <Select
        mode="multiple"
        allowClear
        size={"large"}
        placeholder="Selecione o que deseja fazer"
        onChange={(value) => setOptionsCat(value)}
        style={{
          width: "49%",
          marginLeft: 5
        }}
        options={options}
        value={optionsCat}
      />

      <Input
        size="large"
        placeholder="Nome de quem irá cortar"
        style={{ marginTop: "1em" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Alert
        message={`
        Data selecionada: ${selectedValue?.format("DD/MM/YYYY")}
        Hora: ${valueHour?.format("HH:mm")}`}
        style={{ marginTop: "1em" }}
      />
      <Button
        size={"large"}
        style={{ width: "100%", marginTop: "1em" }}
        onClick={enviar}
      >
        Enviar
      </Button>
    </>
  );
};
export default HomePage;
