
import Cliente1 from './Cliente1';
import Cliente2 from './Cliente2';
import Cliente3 from './Cliente3';

export default function Cliente() {
  const styles = {
    global: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box' as const,
        fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
        backgroundColor: '#f0f0f0', 
        overflowX: 'hidden' as const,
        minHeight: '100vh', 
      },
    h2: {
      fontSize: '2em',
      textAlign: 'center' as const,
      color: '#2E0B7D',
      marginBottom: '2vw',
    },
    container: {
      display: 'grid' as const,
      gridTemplateColumns: '1fr',
      gap: '2vw',
      padding: '2vw',
    },
  };

  return (
    <div style={styles.global}>
      <main>
        <h2 style={styles.h2}>Algumas Histórias de Clientes</h2>

        {/* Container para os componentes */}
        <div style={styles.container}>
          <Cliente1 />
          <Cliente2 />
          <Cliente3 />
        </div>
      </main>
    </div>
  );
}
