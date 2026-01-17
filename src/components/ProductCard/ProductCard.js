function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <div style={{
      width: '292px',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    }}>
      {/* Imagem do produto */}
      <img 
        src={image} 
        alt={name}
        style={{
          width: '292px',
          height: '321px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      />
      
      {/* Nome do produto */}
      <h3 style={{
        fontSize: '16px',
        color: '#474747',
        fontWeight: 'normal',
        margin: '0 0 8px 0'
      }}>
        {name}
      </h3>
      
      {/* Container de preços */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* Se tem desconto, mostra os dois preços */}
        {priceDiscount ? (
          <>
            {/* Preço original riscado */}
            <span style={{
              fontSize: '24px',
              color: '#CCCCCC',
              textDecoration: 'line-through'
            }}>
              ${price}
            </span>
            
            {/* Preço com desconto */}
            <span style={{
              fontSize: '24px',
              color: '#1F1F1F',
              fontWeight: 'bold'
            }}>
              ${priceDiscount}
            </span>
          </>
        ) : (
          /* Se não tem desconto, mostra só o preço normal */
          <span style={{
            fontSize: '24px',
            color: '#1F1F1F'
          }}>
            ${price}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;