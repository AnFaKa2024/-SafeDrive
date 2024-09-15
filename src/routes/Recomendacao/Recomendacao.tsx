import Recomendacao1 from './Recomendacao1';
import Recomendacao2 from './Recomendacao2';
import Recomendacao3 from './Recomendacao3';

export default function Recomendacao() {
  const styles = {
    global: {
      boxSizing: 'border-box' as const,
      fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
      backgroundColor: '#bdbdc095',
    },
    h2: {
      fontSize: '2em',
      textAlign: 'center' as const,
      color: '#2E0B7D',
      marginBottom: '2vw',
    },
    conteiner2: {
      display: 'grid' as const,
      gridTemplateColumns: '1fr', 
      gap: '2vw',
      padding: '2vw',
    },
    navList: {
      backgroundColor: '#3c157c', 
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'row' as const,
      justifyContent: 'center',
      listStyle: 'none',
    },
    navItem: {
      margin: '1vw 10vw ',
    },
    navLink: {
      textDecoration: 'none',
      color: '#fcf8ff',
      fontSize: '2vw',
    },
  };

  return (
    <div style={styles.global}>
      <nav>
        <ul style={ styles.navList }>
          <li style={styles.navItem}>
            <a href="/Paginas/safedrive.html" style={styles.navLink}>SafeDrive</a>
          </li>
          <li style={styles.navItem}>
            <a href="/Paginas/clientes.html" style={styles.navLink}>Clientes</a>
          </li>
          <li style={styles.navItem}>
            <a href="/Paginas/recomendacoes.html" style={styles.navLink}>Recomendações</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2 style={styles.h2}>Aqui estão algumas dicas essenciais para manter seu veículo em bom estado:</h2>
        <div style={styles.conteiner2}>
          <Recomendacao1 />
          <Recomendacao2 />
          <Recomendacao3 />
        </div>
      </main>
    </div>
  );
};