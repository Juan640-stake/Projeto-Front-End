function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section style={{ padding: '40px 20px' }}>
      {/* Container do cabeçalho */}
      <div style={{
        display: 'flex',
        justifyContent: titleAlign === 'center' ? 'center' : 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        
        {/* Título */}
        <h2 style={{
          fontSize: '24px',
          color: '#474747',
          margin: 0,
          width: titleAlign === 'center' ? '100%' : 'auto',
          textAlign: titleAlign
        }}>
          {title}
        </h2>
        
        {/* Link opcional */}
        {link && (
          <a href={link.href} style={{
            fontSize: '18px',
            color: '#C92071',
            textDecoration: 'none'
          }}>
            {link.text}
          </a>
        )}
      </div>
      
      {/* Conteúdo (children) */}
      {children}
    </section>
  );
}

export default Section;