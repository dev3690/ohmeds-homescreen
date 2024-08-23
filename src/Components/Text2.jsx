// import React from 'react';

// const Text1 = () => {
//   return (
//     <footer className="text-center py-4" style={{ backgroundColor: '#e67837',fontSize:'22px' , color: '#fff', maxWidth: '900px', margin: '10px auto', borderRadius: '10px' }}>
//        Minimum 15% Off on All Medicinces and Upto 70% Off on Generic Medicines
//     </footer>
//   );
// };

// export default Text1;


import React from 'react';

const Text1 = () => {
  return (
    <footer 
      className="text-center py-4" 
      style={{ 
        backgroundColor: '#ff5722', 
        color: '#fff', 
        maxWidth: '900px', 
        margin: '20px auto', 
        borderRadius: '15px', 
        padding: '15px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontSize: '15px',
        // fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}
    >
      <span style={{ fontSize: '18px', display: 'block',fontWeight: 'bold',marginBottom: '5px' }}>💊 Mega Discounts!</span>
      <span>Minimum <span style={{fontWeight: 'bold',fontSize: '18px'}}> 15% Off</span> on All Medicines</span>
      <span style={{ display: 'block', marginTop: '5px' }}>Up to <span style={{fontWeight: 'bold',fontSize: '18px'}}> 70% Off</span> on Generic Medicines</span>
      <p style={{ fontSize: '16px', margin: '0' }}>
        Fast and Reliable Delivery*
      </p>
    </footer>
  );
};

export default Text1;





// import React from 'react';

// const Text1 = () => {
//   return (
//     <footer 
//       className="text-center py-4" 
//       style={{
//         backgroundColor: '#e67837',
//         color: '#fff',
//         maxWidth: '900px',
//         margin: '10px auto',
//         borderRadius: '10px',
//         padding: '15px 20px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         fontSize: '18px', // Adjusted for better mobile readability
//       }}
//     >
//       <p style={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '22px' }}>
//         Minimum 15% Off on All Medicines and Up to 70% Off on Generic Medicines
//       </p>
    //   <p style={{ fontSize: '16px', margin: '0' }}>
    //     Fast and Reliable Delivery*
    //   </p>
//     </footer>
//   );
// };

// export default Text1;
