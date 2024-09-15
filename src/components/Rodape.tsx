import assistenteImg from 'src/assets/assistente_virtual.png'; 

export default function Rodape() {
    const styles = {
        footer: {
            backgroundColor: '#d3d3d3',
            textAlign: 'center',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px', 
        },
        h2: {
            color: '#2e0b7d',
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
            margin: '0', 
        },
        imgAssistente: {
            width: '100px',
            height: 'auto',
        }
    };
  
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
            <h2 style={styles.h2}>FALE CONOSCO ATRAVÉS DO NOSSO ASSISTENTE</h2>
            <img src={assistenteImg} alt="Imagem do assistente virtual" style={styles.imgAssistente} />
        </div>
      </footer>
    );
};
