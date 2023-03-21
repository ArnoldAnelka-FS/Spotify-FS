import React from 'react';


function Header() {
return <header style={styles.h1}>
        <img src="../spotify.svg" alt="logo" className="img fluid" style={{ height: '50%', width: '3%' }} >
        </img>
      <input type="text" placeholder="Search..." className="Search"/>
</header>
}
      
export default Header;

      const styles = {
        h1: {
     backgroundColor: '#1ED760',
     height: '50px',
        }
      }