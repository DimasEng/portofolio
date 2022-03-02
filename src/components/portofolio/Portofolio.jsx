import "./portofolio.scss"

export default function Portofolio() {
  return (
    <div className="portofolio" id="portofolio">
        <h1>Portofolio</h1>
        <div className="container">
          <div className="item">
            <img src="assets/movie.png" alt="" />
            <h3>Movie App</h3>
          </div>
          <div className="item">
            <img src="assets/weather.png" alt="" />
            <h3>Weather App</h3>
          </div>
          <div className="item">
            <img src="assets/password.png" alt="" />
            <h3>Password Generator App</h3>
          </div>
          <div className="item">
            <img src="assets/todo.png" alt="" />
            <h3>To-Do App</h3>
          </div>
          <div className="item">
            <img src="assets/note.png" alt="" />
            <h3>Notes App</h3>
          </div>
          <div className="item">
            <img src="assets/Portofolio Drawing.png" alt="" />
            <h3>Drawing App</h3>
          </div>
          
        </div>
    </div>
  )
}
