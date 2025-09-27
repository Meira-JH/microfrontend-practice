import ConsentManager from "consent_app/ConsentManager";
import { Suspense } from "react";
import "./App.css";

// TypeScript now recognizes this import because of remotes.d.ts

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Customer Portal (Host App)</h1>
        <p>This component is loaded from an independent TypeScript application.</p>

        <Suspense fallback={<div>Loading consent options...</div>}>
          <ConsentManager />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
