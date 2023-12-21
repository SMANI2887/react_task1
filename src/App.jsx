import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const App = () => {
  return(
    <div>
      <h2 className='header'>
        React Price Card Task
      </h2>


{/* 1st column */}
    <div className='txtbx'>
      <div className='rectangle'>
        <h6 className='header'>FREE</h6>
        <h2 className='header'>$0/month</h2>
        <p className='line'></p>
        
        <div>
        <ul className='list'> 
          <li>Single User</li>
          <li>50GB Storages</li>
          <li>Unlimited Public Projects</li>
          <li className='list'>Community Access</li>
          </ul>
          <ul className='element'>
          <li className='hide'>Unlimited Private Projects</li>
          <li className='list'>Dedicated Phone Support</li>
          <li className='list'>Free Subdomain</li>
          <li className='list'>Monthly Status Reports</li>
          
        </ul>
        <div >
          <button class='btn-primary'>BUTTON</button>
          </div>
        
        </div>
        

      </div>
      {/* 2nd column */}
      <div className='rectangle'>
      <h6 className='header'>PULS</h6>
        <h2 className='header'>$9/month</h2>
        <p className='line'></p>
       
      <ul className='list'> 
          <li>5 User</li>
          <li>50GB Storages</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
      </ul>
      <ul>    
          <li>Monthly Status Reports </li>
          
        </ul>
        <div >
          <button className='btn-primary'>BUTTON</button>
          </div>
        
        
      </div>
      {/* 3rd column */}
      <div className='rectangle'>
      <h6 className='header'>PRO</h6>
        <h2 className='header'>$49/month</h2>
        <p className='line'></p>
       
      <ul className='list'> 
          <li className='list'>Unlimited User</li>
          <li className='list'>50GB Storages</li>
          <li className='list'>Unlimited Public Projects</li>
          <li className='list'>Community Access</li>
          <li className='list'>Unlimited Private Projects</li>
          <li className='list'>Dedicated Phone Support</li>
          <li className='list'>Free Subdomain</li>
          <li className='list'>Monthly Status Reports</li>
          
        </ul>
        <div >
          <button className='btn-primary'>BUTTON</button>
          </div>
      </div>
      
        
      
      </div>
    </div>
  )
}
export default App;