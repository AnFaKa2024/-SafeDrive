
export default function Cliente2() {
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
        <span style={styles.boldText}>Lucilene, 54 anos</span>, que trabalha como Supply Chain em uma empresa de alimentos, costuma usar seu carro para se
        deslocar até o trabalho. Ocasionalmente, ela se depara com surpresas indesejadas relacionadas ao carro.
        Para ajudar a resolver esses problemas inesperados, o SafeDrive oferece uma solução prática. Através de dicas úteis,
        o SafeDrive tem como objetivo melhorar a experiência de condução de Lucilene, permitindo que ela aproveite ao máximo seu carro.
      </p>
    </div>
  );
}
