import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ReportWizard } from './pages/ReportIncident/ReportWizard';
import { Dashboard } from './pages/Dashboard';
import { CaseDetail } from './pages/CaseDetail';
import { AdminConsole } from './pages/AdminConsole';
import { DetectionPerformance } from './pages/DetectionPerformance';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<ReportWizard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/reports/:id" element={<CaseDetail />} />
          <Route path="/admin" element={<AdminConsole />} />
          <Route path="/admin/detection-performance" element={<DetectionPerformance />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
