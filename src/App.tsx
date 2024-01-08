import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="sideNav">
        <div className="navTop">
          <div className="storeProfile"></div>
          <div className="navMenu"></div>
        </div>
        <div className="navBottom"></div>
      </div>
      <div className="mainView">
        <div className="dashboardHeader"></div>
        <div className="dashboard">
          <div className="dashboardDetails"></div>
          <div className="dashboardTable"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
