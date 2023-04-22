import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { VideoProcessor } from './pages/VideoProcessor';
import { ResultsView } from './pages/ResultsView';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Container>
        <Routes>
          <>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/video-processor' element={<VideoProcessor />} />
            <Route path='/results-view' element={<ResultsView />} />
          </>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
