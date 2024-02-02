import Background from "../assets/images/space.jpg"

function Home() {
  return (
    <div
    style ={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
      <div className="flex place-items-center h-screen">
        <h3 className="p-5 bg-white bg-opacity-40 rounded text-black">
           Welcome to Space Corp Astronaut! We cannot wait to see the places you go, and the suits you use!
        </h3>
      </div>
    </div>
  )
}

export default Home
