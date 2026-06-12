function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 80px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px', color: '#333' }}>
          👋 ¡Hola Mundo!
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', margin: '0 0 30px' }}>
          Desplegado automáticamente con GitHub Actions + Vercel
        </p>
        <div style={{
          background: '#667eea',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '50px',
          display: 'inline-block',
          fontSize: '1rem'
        }}>
          🚀 CI/CD Funcionando
        </div>
      </div>
    </div>
  )
}

export default App