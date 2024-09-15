export default function Recomendacao3(){
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
        <img style={styles.img} src="src/assets/rec3.jpg" alt="Manutenção no carro" />
        <div style={styles.texto}>
          <p><b>7. Mantenha uma rotina de limpeza:</b> Uma limpeza regular do interior e exterior do carro é essencial.</p>
          <p><b>8. Cuide para evitar danos na lataria:</b> Procure evitar pancadas graves e, se necessário, recorra a serviços de lanternagem para reparos.</p>
          <p><b>9. Observe e corrija ruídos:</b> Ruídos estranhos podem indicar problemas mecânicos que precisam ser corrigidos rapidamente.</p>
        </div>
      </div>
    );
  }
  