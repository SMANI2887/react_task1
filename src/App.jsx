import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div>
      <ul class="nav">
  <li class="nav-item" >
    <a class="nav-link active" aria-current="page" href="#">
    

    </a>
  </li>
  
</ul>

      <h2 className='header'>
        <br/>
        <br/>
        React Price Card Task
      </h2>
      <br/><br/>
      <p>Reproduce this user interface using a React.js application with JSX.Write the code in a dynamic manner.</p>

{/* 1st column */}
    <div className='txtbx'>
      <div className='rectangle'>
        <h6 className='header'>FREE</h6>
        <h2 className='header'>$0/month</h2>
        <p className='line'></p>
        
        <div>
        <ul className='tick'> 
          <li>Single User</li>
          <li>50GB Storages</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          </ul>
          <ul className='close'>
          <li className='text_mute'>Unlimited Private Projects</li>
          <li className='text_mute'>Dedicated Phone Support</li>
          <li className='text_mute'>Free Subdomain</li>
          <li className='text_mute'>Monthly Status Reports</li>
          
        </ul>
        <div>
          <button class='btn-primary'>BUTTON</button>
          </div>
        
        </div>
        

      </div>
      {/* 2nd column */}
      <div className='rectangle'>
      <h6 className='header'>PULS</h6>
        <h2 className='header'>$9/month</h2>
        <p className='line'></p>
       
      <ul className='tick'> 
          <li>5 User</li>
          <li>50GB Storages</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
      </ul>
      <ul className='close'>    
          <li className='text_mute'>Monthly Status Reports </li>
          
        </ul>
        <div>
          <button className='btn-primary'>BUTTON</button>
          </div>
        
        
      </div>
      {/* 3rd column */}
      <div className='rectangle'>
      <h6 className='header'>PRO</h6>
        <h2 className='header'>$49/month</h2>
        <p className='line'></p>
       
      <ul className='tick'> 
          <li>Unlimited User</li>
          <li>50GB Storages</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status Reports</li>
          
        </ul>
        <div>
          <button className='btn-primary'>BUTTON</button>
          </div>
      </div>
      
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
export default App;