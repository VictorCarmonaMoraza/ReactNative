export const BasicTypes = () => {
  //Declarcion de const
  const name: string = "Victor";
  const age: number = 35;
  const isActive: boolean = true;
  const names: string[] = ["Victor", "Pepe"];

  const powers: string[] = ["React", "React native", "Angular", "Vue"];

  return (
    <>
      <h3>Tipos basicos</h3>
      {name}
      <br></br>
      {isActive ? "True-Activo" : "False-Inactivo"}
      <br></br>
      {age}
      <br></br>
      {powers.join(", ")}
      <br></br>
      {names.join(", ")}
    </>
  );
};
