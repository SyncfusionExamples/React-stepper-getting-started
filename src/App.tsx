import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';
import './App.css';

function App() {
  return (
    <div className="App">
      <StepperComponent>
        <StepsDirective>
          <StepDirective iconCss={'sf-icon-cart'} label='Cart'/>
          <StepDirective iconCss={'sf-icon-user'} label='Address'/>
          <StepDirective iconCss={'sf-icon-payment'} label='Payment'/>
          <StepDirective iconCss={'sf-icon-success'} label='Ordered'/>
        </StepsDirective>
      </StepperComponent>
    </div>
  );
}

export default App;
