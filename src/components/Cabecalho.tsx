

export default function Cabecalho() {
  const styles = {
    headerContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      backgroundColor: '#2e0b7d', 
    },
    logo: {
      position: 'absolute' as const,
      left: '20px',
      top: '20px',
    },
    logoImg: {
      width: '10vw',
      height: 'auto',
    },
    h1: {
      textAlign: 'center' as const,
      color: '#fcf8ff',
      fontFamily:`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
      fontSize: '4vw',
    },
    login: {
      position: 'absolute' as const,
      right: '20px',
      top: '20px',
    },
    loginImg: {
      width: '10vw',
      height: 'auto',
    },
  };
  return (
    <header style={styles.headerContainer}>
      <div style={styles.logo}>
        <img src= 'src\assets\LG_SafeDrive.png' alt="Logo SafeDrive" style={styles.logoImg} />
      </div>
      <h1 style={styles.h1}>Olá, bem-vindo ao SafeDrive</h1>
      <div style={styles.login}>
        <a href="/Paginas/login.html">
          <img src='src/assets/icone_cliente_branco2.png' alt="Ícone Cliente" style={styles.loginImg} />
        </a>
      </div>
    </header>
  );
};