export default function Recomendacao1() {
    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center', 
        gap: '1vw',
        marginBottom: '2vw',
      },
      texto: {
        textAlign: 'justify' as const,
        lineHeight: 1.8,
        fontSize: '1.2em',
        width: '60%', 
      },
      img: {
        width: '35%',
        height: 'auto',
        borderRadius: '5px',
      },
    };
  
    return (
      <div style={styles.container}>
        <img style={styles.img} src="src\assets\rec1.jpg" alt="Troca de óleo" />
        <div style={styles.texto}>
          <p><b>1. Evite deixar o carro parado por longos períodos:</b> Mesmo que não utilize o veículo diariamente, é importante ligá-lo 
          por alguns minutos a cada dois dias para preservar a bateria e o sistema elétrico.</p>
          <p><b>2. Lembre-se da troca de fluidos e filtros:</b> Substituir os fluidos regularmente é fundamental para evitar danos ao motor 
          e garantir sua longevidade.</p>
          <p><b>3. Acompanhe a vida útil do óleo:</b> O óleo do motor desempenha um papel crucial no funcionamento adequado do veículo. Certifique-se
             de usar óleo de qualidade recomendado pelo fabricante e respeitar os intervalos de troca.</p>
        </div>
      </div>
    );
  }
  