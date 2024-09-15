export default function Recomendacao2() {
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
        <div style={styles.texto}>
          <p><b>4. Dirija com cuidado:</b> Uma condução suave ajuda a preservar componentes importantes do carro, como molas e amortecedores.
           Evite solavancos.</p>
          <p><b>5. Verifique os pneus regularmente:</b> Manter os pneus em boas condições é essencial para garantir a segurança e o desempenho
           do veículo.</p>
           <p><b>6. Proteja a pintura:</b> Manter a pintura do carro protegida contra elementos externos, como poeira, dejetos de pássaros e raios solares, 
            ajuda a evitar danos e manter o aspecto novo do veículo.</p>
        </div>
        <img style={styles.img} src="src/assets/rec2.jpg" alt="Manutenção nos pneus" />
      </div>
    );
  }
  