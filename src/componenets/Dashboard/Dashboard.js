const Dashboard = () =>{


    return (
  <section className="dashboard">
                <h1>Dashboard</h1>
               <div className="dashboard-animal-list">
                <ul className="other-pets-list">
                    <li className="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
                        <p className="description">This is not my cat Gosho</p>
                        <div className="pet-info">
                            <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button className="button">Details</button></a>
                            <i className="fas fa-heart"></i> <span> 2</span>
                        </div>
                    </li>
                   
                </ul>
                </div>
            </section>
    );
}
export default Dashboard;