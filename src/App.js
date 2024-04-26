import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100" style={{ backgroundColor: '#D6EBF2' }}>
      <div className="mx-auto max-w-7xl">
      <h1 className="app-heading">Invoice Generator</h1>
        <InvoiceForm />
      </div>
    </div>
  );
}

export default App;
