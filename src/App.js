import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100" style={{ backgroundColor: '#D6EBF2' }}>
      <h1 className='app-heading' align="center" style={{ fontSize: '30px', fontWeight: 'bold' }}>Invoice Generator</h1>
      <div className="mx-auto max-w-7xl">
        <InvoiceForm />
      </div>
    </div>
  );
}

export default App;
