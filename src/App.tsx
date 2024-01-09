import "./App.css";

function App() {
  const menuItems: string[] = [
    "Home",
    "Orders",
    "Products",
    "Delivery",
    "Marketing",
    "Analytics",
    "Payments",
    "Tools",
    "Discounts",
    "Audience",
    "Appearance",
    "Plugins",
  ];
  const arr: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <main className="container">
      {/** Side Navigation */}
      <nav className="sideNav">
        <div className="navTop">
          {/** Store Profile */}
          <div className="storeProfile">
            <img className="storeProfileImage" src="./reebok.png" />
            <div className="storeProfileDetails">
              <div className="storeName">Reebok</div>
              <div className="visitStoreText">Visit store</div>
            </div>
            <img className="storeDropDown" src="./down.png" />
          </div>

          {/** Navigation Menu */}
          <div className="navMenu">
            {/** Menu Items */}
            {menuItems.map((item: string) => {
              const imageUrl = "./" + item + ".png";
              const classNameForCurrentItem = "menuItem" + " " + "menu" + item;
              return (
                <div className={classNameForCurrentItem}>
                  <img className="menuIcon" src={imageUrl} />
                  <div className="menuLabel">{item}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="navBottom">
          {/** Wallet Section */}
          <div className="wallet">
            <img className="walletImage" src="./Wallet.png" />
            <div className="credit">
              <div className="creditsTitle">Available Credits</div>
              <div className="creditsText">222.10</div>
            </div>
          </div>
        </div>
      </nav>

      {/** Dashboard Section */}
      <section className="dashboard">
        <div className="headerNav">
          {/** Header Navigation */}
          <div className="heading">
            <h1 className="headerText">Payments</h1>
            <div className="helpSection">
              <img className="helpBtn" src="./questionMark.png" />
              <div className="helpText">How it works?</div>
            </div>
          </div>

          {/** Search Input */}
          <div className="searchInput">
            <img className="searchIcon" src="./Search.png" />
            <input
              className="searchField"
              type="text"
              placeholder="Search features, tutorials, etc."
            />
          </div>

          {/** Header Buttons */}
          <div className="headerButtons">
            <button className="btn">
              <img src="./Feedback.png" />
            </button>
            <button className="btn">
              <img src="./DownArrow.png" />
            </button>
          </div>
        </div>

        <div className="dashboardOverview">
          <div className="dashboardDetails">
            {/** Dashboard Filter and Cards */}
            <div className="dashboardFilter">
              <h1>Overview</h1>
              <select className="filter" name="filter">
                <option
                  className="optionText"
                  value=""
                  disabled
                  selected
                  hidden
                >
                  Last Month
                </option>
              </select>
            </div>

            <div className="cardContainer">
              {/** Dashboard Cards */}
              <div className="card">
                <div>
                  <div className="cardLabel">Online Orders</div>
                  <h2 className="cardText">231</h2>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="cardLabel">Amount Received</div>
                  <h2 className="cardText">₹ 2908049</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboardTable">
            {/** Dashboard Table */}
            <div className="heading">Transactions | This Month</div>
            <div className="tableUtilityCont">
              <div className="tableSearchFilter">
                <img className="searchIcon" src="./Search.png" />
                <input
                  className="input"
                  type="text"
                  placeholder="search for order id.."
                />
              </div>

              <div className="utilityBtnCont">
                <button className="sortBtn">
                  <div>Sort</div>
                  <img src="./Sort.png" />
                </button>
                <img className="download" src="./Download.png" />
              </div>
            </div>

            <div className="tableCont">
              {/** Transaction Table */}
              <div className="table">
                <table className="payoutsTable">
                  <tr className="tableHeaderContainer">
                    <th className="alignLeft">Order Id</th>
                    <th className="alignLeft">Order Date</th>
                    <th className="alignRight">Order Amount</th>
                    <th className="alignRight">
                      Transaction Fees
                      <img className="feesInfo" src="./questionMark.png" />
                    </th>
                  </tr>
                  {arr.map((num: number) => (
                    <tr key={num} className="tableRow">
                      <td className="alignLeft id">#334762</td>
                      <td className="alignLeft">7 July, 2023</td>
                      <td className="alignRight">₹1,278.23</td>
                      <td className="alignRight">₹22</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>

            <div className="paginator">
              {/** Pagination Buttons */}
              <button>
                <img className="arrow" src="./Left.png" />
                Previous
              </button>
              <a>1</a>
              <a>2</a>
              <a>3</a>
              <a>4</a>
              <a>5</a>
              <a>6</a>
              <a>7</a>
              <a>8</a>
              <a>9</a>
              <a>10</a>
              <button>
                Next
                <img className="arrow" src="./Right.png" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
