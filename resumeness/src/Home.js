const Home = () => {
    return (
        <div className="home">
        {/* <div className="title">RESUMENESS</div> */}
        <div className="details">ONLINE RESUME BUILDER</div>;
        <div className="create">
            <div className="items">
                <img src="./photos/CV template2.jpg" alt="tmpimg" />
                <button>Add CV</button>
            </div>
            <div className="items">
                <img src="photos/coverletter.webp" alt="tmpimg" />
                <button>Add Cover Letter</button>
            </div>
        </div>
        </div>
        
      );
}
 
export default Home;