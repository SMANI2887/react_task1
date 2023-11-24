import './App.css';

const App = () => {
  return(
    <div className='list'>
      <h2 className='header'>
        React Price Card Task
      </h2>


{/* 1st column */}
    <div className='txtbx'>
      <div className='rectangle'>
        <h6 className='header'>FREE</h6>
        <h1 className='header'>$0/month</h1>
        <p className='line'></p>
        
        <div className='list'>
        <ul> 
          <li className='list'>Single User</li>
          <li className='list'>50GB Storages</li>
          <li className='list'>Unlimited Public Projects</li>
          <li className='list'>Community Access</li>
          <li className='list'>Unlimited Private Projects</li>
          <li className='list'>Dedicated Phone Support</li>
          <li className='list'>Free Subdomain</li>
          <li className='list'>Monthly Status Reports</li>
          
        </ul>
        <div className='btn'>
          <button>BUTTON</button>
          </div>
        
        </div>
        

      </div>
      {/* 2nd column */}
      <div className='rectangle'>
      <h6 className='header'>PULS</h6>
        <h1 className='header'>$9/month</h1>
        <p className='line'></p>
       
      <ul> 
          <li className='list'>5 User</li>
          <li className='list'>50GB Storages</li>
          <li className='list'>Unlimited Public Projects</li>
          <li className='list'>Community Access</li>
          <li className='list'>Unlimited Private Projects</li>
          <li className='list'>Dedicated Phone Support</li>
          <li className='list'>Free Subdomain</li>
          <li className='list'>Monthly Status Reports</li>
          
        </ul>
        <div className='btn'>
          <button>BUTTON</button>
          </div>
        
      </div>
      {/* 3rd column */}
      <div className='rectangle'>
      <h6 className='header'>PRO</h6>
        <h1 className='header'>$0/month</h1>
        <p className='line'></p>
       
      <ul> 
          <li className='list'>Unlimited User</li>
          <li className='list'>50GB Storages</li>
          <li className='list'>Unlimited Public Projects</li>
          <li className='list'>Community Access</li>
          <li className='list'>Unlimited Private Projects</li>
          <li className='list'>Dedicated Phone Support</li>
          <li className='list'>Free Subdomain</li>
          <li className='list'>Monthly Status Reports</li>
          
        </ul>
        <div className='btn'>
          <button>BUTTON</button>
          </div>
      </div>
      
        
      
      </div>
    </div>
  )
}
export default App;