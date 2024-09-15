
export default function Cliente3() {
  const styles = {
    p: {
      fontSize: '1.2em',
      color: '#333',
      padding: '1vw',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.6em',
    },
    boldText: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.p}>
      <p>
        <span style={styles.boldText}>Beto, 40 anos</span>, atuando como mecânico, se viu obrigado a postergar o conserto de um caminhão devido ao atraso na
        entrega da peça de reposição. O SafeDrive tem como objetivo otimizar o atendimento e o agendamento,
        minimizando tais contratempos e garantindo uma maior eficiência no processo.
      </p>
    </div>
  );
}
