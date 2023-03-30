import React,{useContext,useState} from 'react';
import { useHistory,} from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext,firebaseContext} from '../../store/Context';
function Header() {
  const history =useHistory()
  const {user}  = useContext( authContext)
  const{firebase} = useContext(firebaseContext)
  const[search,setSearch] =useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    history.push(`/search?name=${search}`)
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
        
          <Search></Search>
          <form onSubmit={handleSubmit}>
          <input 
          type="text"
          onChange={(e)=>setSearch(e.target.value)}
          placeholder='Search here'
          value={search}
           />
          </form>
           
          <Arrow></Arrow>
        </div>
        {/* <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div> */}
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>history.push('/login')}>{ user? `Welcome ${user.displayName}` :'Login'}</span>
          <hr />
        </div>
        {user && <span onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }}
        >LogOut</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>history.push('create')}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
